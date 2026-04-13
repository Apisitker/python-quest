const WORLDS = [
  {
    id: 'w1',
    name: 'The Basics Forest',
    desc: 'Begin your journey. Learn to output text and use simple variables.',
    color: '#7c6af7',
    icon: '🌲',
    difficulty: 'Beginner',
    lessons: [
      {
        id: 'w1-l1',
        title: 'Hello, World!',
        type: 'Theory + Code',
        theoryHTML: `
          <h2>Welcome to Python!</h2>
          <p>Python is a powerful, readable programming language used by millions of developers.</p>
          <h3>Your First Spell</h3>
          <p>In Python, the <code>print()</code> function is used to display text on the screen. It is like casting a spell to make words appear.</p>
          <pre><code>print("Hello, World!")</code></pre>
          <p>The text inside the parentheses must be enclosed in quotes (either single <code>'</code> or double <code>"</code>). This tells Python it's a <strong>string</strong> of characters.</p>
        `,
        taskHTML: 'Use the <code>print()</code> function to output the exact phrase: <strong>Hello, Python!</strong>',
        initialCode: '# Type your code below\n',
        expectedOutput: 'Hello, Python!\n',
        hint: 'Make sure to use quotes around the text inside the parentheses: print("Hello, Python!")'
      },
      {
        id: 'w1-l2',
        title: 'Variables: Magic Boxes',
        type: 'Theory + Code',
        theoryHTML: `
          <h2>Variables</h2>
          <p>A variable is like a magic box where you can store information to use later.</p>
          <h3>Creating a Variable</h3>
          <p>You create a variable by giving it a name, using the equals sign <code>=</code>, and assigning it a value.</p>
          <pre><code>hero_name = "Arthur"
print(hero_name)</code></pre>
          <p>This will print <strong>Arthur</strong> to the screen.</p>
        `,
        taskHTML: 'Create a variable named <code>spell</code> and assign it the value <strong>"Fireball"</strong>. Then, print the variable <code>spell</code>.',
        initialCode: '# 1. Create the variable\n\n\n# 2. Print the variable\n',
        expectedOutput: 'Fireball\n',
        hint: 'spell = "Fireball"\nprint(spell)'
      }
    ]
  },
  {
    id: 'w2',
    name: 'Math Mountains',
    desc: 'Climb the peaks by performing calculations and manipulating numbers.',
    color: '#3ecf8e',
    icon: '⛰️',
    difficulty: 'Novice',
    lessons: [
      {
        id: 'w2-l1',
        title: 'Basic Arithmetic',
        type: 'Theory + Code',
        theoryHTML: `
          <h2>Math in Python</h2>
          <p>Python is an excellent calculator. You can add (<code>+</code>), subtract (<code>-</code>), multiply (<code>*</code>), and divide (<code>/</code>).</p>
          <pre><code>apples = 5
oranges = 3
total_fruit = apples + oranges
print(total_fruit)</code></pre>
          <p>This will output <strong>8</strong>.</p>
        `,
        taskHTML: 'Create a variable <code>gold</code> with a value of <strong>50</strong>. Create a variable <code>silver</code> with a value of <strong>25</strong>. Add them together and print the result.',
        initialCode: 'gold = 50\nsilver = 25\n# Calculate total and print\n',
        expectedOutput: '75\n',
        hint: 'print(gold + silver)'
      }
    ]
  },
  {
    id: 'w3',
    name: 'Looping Labyrinth',
    desc: 'Navigate the maze of repetition and learn how to do things again and again.',
    color: '#f5c842',
    icon: '🌀',
    difficulty: 'Intermediate',
    lessons: [
      {
         id: 'w3-l1',
         title: 'The For Loop',
         type: 'Theory + Code',
         theoryHTML: `
            <h2>Repeating Actions</h2>
            <p>Sometimes you need to do a task many times. A <code>for</code> loop makes this easy!</p>
            <pre><code>for i in range(3):
    print("Attack!")</code></pre>
            <p>This prints "Attack!" three times. Notice the <strong>indentation</strong> (spaces) before the print statement! Indentation is how Python groups code.</p>
         `,
         taskHTML: 'Write a for loop that uses <code>range(5)</code> to print the word <strong>"Level Up!"</strong> exactly 5 times.',
         initialCode: '# Write your loop here\n',
         expectedOutput: 'Level Up!\nLevel Up!\nLevel Up!\nLevel Up!\nLevel Up!\n',
         hint: 'for i in range(5):\n    print("Level Up!")'
      }
    ]
  },
  {
    id: 'w4',
    name: 'Conditionals Cove',
    desc: 'Brave the tides of logic by making decisions in your code.',
    color: '#ff8c42',
    icon: '🌊',
    difficulty: 'Intermediate',
    lessons: [
      {
        id: 'w4-l1',
        title: 'The If Statement',
        type: 'Theory + Code',
        theoryHTML: `
          <h2>Making Decisions</h2>
          <p>Sometimes you only want code to run <em>if</em> a certain condition is true.</p>
          <pre><code>health = 10
if health > 0:
    print("You are alive!")</code></pre>
          <p>Notice the colon <code>:</code> at the end of the <code>if</code> statement and the indentation on the next line!</p>
        `,
        taskHTML: 'Create a variable <code>level</code> and set it to <strong>10</strong>. Write an <code>if</code> statement that checks if <code>level</code> is greater than <strong>5</strong>. If it is, print <strong>"High Level"</strong>.',
        initialCode: 'level = 10\n# Write your if statement below\n',
        expectedOutput: 'High Level\n',
        hint: 'if level > 5:\n    print("High Level")'
      },
      {
        id: 'w4-l2',
        title: 'Else: The Alternate Path',
        type: 'Theory + Code',
        theoryHTML: `
          <h2>Otherwise (Else)</h2>
          <p>You can use <code>else</code> to run code when the <code>if</code> condition is false.</p>
          <pre><code>gold = 0
if gold > 0:
    print("You are rich!")
else:
    print("You are broke!")</code></pre>
        `,
        taskHTML: 'Write an <code>if/else</code> statement. If <code>score</code> is greater than <strong>50</strong>, print <strong>"Pass"</strong>. Otherwise, print <strong>"Fail"</strong>. (The score is already set to 40 for you).',
        initialCode: 'score = 40\n# Write your if/else statement below\n',
        expectedOutput: 'Fail\n',
        hint: 'if score > 50:\n    print("Pass")\nelse:\n    print("Fail")'
      }
    ]
  },
  {
    id: 'w5',
    name: 'Functions Fortress',
    desc: 'Master the ultimate spell: creating your own reusable commands.',
    color: '#ff5c7c',
    icon: '🏰',
    difficulty: 'Advanced',
    lessons: [
      {
        id: 'w5-l1',
        title: 'Defining a Function',
        type: 'Theory + Code',
        theoryHTML: `
          <h2>Custom Spells (Functions)</h2>
          <p>You can group code together into a function using the <code>def</code> keyword. This lets you reuse it easily!</p>
          <pre><code>def greet():
    print("Welcome, hero!")

# Call the function
greet()</code></pre>
        `,
        taskHTML: 'Define a function named <code>cast_ice()</code> that prints <strong>"Ice Storm!"</strong>. Then, call the function below it.',
        initialCode: '# Define the function here\n\n\n# Call the function here\n',
        expectedOutput: 'Ice Storm!\n',
        hint: 'def cast_ice():\n    print("Ice Storm!")\n\ncast_ice()'
      }
    ]
  }
];
