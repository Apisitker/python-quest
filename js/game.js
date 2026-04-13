/**
 * Python Quest - Game Logic and Code Runner Wrapper
 */

class GameEngine {
    constructor() {
      this.skulptOutput = '';
    }
  
    /**
     * Initializes Skulpt and runs Python code
     * @param {string} code - The Python code to run
     * @param {function} onOutput - Callback for regular output chunks
     * @param {function} onError - Callback for errors
     * @param {function} onSuccess - Callback when execution finishes
     */
    runPython(code, onOutput, onError, onSuccess) {
      if (!window.Sk) {
        onError("Skulpt is not loaded. Check internet connection.");
        return;
      }
  
      this.skulptOutput = '';
  
      // Configure Skulpt
      Sk.configure({
        output: (text) => {
          this.skulptOutput += text;
          onOutput(text);
        },
        read: this.builtinRead,
        execLimit: 5000 // 5 second timeout to prevent infinite loops
      });
  
      // Run the code async
      const promise = Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody("<stdin>", false, code, true);
      });
  
      promise.then(
        (mod) => {
          onSuccess(this.skulptOutput);
        },
        (err) => {
          console.error("Skulpt Error:", err);
          onError(err.toString());
        }
      );
    }
  
    /**
     * Helper for Skulpt to load builtin modules
     */
    builtinRead(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
        throw "File not found: '" + x + "'";
      }
      return Sk.builtinFiles["files"][x];
    }
  
    /**
     * Verifies if the output matches the expected output
     */
    verifyOutput(actual, expected) {
      // Normalize line endings and trim trailing whitespace to make tests less flaky
      const normA = actual.replace(/\r\n/g, '\n').trim();
      const normE = expected.replace(/\r\n/g, '\n').trim();
      return normA === normE;
    }
  }
  
  // Expose as global singleton
  window.gameEngine = new GameEngine();
  
