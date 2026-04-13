const WORLDS = [
  {
    id: 'w1', name: 'The Basics Forest', color: '#7c6af7', icon: '🌲', difficulty: 'Beginner',
    lessons: [
      { id: 'w1-l1', title: 'Hello, World!', theoryHTML: '<h2>Welcome</h2><p>Python says hi! Use the <code>print()</code> command to output text.</p>', taskHTML: 'Print <strong>Hello</strong> to the screen.', initialCode: '# Type your code below:\n\n', expectedOutput: 'Hello', hint: 'print("Hello")' },
      { id: 'w1-l2', title: 'Magic Boxes (Variables)', theoryHTML: '<h2>Variables</h2><p>Store information to use later by using the <code>=</code> sign.</p>', taskHTML: 'Create a variable named <code>spell</code> with the value <strong>"Fireball"</strong>. Then print <code>spell</code>.', initialCode: '# 1. Create the variable\n\n# 2. Print it\n', expectedOutput: 'Fireball', hint: 'spell = "Fireball"\nprint(spell)' },
      { id: 'w1-l3', title: 'Counting Coins (Math)', theoryHTML: '<h2>Basic Math</h2><p>Python acts like a calculator. Use <code>+</code> to add and <code>-</code> to subtract.</p>', taskHTML: 'Print the result of exactly <strong>40 + 60</strong>.', initialCode: '# Put your math inside the print statement\n', expectedOutput: '100', hint: 'print(40 + 60)' },
      { id: 'w1-l4', title: 'Combining Words', theoryHTML: '<h2>Strings</h2><p>You can add text together using <code>+</code>. This is called concatenation.</p>', taskHTML: 'Create two strings: <code>"Ice"</code> and <code>"Cream"</code>. Print them added together.', initialCode: 'part1 = "Ice"\npart2 = "Cream"\n# Add them together and print!\n', expectedOutput: 'IceCream', hint: 'print("Ice" + "Cream")' }
    ],
    bossChallenge: { id: 'w1-boss', title: 'The Apprentice Exam', theoryHTML: '<h2>The Grand Test</h2><p>Show the computer what you have learned!</p>', taskHTML: 'Create a variable <code>name</code> as <strong>"Hero"</strong>, <code>hp</code> as <strong>50</strong> and <code>bonus</code> as <strong>10</strong>. Print the result <strong>"Hero: 60"</strong> using an f-string.', initialCode: '', expectedOutput: 'Hero: 60', isBoss: true }
  },
  {
    id: 'w2', name: 'Conditionals Cave', color: '#ff8c42', icon: '🦇', difficulty: 'Intermediate',
    lessons: [
      { id: 'w2-l1', title: 'The If Statement', theoryHTML: '<h2>Making Decisions</h2><p>Use <code>if</code> to only run code when a condition is True.</p>', taskHTML: 'Set <code>level = 10</code>. Write an <code>if</code> statement checking if level is greater than 5. If it is, print <strong>"High Level"</strong>.', initialCode: 'level = 10\n# Write your if statement below:\n', expectedOutput: 'High Level', hint: 'if level > 5:\n    print("High Level")' },
      { id: 'w2-l2', title: 'Otherwise (Else)', theoryHTML: '<h2>The Else Block</h2><p>Use <code>else</code> to run code when the <code>if</code> condition is False.</p>', taskHTML: 'The score is 40. Write an <code>if/else</code>. If score > 50, print <strong>"Pass"</strong>. Else, print <strong>"Fail"</strong>.', initialCode: 'score = 40\n# Write your if/else statement below:\n', expectedOutput: 'Fail', hint: 'Use an else block!' },
      { id: 'w2-l3', title: 'Multiple Paths (Elif)', theoryHTML: '<h2>Elif</h2><p>Need more than two choices? Use <code>elif</code> (else if).</p>', taskHTML: 'HP is 0. If HP > 0 print "Alive", elif HP == 0 print "Fainted".', initialCode: 'hp = 0\n# Write your conditional logic below:\n', expectedOutput: 'Fainted', hint: 'elif hp == 0:' }
    ],
    bossChallenge: { id: 'w2-boss', title: 'The Gatekeeper', theoryHTML: '<h2>Logical Maze</h2><p>Combine if, elif, and else.</p>', taskHTML: 'Set <code>score = 75</code>. If score >= 90 print <strong>"High"</strong>, elif score >= 70 print <strong>"Medium"</strong>, else print <strong>"Low"</strong>.', initialCode: 'score = 75\n', expectedOutput: 'Medium', isBoss: true }
  },
  {
    id: 'w3', name: 'Looping Labyrinth', color: '#f5c842', icon: '🌀', difficulty: 'Advanced',
    lessons: [
      { id: 'w3-l1', title: 'The For Loop', theoryHTML: '<h2>Repeating Actions</h2><p>A <code>for</code> loop repeats code. Use <code>range(N)</code> to repeat N times.</p>', taskHTML: 'Write a for loop using <code>range(3)</code> to print exactly <strong>"Attack"</strong> 3 times.', initialCode: '# Write your loop:\n', expectedOutput: 'Attack\nAttack\nAttack', hint: 'for i in range(3):\n    print("Attack")' },
      { id: 'w3-l2', title: 'Looping Through Items', theoryHTML: '<h2>Lists</h2><p>You can loop through a list of items easily in Python.</p>', taskHTML: 'Loop through the list <code>loot = ["Gold", "Gem"]</code> and print each item.', initialCode: 'loot = ["Gold", "Gem"]\n# Loop over the loot and print it:\n', expectedOutput: 'Gold\nGem', hint: 'for item in loot:\n    print(item)' },
      { id: 'w3-l3', title: 'The While Loop', theoryHTML: '<h2>While</h2><p>A <code>while</code> loop runs as long as a condition is True.</p>', taskHTML: 'Set <code>energy = 2</code>. Write a while loop that prints <code>"Run"</code> and subtracts 1 from energy each time, until energy is 0.', initialCode: 'energy = 2\n# Write your while loop here:\n', expectedOutput: 'Run\nRun', hint: 'while energy > 0:' }
    ],
    bossChallenge: { id: 'w3-boss', title: 'Infinite Echo', theoryHTML: '<h2>Looping Logic</h2><p>A test of repetition.</p>', taskHTML: 'Use a <code>for</code> loop to print the numbers <strong>1</strong> then <strong>2</strong> (each on a new line).', initialCode: '', expectedOutput: '1\n2', isBoss: true }
  },
  {
    id: 'w4', name: 'Functions Workshop', color: '#3ecf8e', icon: '⚙️', difficulty: 'Intermediate',
    lessons: [
      { id: 'w4-l1', title: 'Your First Function', theoryHTML: '<h2>Functions</h2><p>A function is a reusable block of code. Define one using <code>def</code>.</p>', taskHTML: 'Define a function called <code>greet</code> that prints <strong>"Hello Hero"</strong>. Then call it.', initialCode: '# Define your function:\n\n# Call it:\n', expectedOutput: 'Hello Hero', hint: 'def greet():\n    print("Hello Hero")\ngreet()' },
      { id: 'w4-l2', title: 'Function with Input', theoryHTML: '<h2>Parameters</h2><p>Functions can accept values called <em>parameters</em> inside parentheses.</p>', taskHTML: 'Define a function <code>shout(word)</code> that prints the word followed by <strong>!</strong>. Call it with <strong>"Fire"</strong>.', initialCode: '# Define shout with one parameter:\n\n# Call it:\n', expectedOutput: 'Fire!', hint: 'def shout(word):\n    print(word + "!")\nshout("Fire")' },
      { id: 'w4-l3', title: 'Returning Values', theoryHTML: '<h2>Return</h2><p>Use <code>return</code> to send a value back from a function so you can use it elsewhere.</p>', taskHTML: 'Write a function <code>double(n)</code> that returns <code>n * 2</code>. Print the result of calling it with <strong>7</strong>.', initialCode: '# Write the function:\n\n# Print the result:\n', expectedOutput: '14', hint: 'def double(n):\n    return n * 2\nprint(double(7))' },
      { id: 'w4-l4', title: 'Default Arguments', theoryHTML: '<h2>Default Values</h2><p>You can give a parameter a default value so the caller does not have to pass it.</p>', taskHTML: 'Create <code>power(base, exp=2)</code> that returns <code>base ** exp</code>. Print <code>power(3)</code>.', initialCode: '# Define with a default argument:\n\n', expectedOutput: '9', hint: 'def power(base, exp=2):\n    return base ** exp\nprint(power(3))' },
      { id: 'w4-l5', title: 'Multiple Returns', theoryHTML: '<h2>Multiple Values</h2><p>A function can return more than one value separated by commas — Python packages them as a tuple.</p>', taskHTML: 'Write <code>min_max(a, b)</code> that returns the smaller then larger of two numbers. Print <code>min_max(5, 3)</code>.', initialCode: '# Write min_max:\n\n', expectedOutput: '3 5', hint: 'def min_max(a, b):\n    return min(a,b), max(a,b)\nlo, hi = min_max(5, 3)\nprint(lo, hi)' }
    ],
    bossChallenge: { id: 'w4-boss', title: 'The Master Crafter', theoryHTML: '<h2>Functional Mastery</h2><p>Build a multi-purpose tool.</p>', taskHTML: 'Create a function <code>calc(a, b, op="+")</code>. If op is "+", return a+b. If op is "*", return a*b. Print <code>calc(5, 4, "*")</code>.', initialCode: '', expectedOutput: '20', isBoss: true }
  },
  {
    id: 'w5', name: 'Data Dungeon', color: '#ff5c7c', icon: '🏰', difficulty: 'Advanced',
    lessons: [
      { id: 'w5-l1', title: 'Lists — The Inventory', theoryHTML: '<h2>Lists</h2><p>A list stores multiple items in order. Access items by their index (starting at 0).</p>', taskHTML: 'Create a list <code>inventory = ["Sword", "Shield", "Potion"]</code> and print the first item.', initialCode: 'inventory = ["Sword", "Shield", "Potion"]\n# Print the first item:\n', expectedOutput: 'Sword', hint: 'print(inventory[0])' },
      { id: 'w5-l2', title: 'List Methods', theoryHTML: '<h2>append & remove</h2><p>Use <code>.append()</code> to add items and <code>.remove()</code> to delete them.</p>', taskHTML: 'Start with <code>items = ["Apple"]</code>. Append <strong>"Banana"</strong> then print the list length.', initialCode: 'items = ["Apple"]\n# Append Banana:\n\n# Print the length:\n', expectedOutput: '2', hint: 'items.append("Banana")\nprint(len(items))' },
      { id: 'w5-l3', title: 'Dictionaries', theoryHTML: '<h2>Dictionaries</h2><p>A dictionary stores data as key-value pairs. Access values using their key inside <code>[]</code>.</p>', taskHTML: 'Create <code>hero = {"name": "Aria", "hp": 100}</code> and print the value of <strong>"name"</strong>.', initialCode: 'hero = {"name": "Aria", "hp": 100}\n# Print the name:\n', expectedOutput: 'Aria', hint: 'print(hero["name"])' },
      { id: 'w5-l4', title: 'Updating Dictionaries', theoryHTML: '<h2>Updating Dicts</h2><p>You can add or change values in a dictionary by assigning to a key.</p>', taskHTML: 'Create <code>stats = {"xp": 0}</code>. Add 50 to xp and print it.', initialCode: 'stats = {"xp": 0}\n# Add 50 to xp:\n\n# Print stats["xp"]:\n', expectedOutput: '50', hint: 'stats["xp"] += 50\nprint(stats["xp"])' },
      { id: 'w5-l5', title: 'Tuples — Locked Data', theoryHTML: '<h2>Tuples</h2><p>A tuple is like a list but <em>immutable</em> — once created, it cannot change. Great for fixed data.</p>', taskHTML: 'Create <code>coords = (10, 20)</code>. Print each value on a separate line.', initialCode: 'coords = (10, 20)\n# Print each element:\n', expectedOutput: '10\n20', hint: 'print(coords[0])\nprint(coords[1])' }
    ],
    bossChallenge: { id: 'w5-boss', title: 'Vault Breaker', theoryHTML: '<h2>Data Integration</h2><p>Combine lists and dictionaries.</p>', taskHTML: 'Given <code>keys=["hp", "mp"]</code> and <code>vals=[100, 50]</code>. Print a dictionary combining them: <code>{"hp": 100, "mp": 50}</code>.', initialCode: 'keys=["hp", "mp"]\nvals=[100, 50]\n', expectedOutput: "{'hp': 100, 'mp': 50}", isBoss: true }
  },
  {
    id: 'w6', name: 'String Sorcery', color: '#e879f9', icon: '🪄', difficulty: 'Intermediate',
    lessons: [
      { id: 'w6-l1', title: 'The Slice', theoryHTML: '<h2>Slicing</h2><p>Access a part of a string using <code>[start:end]</code>.</p>', taskHTML: 'Slice the first 3 letters of <code>magic = "Fireball"</code> and print them.', initialCode: 'magic = "Fireball"\n# Slice 0 to 3:\n', expectedOutput: 'Fir', hint: 'print(magic[0:3])' },
      { id: 'w6-l2', title: 'Finding Secrets', theoryHTML: '<h2>find()</h2><p>Search for text within a string. Returns the index or -1.</p>', taskHTML: 'Find the index of <strong>"X"</strong> in <code>map_str = "WaterXFire"</code> and print it.', initialCode: 'map_str = "WaterXFire"\n# Find "X":\n', expectedOutput: '5', hint: 'print(map_str.find("X"))' },
      { id: 'w6-l3', title: 'Modern Echoes (f-strings)', theoryHTML: '<h2>f-strings</h2><p>Insert variables into strings easily using <code>f"Hello {name}"</code>.</p>', taskHTML: 'Given <code>gold = 50</code>, print the string <strong>"Gold: 50"</strong> using an f-string.', initialCode: 'gold = 50\n# Use f-string:\n', expectedOutput: 'Gold: 50', hint: 'print(f"Gold: {gold}")' }
    ],
    bossChallenge: { id: 'w6-boss', title: 'The Scribe Trial', theoryHTML: '<h2>String Mastery</h2><p>Advanced string manipulation.</p>', taskHTML: 'Take <code>msg = "SECRET_KEY_123"</code>. Slicing from index 7 to the end, print the result: <strong>"KEY_123"</strong>.', initialCode: 'msg = "SECRET_KEY_123"\n', expectedOutput: 'KEY_123', isBoss: true }
  },
  {
    id: 'w7', name: 'File Fortress', color: '#38bdf8', icon: '🏰', difficulty: 'Intermediate',
    lessons: [
      { id: 'w7-l1', title: 'Knowledge Scroll', theoryHTML: '<h2>Reading Files</h2><p>Use <code>open()</code> with <code>"r"</code> to read. (Simulated in Skulpt).</p>', taskHTML: 'Open "scroll.txt" and print its content. (Note: Skulpt simulates this with a dummy file).', initialCode: '# In this sandbox, "scroll.txt" exists with content "Secret"\nf = open("scroll.txt", "r")\n# print content:\n', expectedOutput: 'Secret', hint: 'print(f.read())' },
      { id: 'w7-l2', title: 'Writing History', theoryHTML: '<h2>Writing Files</h2><p>Use <code>"w"</code> to write. This overwrites existing content.</p>', taskHTML: 'Open "diary.txt" in write mode, write <strong>"Done"</strong>, then close it.', initialCode: 'f = open("diary.txt", "w")\n# Write "Done":\n\nf.close()', expectedOutput: '', hint: 'f.write("Done")' },
      { id: 'w7-l3', title: 'The Context Guard', theoryHTML: '<h2>with Statement</h2><p>The <code>with</code> handles opening and closing files automatically.</p>', taskHTML: 'Use <code>with open("log.txt", "w") as f:</code> to write <strong>"Saved"</strong>.', initialCode: '# Use with context manager:\n', expectedOutput: '', hint: 'with open("log.txt", "w") as f:\n    f.write("Saved")' }
    ],
    bossChallenge: { id: 'w7-boss', title: 'The Archivist', theoryHTML: '<h2>File Flow</h2><p>Read and verify data.</p>', taskHTML: 'Write <strong>"Verified"</strong> to <code>"status.txt"</code> using a <code>with</code> block. (No output expected).', initialCode: '', expectedOutput: '', isBoss: true }
  },
  {
    id: 'w8', name: 'Exception Eyrie', color: '#fb7185', icon: '🦅', difficulty: 'Intermediate',
    lessons: [
      { id: 'w8-l1', title: 'Catching Mistakes', theoryHTML: '<h2>try/except</h2><p>Prevent crashes by catching errors in an <code>except</code> block.</p>', taskHTML: 'Try to print <code>1/0</code>. Catch the <code>ZeroDivisionError</code> and print <strong>"Shielded"</strong>.', initialCode: '# Use try/except:\n', expectedOutput: 'Shielded', hint: 'try:\n    print(1/0)\nexcept ZeroDivisionError:\n    print("Shielded")' },
      { id: 'w8-l2', title: 'The Final Guard', theoryHTML: '<h2>finally</h2><p>Code in <code>finally</code> runs no matter what happens.</p>', taskHTML: 'Write a try/except that catches any error, and a finally block that prints <strong>"Done"</strong>.', initialCode: 'try:\n    x = bad_var\nexcept:\n    pass\n# add finally:\n', expectedOutput: 'Done', hint: 'finally:\n    print("Done")' },
      { id: 'w8-l3', title: 'Raising Alarms', theoryHTML: '<h2>raise</h2><p>You can trigger your own errors using <code>raise</code>.</p>', taskHTML: 'If <code>hp < 0</code>, raise a <code>ValueError</code> with message <strong>"Fainted"</strong>. (Set hp = -1).', initialCode: 'hp = -1\n# raise error if hp < 0:\n', expectedOutput: 'ValueError: Fainted', hint: 'if hp < 0:\n    raise ValueError("Fainted")' }
    ],
    bossChallenge: { id: 'w8-boss', title: 'The Safety Net', theoryHTML: '<h2>Error Resilience</h2><p>Build a crash-proof block.</p>', taskHTML: 'Use <code>try/except/finally</code>. In <code>try</code>, print <code>1/0</code>. In <code>except</code>, print <strong>"Err"</strong>. In <code>finally</code>, print <strong>"End"</strong>.', initialCode: '', expectedOutput: 'Err\nEnd', isBoss: true }
  },
  {
    id: 'w9', name: 'Modules Meadow', color: '#4ade80', icon: '🌿', difficulty: 'Advanced',
    lessons: [
      { id: 'w9-l1', title: 'Importing Magic', theoryHTML: '<h2>Modules</h2><p>Import extra powers using <code>import</code>.</p>', taskHTML: 'Import <code>math</code> and print the square root (<code>sqrt</code>) of <strong>16</strong>.', initialCode: '# Import and print sqrt(16):\n', expectedOutput: '4.0', hint: 'import math\nprint(math.sqrt(16))' },
      { id: 'w9-l2', title: 'Random Chance', theoryHTML: '<h2>random</h2><p>The <code>random</code> module handles chance.</p>', taskHTML: 'Import <code>random</code>. Set the seed to <strong>42</strong> and print a <code>randint(1, 10)</code>.', initialCode: 'import random\nrandom.seed(42)\n# print a random integer 1-10:\n', expectedOutput: '2', hint: 'print(random.randint(1, 10))' },
      { id: 'w9-l3', title: 'Selective Spells', theoryHTML: '<h2>from ... import</h2><p>Import only what you need to keep things clean.</p>', taskHTML: 'Use <code>from math import pi</code>. Print <code>pi</code> rounded to 2 decimal places.', initialCode: '# from math import pi:\n', expectedOutput: '3.14', hint: 'from math import pi\nprint(round(pi, 2))' }
    ],
    bossChallenge: { id: 'w9-boss', title: 'The Librarian Trial', theoryHTML: '<h2>Library Mastery</h2><p>Using external modules.</p>', taskHTML: 'Import <code>math</code>. Print the value of <code>math.factorial(5)</code>. (Hint: result is 120).', initialCode: '', expectedOutput: '120', isBoss: true }
  },
  {
    id: 'w10', name: 'Comprehension Canyon', color: '#fbbf24', icon: '🏜️', difficulty: 'Advanced',
    lessons: [
      { id: 'w10-l1', title: 'Quick Lists', theoryHTML: '<h2>List Comprehensions</h2><p>Create lists in a single line: <code>[x for x in data]</code>.</p>', taskHTML: 'Use a comprehension to create a list of squares for <code>[1, 2, 3]</code>. Print it.', initialCode: 'nums = [1, 2, 3]\n# Use comprehension:\n', expectedOutput: '[1, 4, 9]', hint: 'print([x*x for x in nums])' },
      { id: 'w10-l2', title: 'Filtered Power', theoryHTML: '<h2>Comprehension If</h2><p>Add filters: <code>[x for x in data if check]</code>.</p>', taskHTML: 'Get even numbers from <code>range(5)</code> using a comprehension. Print it.', initialCode: '# Evens from range(5):\n', expectedOutput: '[0, 2, 4]', hint: 'print([x for x in range(5) if x % 2 == 0])' },
      { id: 'w10-l3', title: 'Dictionary Forge', theoryHTML: '<h2>Dict Comprehension</h2><p>Works for dictionaries too: <code>{k:v for ...}</code>.</p>', taskHTML: 'Create a dict where keys are letters in <strong>"ABC"</strong> and values are 0. Print it.', initialCode: '# {char: 0 for char in "ABC"}\n', expectedOutput: "{'A': 0, 'B': 0, 'C': 0}", hint: 'print({c: 0 for c in "ABC"})' }
    ],
    bossChallenge: { id: 'w10-boss', title: 'The Logic Loom', theoryHTML: '<h2>Speed Coding</h2><p>Complex comprehensions.</p>', taskHTML: 'Using one line, print a list of <code>x*10</code> for <code>x in [1, 2, 3]</code> if <code>x > 1</code>.', initialCode: '', expectedOutput: '[20, 30]', isBoss: true }
  },
  {
    id: 'w11', name: 'Class Cathedral', color: '#818cf8', icon: '⛪', difficulty: 'Advanced',
    lessons: [
      { id: 'w11-l1', title: 'The Blueprint', theoryHTML: '<h2>Classes</h2><p>A class is a template for objects.</p>', taskHTML: 'Define an empty class <code>Hero</code>. Create an instance called <code>h</code> and print it.', initialCode: '# Define Hero:\n\n# Create h:\n', expectedOutput: '<Hero object>', hint: 'class Hero: pass\nh = Hero()\nprint(h)' },
      { id: 'w11-l2', title: 'The Awakener (__init__)', theoryHTML: '<h2>__init__</h2><p>The <code>__init__</code> method sets up new objects.</p>', taskHTML: 'Give <code>Hero</code> an <code>__init__</code> that sets <code>self.name</code>. Create "Bolt" and print his name.', initialCode: 'class Hero:\n    # add __init__:\n\nbolt = Hero("Bolt")\nprint(bolt.name)', expectedOutput: 'Bolt', hint: 'def __init__(self, name):\n    self.name = name' },
      { id: 'w11-l3', title: 'Inner Strength (Methods)', theoryHTML: '<h2>Methods</h2><p>Functions inside a class are called methods.</p>', taskHTML: 'Add a <code>shout()</code> method to <code>Hero</code> that prints **"FOR GLORY!"**. Call it on <code>h</code>.', initialCode: 'class Hero:\n    def shout(self):\n        pass\n\nh = Hero()\n# call shout:\n', expectedOutput: 'FOR GLORY!', hint: 'h.shout()' }
    ],
    bossChallenge: { id: 'w11-boss', title: 'The Architect', theoryHTML: '<h2>Object Blueprinting</h2><p>Build a working object.</p>', taskHTML: 'Create class <code>Pet</code> with <code>name</code> and <code>species</code> in <code>__init__</code>. Create <code>Pet("Luna", "Cat")</code> and print <strong>"Luna: Cat"</strong>.', initialCode: '', expectedOutput: 'Luna: Cat', isBoss: true }
  },
  {
    id: 'w12', name: 'Inheritance Island', color: '#2dd4bf', icon: '🏝️', difficulty: 'Advanced',
    lessons: [
      { id: 'w12-l1', title: 'Family Ties', theoryHTML: '<h2>Inheritance</h2><p>Classes can inherit powers from parent classes.</p>', taskHTML: 'Create <code>Mage</code> that inherits from <code>Hero</code>. Add a <code>cast()</code> method that prints <strong>"Spell!"</strong>.', initialCode: 'class Hero: pass\n# Create Mage(Hero):\n\nm = Mage()\nm.cast()', expectedOutput: 'Spell!', hint: 'class Mage(Hero):\n    def cast(self):\n        print("Spell!")' },
      { id: 'w12-l2', title: 'The super() Power', theoryHTML: '<h2>super()</h2><p>Use <code>super()</code> to call parent methods.</p>', taskHTML: 'In <code>Mage.__init__</code>, use <code>super().__init__(name)</code>. Create "Medivh" and print his name.', initialCode: 'class Hero:\n    def __init__(self, name): self.name = name\n\nclass Mage(Hero):\n    def __init__(self, name):\n        # use super():\n\nm = Mage("Medivh")\nprint(m.name)', expectedOutput: 'Medivh', hint: 'super().__init__(name)' },
      { id: 'w12-l3', title: 'Overriding Destiny', theoryHTML: '<h2>Method Overriding</h2><p>Replace a parent method with a new version in the child.</p>', taskHTML: 'Override <code>Hero.attack()</code> in <code>Warrior</code> to print <strong>"SMASH!"</strong> instead of "Hit".', initialCode: 'class Hero:\n    def attack(self): print("Hit")\n\nclass Warrior(Hero):\n    # override attack:\n\nw = Warrior()\nw.attack()', expectedOutput: 'SMASH!', hint: 'def attack(self):\n    print("SMASH!")' }
    ],
    bossChallenge: { id: 'w12-boss', title: 'The Bloodline Trial', theoryHTML: '<h2>Inheritance Mastery</h2><p>Using the power of your ancestors.</p>', taskHTML: 'Class <code>A</code> has <code>__init__(self, val)</code>. Class <code>B(A)</code> uses <code>super()</code> to set <code>val</code>. Create <code>B(10)</code> and print <code>self.val</code>.', initialCode: '', expectedOutput: '10', isBoss: true }
  },
  {
    id: 'w13', name: 'Library Library', color: '#f472b6', icon: '📚', difficulty: 'Advanced',
    lessons: [
      { id: 'w13-l1', title: 'Time Travel', theoryHTML: '<h2>datetime</h2><p>Handle dates and times.</p>', taskHTML: 'Import <code>datetime</code>. Print the current year. (Simulated) ', initialCode: 'import datetime\n# Print year:\n', expectedOutput: '2026', hint: 'print(datetime.datetime.now().year)' },
      { id: 'w13-l2', title: 'The JSON Scroll', theoryHTML: '<h2>JSON</h2><p>JSON is a common data format.</p>', taskHTML: 'Use <code>json.loads()</code> on <code>\'{"hp": 10}\'</code> and print the "hp" value.', initialCode: 'import json\ndata = \'{"hp": 10}\'\n# Parse and print hp:\n', expectedOutput: '10', hint: 'parsed = json.loads(data)\nprint(parsed["hp"])' },
      { id: 'w13-l3', title: 'System Secrets (os)', theoryHTML: '<h2>os</h2><p>Interact with the operating system.</p>', taskHTML: 'Import <code>os</code>. Print <code>os.name</code>.', initialCode: 'import os\n# Print os.name:\n', expectedOutput: 'posix', hint: 'print(os.name)' }
    ],
    bossChallenge: { id: 'w13-boss', title: 'The Librarian Master', theoryHTML: '<h2>Package Mastery</h2><p>Handling multiple modules.</p>', taskHTML: 'Import <code>json</code>. Print the type of <code>json.loads("[1]")</code>. (Hint: print(type(obj))).', initialCode: '', expectedOutput: "<class 'list'>", isBoss: true }
  },
  {
    id: 'w14', name: 'Algorithm Abyss', color: '#94a3b8', icon: '🕳️', difficulty: 'Expert',
    lessons: [
      { id: 'w14-l1', title: 'Linear Search', theoryHTML: '<h2>Searching</h2><p>Find an item by checking one by one.</p>', taskHTML: 'Check if <strong>7</strong> is in <code>[1, 3, 7, 9]</code>. Print <strong>"Found"</strong> if it is.', initialCode: 'nums = [1, 3, 7, 9]\n# Linear search for 7:\n', expectedOutput: 'Found', hint: 'if 7 in nums: print("Found")' },
      { id: 'w14-l2', title: 'The Bubble Sort', theoryHTML: '<h2>Sorting</h2><p>Simple sorting algorithm.</p>', taskHTML: 'Sort <code>[5, 1, 4]</code> using <code>list.sort()</code> and print it.', initialCode: 'data = [5, 1, 4]\n# Sort and print:\n', expectedOutput: '[1, 4, 5]', hint: 'data.sort()\nprint(data)' },
      { id: 'w14-l3', title: 'Binary Logic', theoryHTML: '<h2>Efficiency</h2><p>Big O notation describes speed.</p>', taskHTML: 'Print the string <strong>"O(n)"</strong> as the answer for linear search complexity.', initialCode: '# What is linear search complexity?\n', expectedOutput: 'O(n)', hint: 'print("O(n)")' }
    ],
    bossChallenge: { id: 'w14-boss', title: 'The Algorithm Master', theoryHTML: '<h2>Optimization Trial</h2><p>Sorting and searching logic.</p>', taskHTML: 'Given <code>l=[3, 1, 2]</code>. Sort it and print the second element (index 1).', initialCode: 'l=[3, 1, 2]\n', expectedOutput: '2', isBoss: true }
  },
  {
    id: 'w15', name: 'The Final Trial', color: '#fbbf24', icon: '👑', difficulty: 'Legendary',
    lessons: [
      { id: 'w15-l1', title: 'The Master Program', theoryHTML: '<h2>Integration</h2><p>Combine everything you know.</p>', taskHTML: 'Create a <code>Player</code> class with <code>name</code> and <code>level</code>. In __init__, set self.name and self.level. Create "Hero" with level 99. Print f"{self.name}: {self.level}".', initialCode: '# Final challenge 1:\n', expectedOutput: 'Hero: 99', hint: 'class Player:\n    def __init__(self, n, l):\n        self.name = n\n        self.level = l\np = Player("Hero", 99)\nprint(f"{p.name}: {p.level}")' },
      { id: 'w15-l2', title: 'Logic Gate', theoryHTML: '<h2>Logic</h2><p>Complex conditionals.</p>', taskHTML: 'Given <code>x=True, y=False</code>. Print the result of <code>x and not y</code>.', initialCode: 'x, y = True, False\n# Result:\n', expectedOutput: 'True', hint: 'print(x and not y)' },
      { id: 'w15-l3', title: 'The Python Quest', theoryHTML: '<h2>Conclusion</h2><p>You are a Python Master!</p>', taskHTML: 'Print <strong>"I am a Python Master!"</strong> to finish the game.', initialCode: '# Final words:\n', expectedOutput: 'I am a Python Master!', hint: 'print("I am a Python Master!")' }
    ],
    bossChallenge: { id: 'w15-boss', title: 'The Final Mastery Trial', theoryHTML: '<h2>The Legend Begins</h2><p>Conclude your journey.</p>', taskHTML: 'Print the string **"I conquered the Python Quest!"** to claim your title.', initialCode: '', expectedOutput: 'I conquered the Python Quest!', isBoss: true }
  }
];

const INTERVIEWS = [
  {
     level: 'Junior Developer',
     badgeId: 'junior',
     icon: '👔',
     worldMatch: 4, // After W5 (0-indexed 4)
     tasks: [
         { id: 'int-j1', title: 'Basic Logic', taskHTML: 'Create a list <code>data = [1, 2, 3]</code>. Loop through it and print only numbers greater than 1.', expectedOutput: '2\n3' },
         { id: 'int-j2', title: 'Data Flow', taskHTML: 'Define a function <code>process(x, y)</code> that return <code>x + y</code> if the sum is even, else return <code>0</code>. Print <code>process(4, 3)</code>.', expectedOutput: '0' },
         { id: 'int-j3', title: 'Final Junior Test', taskHTML: 'Given <code>hero = {"atk": 5, "def": 2}</code>. Print the sum of its values.', expectedOutput: '7' }
     ]
  },
  {
     level: 'Mid-Level Engineer',
     badgeId: 'mid',
     icon: '💻',
     worldMatch: 9, // After W10
     tasks: [
         { id: 'int-m1', title: 'Advanced Strings', taskHTML: 'Given <code>s = "Python_Expert_2026"</code>. Use slicing to print "Expert".', expectedOutput: 'Expert' },
         { id: 'int-m2', title: 'The Factory', taskHTML: 'Using a list comprehension, create a list of even numbers from 0 to 10 (inclusive) and print it.', expectedOutput: '[0, 2, 4, 6, 8, 10]' },
         { id: 'int-m3', title: 'Error Guardian', taskHTML: 'Write a try/except that attempts to import a non-existent module <code>ghost</code> and prints "Safe" when it fails.', expectedOutput: 'Safe' }
     ]
  },
  {
     level: 'Senior Architect',
     badgeId: 'senior',
     icon: '👑',
     worldMatch: 14, // After W15
     tasks: [
         { id: 'int-s1', title: 'Inheritance Architecture', taskHTML: 'Create class <code>Solid</code>. Create <code>Cube(Solid)</code>. Give Cube a <code>type</code> attribute "Square". Print a Cube instance type.', expectedOutput: 'Square' },
         { id: 'int-s2', title: 'System Serialization', taskHTML: 'Given <code>raw = \'{"id": 101}\'</code>. Use <code>json.loads</code> and print value for "id".', expectedOutput: '101' },
         { id: 'int-s3', title: 'Maximum Efficiency', taskHTML: 'Define <code>sort_and_reverse(l)</code>. It should sort then reverse <code>[5, 1, 9]</code>. Print the function result.', expectedOutput: '[9, 5, 1]' }
     ]
  }
];

const ARCADE_GAMES = [
  {
    title: "Python Snake", fps: 100, goal: "Eat red apples. Don't hit your tail.", controls: "Arrow keys.",
    init: () => { arcadeState = { snake: [{x:150, y:150}], dx:15, dy:0, apple:{x:60,y:60}, cd:false }; },
    keydown: (e) => {
      let s = arcadeState;
      if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault();
      if(s.cd) return;
      if(e.key === 'ArrowUp' && s.dy !== 15) { s.dx = 0; s.dy = -15; s.cd = true; }
      if(e.key === 'ArrowDown' && s.dy !== -15) { s.dx = 0; s.dy = 15; s.cd = true; }
      if(e.key === 'ArrowLeft' && s.dx !== 15) { s.dx = -15; s.dy = 0; s.cd = true; }
      if(e.key === 'ArrowRight' && s.dx !== -15) { s.dx = 15; s.dy = 0; s.cd = true; }
    },
    loop: (ctx) => {
      let s = arcadeState; s.cd = false;
      let head = {x: s.snake[0].x + s.dx, y: s.snake[0].y + s.dy};
      if(head.x < 0 || head.x >= 300 || head.y < 0 || head.y >= 300) return arcadeCrash();
      for(let i=0; i<s.snake.length; i++) if(head.x === s.snake[i].x && head.y === s.snake[i].y) return arcadeCrash();
      s.snake.unshift(head);
      if(head.x === s.apple.x && head.y === s.apple.y) {
        arcadeScore++; updateArcadeScore();
        s.apple = {x: Math.floor(Math.random() * 20)*15, y: Math.floor(Math.random() * 20)*15};
      } else s.snake.pop();
      ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
      ctx.fillStyle = '#f00'; ctx.fillRect(s.apple.x, s.apple.y, 15, 15);
      ctx.fillStyle = '#0f0'; s.snake.forEach(p => ctx.fillRect(p.x, p.y, 14, 14));
    }
  },
  {
    title: "Flappy Glider", fps: 40, goal: "Fly through the green pipes.", controls: "SPACE to flap.",
    init: () => { arcadeState = { y: 150, vy: 0, pipes: [{x:300, y:150}] }; },
    keydown: (e) => { if(e.code === 'Space') { e.preventDefault(); arcadeState.vy = -7; } },
    loop: (ctx) => {
      let s = arcadeState;
      s.vy += 0.5; s.y += s.vy;
      if(s.y < 0 || s.y > 300) return arcadeCrash();
      s.pipes.forEach(p => p.x -= 4);
      if(s.pipes[0].x < -40) { s.pipes.shift(); arcadeScore++; updateArcadeScore(); }
      if(s.pipes[s.pipes.length-1].x < 120) s.pipes.push({x:300, y:Math.floor(Math.random()*160)+70});
      let crash = false;
      s.pipes.forEach(p => {
        if(50 < p.x+40 && 70 > p.x) { if(s.y < p.y - 50 || s.y > p.y + 50) crash = true; }
      });
      if(crash) return arcadeCrash();
      ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
      ctx.fillStyle = '#0f0'; s.pipes.forEach(p => { ctx.fillRect(p.x, 0, 40, p.y-50); ctx.fillRect(p.x, p.y+50, 40, 300); });
      ctx.fillStyle = '#ff0'; ctx.fillRect(50, s.y-10, 20, 20);
    }
  },
  {
    title: "Bug Shooter", fps: 40, goal: "Shoot descending software bugs.", controls: "Left/Right arrows. SPACE to shoot.",
    init: () => { arcadeState = { x: 140, bullets: [], enemies: [{x:100, y:0}] }; },
    keydown: (e) => {
      let s = arcadeState;
      if(['ArrowLeft','ArrowRight','Space'].includes(e.code)) e.preventDefault();
      if(e.code === 'ArrowLeft') s.x = Math.max(0, s.x-20);
      if(e.code === 'ArrowRight') s.x = Math.min(280, s.x+20);
      if(e.code === 'Space') s.bullets.push({x: s.x+8, y: 270});
    },
    loop: (ctx) => {
      let s = arcadeState;
      if(Math.random() < 0.05) s.enemies.push({x: Math.random()*280, y: 0});
      s.bullets.forEach(b => b.y -= 10);
      s.enemies.forEach(en => en.y += 2.5);
      s.bullets = s.bullets.filter(b => b.y > 0);
      s.enemies.forEach((en, ei) => {
        if(en.y > 280) return arcadeCrash();
        s.bullets.forEach((b, bi) => {
          if(Math.abs(en.x - b.x) < 20 && Math.abs(en.y - b.y) < 20) {
            s.enemies.splice(ei, 1); s.bullets.splice(bi, 1); arcadeScore++; updateArcadeScore();
          }
        });
      });
      ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
      ctx.fillStyle = '#0f0'; ctx.fillRect(s.x, 280, 20, 20);
      ctx.fillStyle = '#ff0'; s.bullets.forEach(b => ctx.fillRect(b.x, b.y, 4, 10));
      ctx.fillStyle = '#f00'; s.enemies.forEach(en => ctx.fillRect(en.x, en.y, 20, 20));
    }
  },
  {
    title: "Loot Catcher", fps: 40, goal: "Catch blue gems. Avoid red pixel bombs.", controls: "Left/Right arrows.",
    init: () => { arcadeState = { x: 130, items: [] }; },
    keydown: (e) => {
      let s = arcadeState;
      if(['ArrowLeft','ArrowRight'].includes(e.code)) e.preventDefault();
      if(e.key === 'ArrowLeft') s.x = Math.max(0, s.x-30);
      if(e.key === 'ArrowRight') s.x = Math.min(260, s.x+30);
    },
    loop: (ctx) => {
      let s = arcadeState;
      if(Math.random() < 0.08) s.items.push({x: Math.random()*280, y: 0, bad: Math.random()>0.7});
      s.items.forEach(i => i.y += 5);
      s.items.forEach((i, idx) => {
        if(i.y > 280 && i.y < 300 && i.x > s.x-15 && i.x < s.x+40) {
           s.items.splice(idx, 1);
           if(i.bad) arcadeCrash(); else { arcadeScore++; updateArcadeScore(); }
        }
      });
      ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
      ctx.fillStyle = '#0f0'; ctx.fillRect(s.x, 280, 40, 10);
      s.items.forEach(i => { ctx.fillStyle = i.bad ? '#f00' : '#4287f5'; ctx.fillRect(i.x, i.y, 15, 15); });
    }
  },
  {
    title: "Block Breaker", fps: 40, goal: "Bounce ball to break blocks.", controls: "Left/Right arrows.",
    init: () => { 
      let blocks = []; for(let r=0; r<4; r++) for(let c=0; c<6; c++) blocks.push({x:c*50+5, y:r*20+10});
      arcadeState = { px: 110, bx: 150, by: 200, bdx: 6, bdy: -6, blocks }; 
    },
    keydown: (e) => {
      let s = arcadeState;
      if(['ArrowLeft','ArrowRight'].includes(e.code)) e.preventDefault();
      if(e.key === 'ArrowLeft') s.px = Math.max(0, s.px-25);
      if(e.key === 'ArrowRight') s.px = Math.min(220, s.px+25);
    },
    loop: (ctx) => {
      let s = arcadeState;
      s.bx += s.bdx; s.by += s.bdy;
      if(s.bx < 0 || s.bx > 290) s.bdx *= -1;
      if(s.by < 0) s.bdy *= -1;
      if(s.by > 300) return arcadeCrash();
      if(s.by > 270 && s.bx > s.px-5 && s.bx < s.px+85) { s.bdy *= -1; s.by = 270; }
      s.blocks.forEach((bl, idx) => {
        if(s.bx>bl.x && s.bx<bl.x+40 && s.by>bl.y && s.by<bl.y+15) { s.blocks.splice(idx,1); s.bdy *= -1; arcadeScore++; updateArcadeScore(); }
      });
      if(s.blocks.length===0) return arcadeCrash(); // Win counts as end
      ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
      ctx.fillStyle = '#0f0'; ctx.fillRect(s.px, 280, 80, 10);
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(s.bx, s.by, 5, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#f0f'; s.blocks.forEach(bl => ctx.fillRect(bl.x, bl.y, 40, 15));
    }
  },
  {
    title: "Asteroid Dodger", fps: 40, goal: "Avoid the bouncing space rocks.", controls: "Arrow keys.",
    init: () => { arcadeState = { x: 140, y:140, rocks: [{x:10, y:10, dx:4, dy:4}], t: 0 }; },
    keydown: (e) => {
      let s = arcadeState;
      if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.code)) e.preventDefault();
      if(e.key === 'ArrowLeft') s.x = Math.max(0, s.x-15);
      if(e.key === 'ArrowRight') s.x = Math.min(280, s.x+15);
      if(e.key === 'ArrowUp') s.y = Math.max(0, s.y-15);
      if(e.key === 'ArrowDown') s.y = Math.min(280, s.y+15);
    },
    loop: (ctx) => {
      let s = arcadeState; s.t++;
      if(s.t % 20 === 0) { arcadeScore++; updateArcadeScore(); }
      if(s.t % 60 === 0 && s.rocks.length < 8) s.rocks.push({x:0, y:0, dx:Math.random()*5+2, dy:Math.random()*5+2});
      s.rocks.forEach(r => {
        r.x += r.dx; r.y += r.dy;
        if(r.x < 0 || r.x > 280) r.dx *= -1;
        if(r.y < 0 || r.y > 280) r.dy *= -1;
        if(Math.abs(r.x - s.x) < 20 && Math.abs(r.y - s.y) < 20) arcadeCrash();
      });
      ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
      ctx.fillStyle = '#0f0'; ctx.fillRect(s.x, s.y, 20, 20);
      ctx.fillStyle = '#aaa'; s.rocks.forEach(r => ctx.fillRect(r.x, r.y, 20, 20));
    }
  },
  {
    title: "Memory Match", fps: 40, goal: "Match the pairs of emojis.", controls: "Click to flip card.",
    init: () => { 
      let icons = ['🐍','🔥','❄️','💎','🍎','🦊'];
      let cards = [...icons, ...icons].sort(() => Math.random() - 0.5).map(icon => ({icon, flipped:false, solved:false}));
      arcadeState = { cards, flipped: [], locks: false };
    },
    click: (x, y) => {
      let s = arcadeState; if(s.locks) return;
      let col = Math.floor(x/75), row = Math.floor(y/75);
      let idx = row*4 + col; if(!s.cards[idx] || s.cards[idx].flipped || s.cards[idx].solved) return;
      s.cards[idx].flipped = true; s.flipped.push(idx);
      if(s.flipped.length === 2) {
        s.locks = true;
        setTimeout(() => {
          let [a, b] = s.flipped;
          if(s.cards[a].icon === s.cards[b].icon) { s.cards[a].solved = s.cards[b].solved = true; arcadeScore++; updateArcadeScore(); }
          else { s.cards[a].flipped = s.cards[b].flipped = false; }
          s.flipped = []; s.locks = false;
          if(s.cards.every(c => c.solved)) arcadeCrash(); // Reset/Win
        }, 500);
      }
    },
    loop: (ctx) => {
      let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
      s.cards.forEach((c, i) => {
        let x = (i%4)*75, y = Math.floor(i/4)*75;
        ctx.fillStyle = c.solved ? '#222' : (c.flipped ? '#333' : '#444');
        ctx.fillRect(x+5, y+5, 65, 65);
        if(c.flipped || c.solved) { ctx.font = '2rem Arial'; ctx.textAlign = 'center'; ctx.fillText(c.icon, x+37, y+45); }
      });
    }
  },
  {
     title: "Reflex Square", fps: 40, goal: "Click the green square quickly!", controls: "Click/Tap.",
     init: () => { arcadeState = { x: 100, y: 100, t: 0 }; },
     click: (x, y) => {
       let s = arcadeState;
       if(x > s.x && x < s.x+50 && y > s.y && y < s.y+50) {
         arcadeScore++; updateArcadeScore();
         s.x = Math.random()*250; s.y = Math.random()*250; s.t = 0;
       }
     },
     loop: (ctx) => {
       let s = arcadeState; s.t++;
       if(s.t > 60) return arcadeCrash();
       ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
       ctx.fillStyle = '#0f0'; ctx.fillRect(s.x, s.y, 50, 50);
       ctx.fillStyle = '#f00'; ctx.fillRect(0, 0, (s.t/60)*300, 5);
     }
  },
  {
     title: "Doodle Climber", fps: 40, goal: "Climb the platforms to escape.", controls: "Left/Right Arrows.",
     init: () => { arcadeState = { x: 150, y: 250, vy: 0, plats: [{x:100,y:280}, {x:50,y:200}, {x:200,y:120}, {x:100,y:40}] }; },
     keydown: (e) => {
        let s = arcadeState; if(e.key === 'ArrowLeft') s.x -= 20; if(e.key === 'ArrowRight') s.x += 20;
     },
     loop: (ctx) => {
        let s = arcadeState; s.vy += 0.4; s.y += s.vy;
        if(s.y > 300) return arcadeCrash();
        if(s.y < 50) { let dy = 50 - s.y; s.y = 50; s.plats.forEach(p => { p.y += dy; if(p.y > 300) { p.y = 0; p.x = Math.random()*250; arcadeScore++; updateArcadeScore(); } }); }
        s.plats.forEach(p => { if(s.vy > 0 && s.x+20 > p.x && s.x < p.x+50 && s.y+20 > p.y && s.y+20 < p.y+15) { s.vy = -10; } });
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#0ff'; s.plats.forEach(p => ctx.fillRect(p.x, p.y, 50, 10));
        ctx.fillStyle = '#ff0'; ctx.fillRect(s.x, s.y, 20, 20);
     }
  },
  {
     title: "Math Rush", fps: 40, goal: "Solve the math problem correctly.", controls: "Use mouse to click the answer.",
     init: () => { 
        let a = Math.floor(Math.random()*10), b = Math.floor(Math.random()*10);
        let ans = a + b, wrong = ans + (Math.random()>0.5?1:-1);
        arcadeState = { q: `${a} + ${b} = ?`, ans, opts: [ans, wrong].sort(() => Math.random()-0.5), t: 0 };
     },
     click: (x, y) => {
        let s = arcadeState;
        let idx = y > 150 ? (x > 150 ? 1 : 0) : -1;
        if(y > 200) {
           let choice = x < 150 ? s.opts[0] : s.opts[1];
           if(choice === s.ans) { arcadeScore++; updateArcadeScore(); arcadeGameDef.init(); }
           else return arcadeCrash();
        }
     },
     loop: (ctx) => {
        let s = arcadeState; s.t++; if(s.t > 80) return arcadeCrash();
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#fff'; ctx.font = '2rem Arial'; ctx.textAlign='center'; ctx.fillText(s.q, 150, 100);
        ctx.fillStyle = '#333'; ctx.fillRect(20, 210, 120, 60); ctx.fillRect(160, 210, 120, 60);
        ctx.fillStyle = '#fff'; ctx.fillText(s.opts[0], 80, 250); ctx.fillText(s.opts[1], 220, 250);
        ctx.fillStyle = '#00f'; ctx.fillRect(0, 0, 300 - (s.t/80)*300, 5);
     }
  },
  {
     title: "Traffic Crosser", fps: 40, goal: "Cross the road safely.", controls: "Arrow Keys.",
     init: () => { arcadeState = { x: 140, y: 270, cars: [{x:0, y:50, s:3}, {x:100, y:120, s:-4}, {x:200, y:190, s:2}] }; },
     keydown: (e) => {
        let s = arcadeState;
        if(e.key === 'ArrowUp') s.y -= 30; if(e.key === 'ArrowDown') s.y += 30;
        if(e.key === 'ArrowLeft') s.x -= 20; if(e.key === 'ArrowRight') s.x += 20;
     },
     loop: (ctx) => {
        let s = arcadeState;
        s.cars.forEach(c => { 
          c.x += c.s; if(c.x > 300) c.x = -40; if(c.x < -40) c.x = 300;
          if(Math.abs(c.x - s.x) < 30 && Math.abs(c.y - s.y) < 20) return arcadeCrash();
        });
        if(s.y < 20) { arcadeScore += 5; updateArcadeScore(); s.y = 270; }
        ctx.fillStyle = '#111'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#444'; ctx.fillRect(0, 40, 300, 40); ctx.fillRect(0, 110, 300, 40); ctx.fillRect(0, 180, 300, 40);
        ctx.fillStyle = '#f00'; s.cars.forEach(c => ctx.fillRect(c.x, c.y, 40, 20));
        ctx.fillStyle = '#0f0'; ctx.font = '1.5rem Arial'; ctx.fillText('🐍', s.x, s.y+20);
     }
  },
  {
     title: "Simon Coder", fps: 40, goal: "Repeat the sequence of colors.", controls: "Click the colored panels.",
     init: () => { arcadeState = { seq: [Math.floor(Math.random()*4)], user: [], waiting: false, t: 0, showIdx: 0, flash: -1 }; },
     click: (x, y) => {
        let s = arcadeState; if(!s.waiting) return;
        let idx = y < 150 ? (x < 150 ? 0 : 1) : (x < 150 ? 2 : 3);
        s.flash = idx; setTimeout(() => s.flash = -1, 200);
        s.user.push(idx);
        if(s.user[s.user.length-1] !== s.seq[s.user.length-1]) return arcadeCrash();
        if(s.user.length === s.seq.length) { 
          arcadeScore++; updateArcadeScore(); 
          s.seq.push(Math.floor(Math.random()*4)); s.user = []; s.waiting = false; s.showIdx = 0; s.t = 0;
        }
     },
     loop: (ctx) => {
        let s = arcadeState; s.t++;
        if(!s.waiting && s.t % 40 === 0) {
           s.flash = s.seq[s.showIdx]; setTimeout(() => s.flash = -1, 300);
           s.showIdx++; if(s.showIdx >= s.seq.length) s.waiting = true;
        }
        let colors = ['#f00','#0f0','#00f','#ff0'];
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        for(let i=0; i<4; i++) {
           ctx.fillStyle = colors[i]; ctx.globalAlpha = s.flash === i ? 1 : 0.3;
           ctx.fillRect((i%2)*150, Math.floor(i/2)*150, 150, 150);
        }
        ctx.globalAlpha = 1;
     }
  },
  {
     title: "Balloon Popper", fps: 40, goal: "Pop the moving balloons!", controls: "Click to pop.",
     init: () => { arcadeState = { bs: [{x:150, y:320, s:2, c:'#f00'}] }; },
     click: (x, y) => {
        let s = arcadeState;
        s.bs.forEach((b, i) => {
          if(Math.sqrt((x-b.x)**2 + (y-b.y)**2) < 30) { s.bs.splice(i,1); arcadeScore++; updateArcadeScore(); }
        });
     },
     loop: (ctx) => {
        let s = arcadeState; if(Math.random() < 0.05) s.bs.push({x:Math.random()*280, y:320, s:Math.random()*3+1, c:`hsl(${Math.random()*360},70%,50%)`});
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        s.bs.forEach((b, i) => {
          b.y -= b.s; if(b.y < -50) { s.bs.splice(i,1); arcadeCrash(); }
          ctx.fillStyle = b.c; ctx.beginPath(); ctx.arc(b.x, b.y, 25, 0, Math.PI*2); ctx.fill();
        });
     }
  },
  {
     title: "Gravity Dodge", fps: 40, goal: "Flip gravity to avoid spikes.", controls: "SPACE to flip gravity.",
     init: () => { arcadeState = { x: 50, y: 150, g: 0.5, vy: 0, obs: [{x:300, y:0, h:50}] }; },
     keydown: (e) => { if(e.code === 'Space') { e.preventDefault(); arcadeState.g *= -1; } },
     loop: (ctx) => {
        let s = arcadeState; s.vy += s.g; s.y += s.vy;
        if(s.y < 0 || s.y > 300) return arcadeCrash();
        s.obs.forEach(o => { 
          o.x -= 5; if(o.x < -30) { o.x = 300; o.y = Math.random()>0.5?0:250; o.h = 50; arcadeScore++; updateArcadeScore(); }
          if(s.x+20 > o.x && s.x < o.x+30 && s.y+20 > o.y && s.y < o.y+o.h) return arcadeCrash();
        });
        ctx.fillStyle = '#111'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#f00'; s.obs.forEach(o => ctx.fillRect(o.x, o.y, 30, o.h));
        ctx.fillStyle = '#0ff'; ctx.fillRect(s.x, s.y, 20, 20);
     }
  },
  {
     title: "Paddle AI", fps: 40, goal: "Win 3 points against the CPU.", controls: "Up/Down Arrows.",
     init: () => { arcadeState = { py: 120, cy: 120, bx: 150, by: 150, dx: 4, dy: 3, ps: 0, cs: 0 }; },
     keydown: (e) => {
        let s = arcadeState; if(e.key === 'ArrowUp') s.py = Math.max(0, s.py-30); if(e.key === 'ArrowDown') s.py = Math.min(240, s.py+30);
     },
     loop: (ctx) => {
        let s = arcadeState; s.bx += s.dx; s.by += s.dy;
        if(s.by < 0 || s.by > 290) s.dy *= -1;
        if(s.bx < 20 && s.by+10 > s.py && s.by < s.py+60) s.dx = Math.abs(s.dx);
        if(s.bx > 270 && s.by+10 > s.cy && s.by < s.cy+60) s.dx = -Math.abs(s.dx);
        if(s.bx < 0) { s.cs++; s.bx=150; if(s.cs>=3) return arcadeCrash(); }
        if(s.bx > 300) { s.ps++; s.bx=150; arcadeScore += 10; updateArcadeScore(); if(s.ps>=3) return arcadeCrash(); }
        if(s.cy+30 < s.by) s.cy += 3; else s.cy -= 3;
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#fff'; ctx.fillRect(10, s.py, 10, 60); ctx.fillRect(280, s.cy, 10, 60);
        ctx.fillRect(s.bx, s.by, 10, 10);
     }
  },
  {
     title: "Maze Explorer", fps: 40, goal: "Reach the gold exit! ⭐", controls: "Arrow Keys.",
     init: () => { 
        let maze = [
          [0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0],[1,1,0,1,0],[0,0,0,0,2]
        ];
        arcadeState = { x: 0, y: 0, maze };
     },
     keydown: (e) => {
        let s = arcadeState; let nx = s.x, ny = s.y;
        if(e.key === 'ArrowUp') ny--; if(e.key === 'ArrowDown') ny++;
        if(e.key === 'ArrowLeft') nx--; if(e.key === 'ArrowRight') nx++;
        if(nx>=0 && nx<5 && ny>=0 && ny<5 && s.maze[ny][nx] !== 1) {
          s.x = nx; s.y = ny;
          if(s.maze[ny][nx] === 2) { arcadeScore += 50; updateArcadeScore(); arcadeGameDef.init(); }
        }
     },
     loop: (ctx) => {
        let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        for(let r=0; r<5; r++) for(let c=0; c<5; c++) {
           ctx.fillStyle = s.maze[r][c] === 1 ? '#444' : (s.maze[r][c] === 2 ? '#ff0' : '#222');
           ctx.fillRect(c*60+2, r*60+2, 56, 56);
        }
        ctx.fillStyle = '#0f0'; ctx.font = '2rem Arial'; ctx.fillText('🐍', s.x*60+15, s.y*60+45);
     }
  },
  {
     title: "Word Unscrambler", fps: 40, goal: "Pick the correct unscrambled keyword.", controls: "Click the correct word.",
     init: () => {
        const words = ["print", "while", "return", "import", "class", "global"];
        const w = words[Math.floor(Math.random()*words.length)];
        const s = w.split('').sort(() => Math.random()-0.5).join('');
        const opts = [w, words.filter(o => o!==w)[0]].sort(() => Math.random()-0.5);
        arcadeState = { s, ans: w, opts };
     },
     click: (x, y) => {
        let s = arcadeState; if(y < 200) return;
        let choice = x < 150 ? s.opts[0] : s.opts[1];
        if(choice === s.ans) { arcadeScore += 10; updateArcadeScore(); arcadeGameDef.init(); }
        else return arcadeCrash();
     },
     loop: (ctx) => {
        let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#fff'; ctx.font = '2rem Arial'; ctx.textAlign='center'; ctx.fillText(s.s, 150, 100);
        ctx.fillStyle = '#333'; ctx.fillRect(20, 210, 120, 60); ctx.fillRect(160, 210, 120, 60);
        ctx.fillStyle = '#fff'; ctx.font = '1rem Arial'; ctx.fillText(s.opts[0], 80, 250); ctx.fillText(s.opts[1], 220, 250);
     }
  },
  {
     title: "Hex Matcher", fps: 40, goal: "Which hex matches the color?", controls: "Click the hex code.",
     init: () => {
        const c = [['#f00','RED'], ['#0f0','GREEN'], ['#00f','BLUE'], ['#ff0','YELLOW']];
        const pair = c[Math.floor(Math.random()*4)];
        const wrong = c.filter(p => p[0]!==pair[0])[0];
        arcadeState = { color: pair[0], ans: pair[0], opts: [pair[0], wrong[0]].sort(() => Math.random()-0.5) };
     },
     click: (x, y) => {
        let s = arcadeState; if(y < 200) return;
        let choice = x < 150 ? s.opts[0] : s.opts[1];
        if(choice === s.ans) { arcadeScore += 5; updateArcadeScore(); arcadeGameDef.init(); }
        else return arcadeCrash();
     },
     loop: (ctx) => {
        let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = s.color; ctx.fillRect(100, 50, 100, 100);
        ctx.fillStyle = '#333'; ctx.fillRect(20, 210, 120, 60); ctx.fillRect(160, 210, 120, 60);
        ctx.fillStyle = '#fff'; ctx.font = '1rem Arial'; ctx.textAlign='center'; ctx.fillText(s.opts[0], 80, 250); ctx.fillText(s.opts[1], 220, 250);
     }
  },
  {
     title: "Stack Tower", fps: 40, goal: "Stack the blocks! Space to drop.", controls: "SPACE to stack.",
     init: () => { arcadeState = { x: 0, dx: 4, stack: [{x:110, w:80}] }; },
     keydown: (e) => {
        if(e.code === 'Space') {
           e.preventDefault(); let s = arcadeState;
           let last = s.stack[s.stack.length-1];
           if(s.x > last.x + last.w || s.x + last.w < last.x) return arcadeCrash();
           let nx = Math.max(s.x, last.x), nw = Math.min(s.x+last.w, last.x+last.w) - nx;
           s.stack.push({x: nx, w: nw}); s.x = 0; arcadeScore += 5; updateArcadeScore();
           if(s.stack.length > 8) s.stack.shift();
        }
     },
     loop: (ctx) => {
        let s = arcadeState; s.x += s.dx; if(s.x < 0 || s.x > 220) s.dx *= -1;
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#0f0'; s.stack.forEach((b, i) => ctx.fillRect(b.x, 280 - i*20, b.w, 15));
        ctx.fillStyle = '#fff'; ctx.fillRect(s.x, 280 - s.stack.length*20, s.stack[s.stack.length-1].w, 15);
     }
  },
  {
     title: "Whack-A-Linter", fps: 40, goal: "Whack the bugs!", controls: "Click the bugs.",
     init: () => { arcadeState = { holes: [0,0,0,0,0,0,0,0,0], active: -1, t: 0 }; },
     click: (x, y) => {
        let s = arcadeState; let col = Math.floor(x/100), row = Math.floor(y/100);
        let idx = row*3 + col; if(idx === s.active) { s.active = -1; arcadeScore++; updateArcadeScore(); }
     },
     loop: (ctx) => {
        let s = arcadeState; s.t++;
        if(s.t % 40 === 0) s.active = Math.floor(Math.random()*9);
        ctx.fillStyle = '#111'; ctx.fillRect(0,0,300,300);
        for(let i=0; i<9; i++) {
           ctx.fillStyle = '#333'; ctx.beginPath(); ctx.ellipse((i%3)*100+50, Math.floor(i/3)*100+50, 40, 20, 0, 0, Math.PI*2); ctx.fill();
           if(s.active === i) { ctx.font = '2rem Arial'; ctx.textAlign='center'; ctx.fillText('🪲', (i%3)*100+50, Math.floor(i/3)*100+65); }
        }
     }
  },
  {
     title: "Rain Dodge", fps: 40, goal: "Avoid the blue raindrops.", controls: "Arrow keys.",
     init: () => { arcadeState = { x: 140, rain: [] }; },
     keydown: (e) => {
        let s = arcadeState; if(e.key === 'ArrowLeft') s.x = Math.max(0, s.x-20); if(e.key === 'ArrowRight') s.x = Math.min(280, s.x+20);
     },
     loop: (ctx) => {
        let s = arcadeState; if(Math.random() < 0.2) s.rain.push({x:Math.random()*290, y:0, s:Math.random()*5+3});
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        s.rain.forEach((r, i) => {
          r.y += r.s; if(r.y > 300) { s.rain.splice(i,1); arcadeScore++; updateArcadeScore(); }
          if(Math.abs(r.x - s.x) < 15 && Math.abs(r.y - 280) < 15) return arcadeCrash();
          ctx.fillStyle = '#00f'; ctx.fillRect(r.x, r.y, 10, 10);
        });
        ctx.fillStyle = '#ff0'; ctx.fillRect(s.x, 280, 20, 20);
     }
  },
  {
     title: "Pattern Lock", fps: 40, goal: "Connect the dots in order (1, 2, 3).", controls: "Click the dots.",
     init: () => { 
        const dots = [{i:1,x:50,y:100,d:false},{i:2,x:250,y:100,d:false},{i:3,x:150,y:250,d:false}].sort(() => Math.random()-0.5);
        arcadeState = { dots, next: 1 }; 
     },
     click: (x, y) => {
        let s = arcadeState;
        s.dots.forEach(d => {
          if(!d.d && d.i === s.next && Math.sqrt((x-d.x)**2+(y-d.y)**2) < 20) { d.d = true; s.next++; if(s.next > 3) { arcadeScore += 20; updateArcadeScore(); arcadeGameDef.init(); } }
        });
     },
     loop: (ctx) => {
        let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        s.dots.forEach(d => {
           ctx.fillStyle = d.d ? '#0f0' : '#444'; ctx.beginPath(); ctx.arc(d.x, d.y, 20, 0, Math.PI*2); ctx.fill();
           ctx.fillStyle = '#fff'; ctx.font = '1rem Arial'; ctx.textAlign='center'; ctx.fillText(d.i, d.x, d.y+7);
        });
     }
  },
  {
     title: "Click Fast", fps: 40, goal: "Click the button 30 times!", controls: "CLICK CLICK CLICK!",
     init: () => { arcadeState = { count: 30 }; },
     click: (x, y) => { 
        if(x>50 && x<250 && y>100 && y<200) { 
          arcadeState.count--; if(arcadeState.count <= 0) { arcadeScore += 25; updateArcadeScore(); arcadeGameDef.init(); }
        }
     },
     loop: (ctx) => {
        let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#7c6af7'; ctx.fillRect(50, 100, 200, 100);
        ctx.fillStyle = '#fff'; ctx.font = '2rem Arial'; ctx.textAlign='center'; ctx.fillText(s.count, 150, 160);
     }
  },
  {
     title: "Path Weaver", fps: 40, goal: "Move through the narrow path.", controls: "Mouse movement.",
     init: () => { arcadeState = { px: 150, py: 280, walls: [{x:0, y:0, w:100}, {x:200, y:0, w:100}] }; },
     click: (x, y) => { arcadeState.px = x; arcadeState.py = y; },
     loop: (ctx) => {
        let s = arcadeState; if(Math.random() < 0.1) { let w = Math.random()*150+50; s.walls.push({x:0, y:0, w}, {x:w+60, y:0, w:300-w-60}); }
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        s.walls.forEach((w, i) => { 
           w.y += 4; if(w.y > 300) s.walls.splice(i,1);
           ctx.fillStyle = '#444'; ctx.fillRect(w.x, w.y, w.w, 20);
           if(s.px > w.x && s.px < w.x+w.w && s.py > w.y && s.py < w.y+20) arcadeCrash();
        });
        if(s.py < 20) { arcadeScore += 10; updateArcadeScore(); s.py = 280; }
        ctx.fillStyle = '#0f0'; ctx.beginPath(); ctx.arc(s.px, s.py, 5, 0, Math.PI*2); ctx.fill();
     }
  },
  {
     title: "Sort Master", fps: 40, goal: "Click the smaller number.", controls: "Click the smaller box.",
     init: () => {
        let a = Math.floor(Math.random()*100), b = Math.floor(Math.random()*100);
        if(a === b) b++; arcadeState = { a, b, ans: Math.min(a,b) };
     },
     click: (x, y) => {
        let s = arcadeState; if(y < 100 || y > 200) return;
        let choice = x < 150 ? s.a : s.b;
        if(choice === s.ans) { arcadeScore += 5; updateArcadeScore(); arcadeGameDef.init(); }
        else return arcadeCrash();
     },
     loop: (ctx) => {
        let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#333'; ctx.fillRect(20, 100, 120, 100); ctx.fillRect(160, 100, 120, 100);
        ctx.fillStyle = '#fff'; ctx.font = '2rem Arial'; ctx.textAlign='center'; ctx.fillText(s.a, 80, 160); ctx.fillText(s.b, 220, 160);
     }
  },
  {
     title: "Binary Switch", fps: 40, goal: "Match the target decimal number.", controls: "Click the bits (0/1).",
     init: () => { 
        let target = Math.floor(Math.random()*15)+1;
        arcadeState = { target, bits: [0,0,0,0] }; // 8 4 2 1
     },
     click: (x, y) => {
        let s = arcadeState; if(y < 150 || y > 250) return;
        let idx = Math.floor((x-20)/65); if(idx>=0 && idx<4) {
           s.bits[idx] = s.bits[idx] === 0 ? 1 : 0;
           let val = s.bits[0]*8 + s.bits[1]*4 + s.bits[2]*2 + s.bits[3]*1;
           if(val === s.target) { arcadeScore += 50; updateArcadeScore(); arcadeGameDef.init(); }
        }
     },
     loop: (ctx) => {
        let s = arcadeState; ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,300);
        ctx.fillStyle = '#fff'; ctx.font = '3rem Arial'; ctx.textAlign='center'; ctx.fillText(s.target, 150, 80);
        s.bits.forEach((b, i) => {
           ctx.fillStyle = b === 1 ? '#0f0' : '#444'; ctx.fillRect(20 + i*65, 150, 60, 60);
           ctx.fillStyle = '#fff'; ctx.font = '2rem Arial'; ctx.fillText(b, 50 + i*65, 195);
        });
     }
  }
];
