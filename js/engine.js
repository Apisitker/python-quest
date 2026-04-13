let currentPlayer = { name: 'Hero', avatar: '🧙‍♂️', completedLessons: [], xp: 0, stars: 0, badges: [] };
let googleUserId = null;
let currentWorld = null, currentLesson = null;
let currentInterview = null;

function saveProgress() {
  if (googleUserId) {
    localStorage.setItem('pq_save_' + googleUserId, JSON.stringify(currentPlayer));
  } else {
    localStorage.setItem('pq_save_guest', JSON.stringify(currentPlayer));
  }
}

window.addEventListener('beforeunload', saveProgress);

function signOut() {
  googleUserId = null;
  currentPlayer = { name: 'Hero', avatar: '🧙‍♂️', completedLessons: [], xp: 0, stars: 0, badges: [] };
  openSplashScreen();
}

// --- Python Run Logic ---
function runCode(isSubmit = false) {
  const code = document.getElementById('code-editor').value;
  const out = document.getElementById('code-output');
  out.textContent = ''; out.className = 'code-output';
  if (!window.Sk) { out.textContent = 'Setup error: Skulpt missing.'; return; }
  
  Sk.configure({ output: (text) => { out.textContent += text; }, read: function(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
  }});
  
  Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, code, true))
    .then(() => {
      if (isSubmit) {
        if (out.textContent.trim() === currentLesson.expectedOutput.trim()) {
          if (Math.random() > 0.4) {
            document.getElementById('minigame-modal').style.display = 'flex';
            document.getElementById('chest-reward-text').style.display = 'none';
            document.querySelectorAll('.mystery-chest').forEach(c => { c.textContent = '🎁'; c.style.pointerEvents = 'auto'; c.style.transform = 'scale(1)'; });
          } else {
            launchArcade();
          }
        } else {
           document.getElementById('result-modal').style.display = 'flex';
           document.getElementById('modal-title').textContent = "Try Again!";
           document.getElementById('modal-title').style.color = "var(--red)";
           document.getElementById('modal-msg').textContent = "Syntax Error. The runes were incorrectly inscribed.";
           const btn = document.getElementById('modal-primary-btn');
           btn.textContent = "Retry ⟳";
           btn.onclick = () => { document.getElementById('result-modal').style.display='none'; };
        }
      }
    })
    .catch(err => { out.textContent = err.toString(); out.className = 'code-output error'; });
}

function submitCode() { runCode(true); }

function nextLesson() { 
  document.getElementById('result-modal').style.display='none'; 
  const currentIndex = currentWorld.lessons.findIndex(l => l.id === currentLesson.id);
  
  if (currentIndex >= 0 && currentIndex < currentWorld.lessons.length - 1) {
      currentLesson = currentWorld.lessons[currentIndex + 1];
      openChallenge();
  } else if (currentIndex === currentWorld.lessons.length - 1 && currentWorld.bossChallenge && !currentPlayer.completedLessons.includes(currentWorld.bossChallenge.id)) {
      currentLesson = currentWorld.bossChallenge;
      openChallenge();
  } else {
      openMapScreen();
  }
}

// --- Arcade Engine ---
let arcadeInterval = null;
let arcadeLives = 3;
let arcadeScore = 0;
let arcadeGameDef = null;
let arcadeState = {};

const arcadeKeydownHandler = (e) => { if(arcadeGameDef) arcadeGameDef.keydown(e); };

function launchArcade() {
  arcadeGameDef = ARCADE_GAMES[Math.floor(Math.random() * ARCADE_GAMES.length)];
  document.getElementById('arcade-title').textContent = arcadeGameDef.title;
  document.getElementById('arcade-goal').innerHTML = `<strong>Goal:</strong> ${arcadeGameDef.goal}`;
  document.getElementById('arcade-controls').innerHTML = `<strong>Controls:</strong> ${arcadeGameDef.controls}`;
  
  document.getElementById('arcade-modal').style.display = 'flex';
  document.getElementById('arcade-tutorial').style.display = 'block';
  document.getElementById('arcade-game-area').style.display = 'none';
}

function initArcadeGame() {
  document.getElementById('arcade-tutorial').style.display = 'none';
  document.getElementById('arcade-game-area').style.display = 'block';
  arcadeLives = 3;
  arcadeScore = 0;
  updateArcadeLives();
  updateArcadeScore();
  
  document.removeEventListener('keydown', arcadeKeydownHandler);
  document.addEventListener('keydown', arcadeKeydownHandler);
  
  const canvas = document.getElementById('arcade-canvas');
  canvas.onclick = (e) => {
    if(!arcadeGameDef || !arcadeGameDef.click) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    arcadeGameDef.click(x, y);
  };
  
  spawnArcade();
}

function spawnArcade() {
  arcadeGameDef.init(); 
  if(arcadeInterval) clearInterval(arcadeInterval);
  const canvas = document.getElementById('arcade-canvas');
  const ctx = canvas.getContext('2d');
  arcadeInterval = setInterval(() => arcadeGameDef.loop(ctx), arcadeGameDef.fps);
}

function updateArcadeScore() { document.getElementById('arcade-score').textContent = `Score: ${arcadeScore}`; }
function updateArcadeLives() {
  let ls = "Lives: "; for(let i=0; i<arcadeLives; i++) ls += "❤️";
  document.getElementById('arcade-lives').textContent = ls;
}

function arcadeCrash() {
  clearInterval(arcadeInterval);
  arcadeLives--;
  updateArcadeLives();
  if(arcadeLives > 0) {
    setTimeout(spawnArcade, 1000);
  } else {
    document.removeEventListener('keydown', arcadeKeydownHandler);
    const bonusXP = arcadeScore * 10;
    currentPlayer.xp += bonusXP;
    if (!currentPlayer.completedLessons.includes(currentLesson.id)) {
        currentPlayer.completedLessons.push(currentLesson.id);
    }
    saveProgress();
    setTimeout(() => {
      document.getElementById('arcade-modal').style.display = 'none';
      document.getElementById('result-modal').style.display = 'flex';
      document.getElementById('modal-title').style.color = "var(--green)";
      document.getElementById('modal-msg').textContent = `Spell cast successfully! You scored ${bonusXP} bonus XP in ${arcadeGameDef.title}!`;
      const btn = document.getElementById('modal-primary-btn');
      btn.textContent = "Next →";
      btn.onclick = nextLesson;
    }, 1000);
  }
}

// --- Interview System ---
let interviewTaskIndex = 0;
let interviewTimer = null;
let interviewTimeLeft = 2400;

function startInterviewLogic() {
    document.getElementById('interview-intro-pane').style.display = 'none';
    document.getElementById('interview-code-pane').style.display = 'flex';
    interviewTaskIndex = 0;
    interviewTimeLeft = 2400;
    updateInterviewTimer();
    loadInterviewTask();
    
    clearInterval(interviewTimer);
    interviewTimer = setInterval(() => {
        interviewTimeLeft--;
        updateInterviewTimer();
        if (interviewTimeLeft <= 0) {
            clearInterval(interviewTimer);
            alert("TIME EXPIRED! Please try again later.");
            openMapScreen();
        }
    }, 1000);
}

function updateInterviewTimer() {
    const min = Math.floor(interviewTimeLeft / 60);
    const sec = interviewTimeLeft % 60;
    document.getElementById('interview-timer').textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function loadInterviewTask() {
    const task = currentInterview.tasks[interviewTaskIndex];
    document.getElementById('interview-task').innerHTML = `<h3>${task.title}</h3><p>${task.taskHTML}</p>`;
    document.getElementById('interview-editor').value = "";
    document.getElementById('interview-question-count').textContent = `Task ${interviewTaskIndex + 1}/${currentInterview.tasks.length}`;
    document.getElementById('interview-output').textContent = "Ready...";
}

function runInterviewCode() {
    const code = document.getElementById('interview-editor').value;
    const out = document.getElementById('interview-output');
    out.textContent = ''; out.className = 'code-output';
    Sk.configure({ output: (text) => { out.textContent += text; }, read: (x) => Sk.builtinFiles["files"][x] });
    Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, code, true))
      .catch(err => { out.textContent = err.toString(); out.className = 'code-output error'; });
}

function submitInterviewAnswer() {
    const out = document.getElementById('interview-output').textContent.trim();
    const expected = currentInterview.tasks[interviewTaskIndex].expectedOutput.trim();
    if (out === expected) {
        interviewTaskIndex++;
        if (interviewTaskIndex < currentInterview.tasks.length) {
            loadInterviewTask();
        } else {
            clearInterval(interviewTimer);
            if(!currentPlayer.badges) currentPlayer.badges = [];
            if(!currentPlayer.badges.includes(currentInterview.badgeId)) {
                currentPlayer.badges.push(currentInterview.badgeId);
            }
            currentPlayer.xp += 500;
            saveProgress();
            alert(`CONGRATULATIONS! You earned the ${currentInterview.level} badge!`);
            openProfileScreen();
        }
    } else {
        alert("Incorrect solution.");
    }
}

function updateProfileBadges() {
    const ids = ['junior','mid','senior'];
    ids.forEach(b => {
        const unlocked = currentPlayer.badges && currentPlayer.badges.includes(b);
        const el = document.getElementById('badge-' + b);
        if (el) {
          if (unlocked) el.classList.add('unlocked');
          else el.classList.remove('unlocked');
        }
        const hudEl = document.getElementById('hud-badge-' + b);
        if (hudEl) {
          if (unlocked) hudEl.classList.add('unlocked');
          else hudEl.classList.remove('unlocked');
        }
    });
}
