function handleGoogleLogin(response) {
  const payload = JSON.parse(atob(response.credential.split('.')[1]));
  googleUserId = payload.sub; 
  
  const saved = localStorage.getItem('pq_save_' + googleUserId);
  const guestSaved = localStorage.getItem('pq_save_guest');
  
  if (saved) {
    currentPlayer = { ...currentPlayer, ...JSON.parse(saved) };
  } else if (guestSaved) {
    currentPlayer = { ...currentPlayer, ...JSON.parse(guestSaved) };
    currentPlayer.name = payload.name.split(' ')[0];
    saveProgress();
  } else {
    currentPlayer.name = payload.name.split(' ')[0];
  }
  
  document.getElementById('google-user-name').textContent = payload.name;
  document.getElementById('google-user-email').textContent = payload.email;
  const img = document.getElementById('google-avatar-img');
  img.src = payload.picture;
  img.style.display = 'block';
  
  openProfileScreen();
}

function hideAll() { document.querySelectorAll('.screen').forEach(s => s.style.display = 'none'); }
function openSplashScreen() { hideAll(); document.getElementById('splash-screen').style.display = 'flex'; }
function openProfileScreen() { hideAll(); updateProfileBadges(); renderAvatarGrid(); document.getElementById('profile-screen').style.display = 'flex'; }
function openMapScreen() { hideAll(); renderMap(); document.getElementById('map-screen').style.display = 'flex'; }
function showCodePane() { document.getElementById('theory-pane').style.display='none'; document.getElementById('code-pane').style.display='flex'; }

function openInterviewScreen() {
    hideAll();
    document.getElementById('interview-screen').style.display = 'flex';
    document.getElementById('interview-intro-pane').style.display = 'flex';
    document.getElementById('interview-code-pane').style.display = 'none';
}

function openChallenge() {
  hideAll();
  document.getElementById('challenge-screen').style.display = 'flex';
  document.getElementById('theory-pane').style.display = 'flex';
  document.getElementById('code-pane').style.display = 'none';
  document.getElementById('challenge-title').textContent = currentLesson.title;
  document.getElementById('theory-content').innerHTML = currentLesson.theoryHTML;
  document.getElementById('code-task').innerHTML = currentLesson.taskHTML;
  document.getElementById('code-editor').value = currentLesson.initialCode;
  document.getElementById('hint-panel').textContent = currentLesson.hint;
  document.getElementById('hint-panel').style.display = 'none';

  const isBoss = !!currentLesson.isBoss;
  document.querySelector('.btn-hint').style.display = isBoss ? 'none' : 'block';
  document.getElementById('btn-tutorial').style.display = isBoss ? 'none' : 'block';

  if (tutorialInterval) { clearInterval(tutorialInterval); tutorialInterval = null; }
}

function renderAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  if (!grid) return;
  const avatars = ['🧙‍♂️','🧉','🧑‍🚀','🧑‍💻','🧘‍♀️','🧑‍🎓','🥸','🧑‍🎨'];
  grid.innerHTML = avatars.map(a => `<div class="avatar-option ${currentPlayer.avatar===a?'selected':''}" onclick="selectAvatar('${a}')">${a}</div>`).join('');
}

function selectAvatar(a) {
  currentPlayer.avatar = a;
  renderAvatarGrid();
}

function createHero() {
  saveProgress();
  openMapScreen();
}

function renderMap() {
  const xpPerLevel = 100;
  const level = Math.floor((currentPlayer.xp || 0) / xpPerLevel) + 1;
  const xpInLevel = (currentPlayer.xp || 0) % xpPerLevel;
  const levelTitles = ['Apprentice','Coder','Developer','Wizard','Master'];
  const levelTitle = levelTitles[Math.min(level - 1, levelTitles.length - 1)];
  
  document.getElementById('hud-name').textContent = currentPlayer.name;
  document.getElementById('hud-avatar').textContent = currentPlayer.avatar;
  document.getElementById('hud-level').textContent = `Lv.${level} ${levelTitle}`;
  document.getElementById('hud-xp-label').textContent = `${xpInLevel} / ${xpPerLevel} XP`;
  document.getElementById('hud-xp-bar').style.width = `${(xpInLevel / xpPerLevel) * 100}%`;
  document.getElementById('hud-stars').textContent = `⭐ ${currentPlayer.stars || 0}`;
  const grid = document.getElementById('worlds-grid');
  grid.innerHTML = '';
  
  let lastLessonCompleted = true; 
  let currentTaskNode = null;
  
  WORLDS.forEach((w, index) => {
    let wNode = document.createElement('div');
    wNode.className = 'world-node';
    wNode.style.setProperty('--wc', w.color);
    wNode.innerHTML = `
      <div class="world-node-icon" style="width:130px;height:130px;font-size:4.5rem;box-shadow:0 0 40px ${w.color}">${w.icon}</div>
      <div class="world-node-info" style="min-width:320px; padding:20px 30px;">
          <div class="world-node-name" style="font-size:1.5rem;">${w.name}</div>
          <div class="world-difficulty" style="margin:0; margin-top:8px; font-size:0.85rem;">${w.difficulty}</div>
      </div>
    `;
    grid.appendChild(wNode);
    
    const boss = w.bossChallenge;
    w.lessons.forEach(l => {
        let lNode = document.createElement('div');
        const isCompleted = currentPlayer.completedLessons.includes(l.id);
        const isUnlocked = isCompleted || lastLessonCompleted;
        lNode.className = 'lesson-hub ' + (isUnlocked ? '' : 'locked') + (isCompleted ? ' completed' : '');
        lNode.style.setProperty('--wc', w.color);
        lNode.innerHTML = `
          <div class="lesson-hub-name">${l.title}</div>
          ${isCompleted ? '<div style="color:var(--green); font-size:1.3rem;">✅</div>' : ''}
        `;
        if(isUnlocked) {
           lNode.onclick = () => { currentWorld = w; currentLesson = l; openChallenge(); };
           if (!isCompleted && !currentTaskNode) currentTaskNode = lNode;
        }
        grid.appendChild(lNode);
        lastLessonCompleted = isCompleted;
    });

    if (boss) {
        const bossIsCompleted = currentPlayer.completedLessons.includes(boss.id);
        const bossIsUnlocked = lastLessonCompleted || bossIsCompleted;
        let bNode = document.createElement('div');
        bNode.className = 'lesson-hub ' + (bossIsUnlocked ? '' : 'locked') + (bossIsCompleted ? ' completedBoss' : '');
        bNode.style.setProperty('--wc', w.color);
        bNode.style.marginTop = "20px"; bNode.style.marginBottom = "40px";
        bNode.innerHTML = `
          <div class="lesson-hub-name" style="font-weight:900;">👑 FINAL TRIAL</div>
          ${bossIsCompleted ? '<div style="color:var(--green); font-size:1.3rem;">✅</div>' : ''}
        `;
        if(bossIsUnlocked) {
            bNode.onclick = () => { currentWorld = w; currentLesson = boss; openChallenge(); };
            if (!bossIsCompleted && !currentTaskNode) currentTaskNode = bNode;
        }
        grid.appendChild(bNode);
        lastLessonCompleted = bossIsCompleted;
    }
    
    const currentInt = INTERVIEWS.find(i => i.worldMatch === index);
    if (currentInt && lastLessonCompleted) {
        const badgeUnlocked = currentPlayer.badges.includes(currentInt.badgeId);
        let mNode = document.createElement('div');
        mNode.className = 'world-node';
        mNode.style.marginTop = '40px'; mNode.style.marginBottom = '60px';
        mNode.innerHTML = `
          <div class="world-node-icon" style="width:140px;height:140px;font-size:5rem;border-color:#fff;border-style:dashed;background:#111;">${currentInt.icon}</div>
          <div class="world-node-info" style="min-width:340px; border:2px solid #fff; position:relative;">
              <div style="position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:#000; color:#fff; font-size:0.6rem; padding:2px 10px; border:1px solid #fff; border-radius:999px;">MILESTONE</div>
              <div class="world-node-name">${currentInt.level} Simulation</div>
              <div style="color:var(--text-secondary); font-size:0.8rem;">${badgeUnlocked ? '✅ HIRED' : '⚠️ REVIEW PENDING'}</div>
          </div>
        `;
        if (!badgeUnlocked) mNode.onclick = () => { currentInterview = currentInt; openInterviewScreen(); };
        grid.appendChild(mNode);
    }
  });

  if (currentTaskNode) {
      setTimeout(() => { currentTaskNode.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
  }
}

let tutorialInterval = null;
function playCodeTutorial() {
  if (tutorialInterval) return;
  const editor = document.getElementById('code-editor');
  const tutorialCode = currentLesson.hint;
  editor.value = ""; editor.focus();
  let index = 0;
  const btn = document.getElementById('btn-tutorial');
  const originalText = btn.textContent;
  btn.textContent = "⌨️ Watching..."; btn.disabled = true;

  tutorialInterval = setInterval(() => {
      if (index < tutorialCode.length) {
          editor.value += tutorialCode[index];
          index++;
          editor.scrollTop = editor.scrollHeight;
      } else {
          clearInterval(tutorialInterval);
          tutorialInterval = null;
          btn.textContent = originalText; btn.disabled = false;
      }
  }, 60 + Math.random() * 60);

  editor.oninput = () => {
      if (tutorialInterval) {
          clearInterval(tutorialInterval); tutorialInterval = null;
          btn.textContent = originalText; btn.disabled = false;
      }
  };
}

function pickChest(el) {
  document.querySelectorAll('.mystery-chest').forEach(c => c.style.pointerEvents = 'none');
  const bonusXP = [10, 25, 50, 100][Math.floor(Math.random() * 4)];
  const bonusStars = Math.random() > 0.7 ? 1 : 0;
  el.textContent = bonusStars ? '🏆' : '💎';
  const rt = document.getElementById('chest-reward-text');
  rt.style.display = 'block'; rt.innerHTML = `+${bonusXP} XP ${bonusStars ? '& +1 ⭐' : ''}`;
  currentPlayer.xp += bonusXP; currentPlayer.stars += bonusStars;
  if (!currentPlayer.completedLessons.includes(currentLesson.id)) currentPlayer.completedLessons.push(currentLesson.id);
  saveProgress();
  setTimeout(() => {
    document.getElementById('minigame-modal').style.display = 'none';
    document.getElementById('result-modal').style.display = 'flex';
    document.getElementById('modal-msg').textContent = `Success! +${bonusXP} XP!`;
    const btn = document.getElementById('modal-primary-btn');
    btn.textContent = "Next →"; btn.onclick = nextLesson;
  }, 1800);
}

document.getElementById('code-editor').addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = this.selectionStart;
    this.value = this.value.substring(0, start) + "    " + this.value.substring(this.selectionEnd);
    this.selectionStart = this.selectionEnd = start + 4;
  }
});
