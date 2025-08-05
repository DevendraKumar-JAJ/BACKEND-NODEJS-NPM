ErrorHandlinMiddleware
A simple Express.js project demonstrating structured error handling using custom middleware, async error wrappers, and logging middleware.

🔧 Features
Custom error class (ExpressError)

Async error wrapper (wrapAsync)

Layered error handling middleware

Route-level middleware for logging requests

Fallback routes for unmatched paths

📁 Project Structure
pgsql
Copy
Edit
ErrorHandlinMiddleware/
├── index.js             # Main Express app with middleware and routes
├── wrapAsync.js         # Async error handling wrapper
├── ExpressError.js      # Custom error class
└── README.md            # Project documentation
🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/ErrorHandlinMiddleware.git
cd ErrorHandlinMiddleware
2. Install dependencies
bash
Copy
Edit
npm install express
3. Run the server
bash
Copy
Edit
node index.js
Server will start on http://localhost:4000

🧪 Usage
Root Route /
This route intentionally throws an error due to an undefined variable:

js
Copy
Edit
app.get('/', (req, res) => {
  avcd = abcde; // ReferenceError
});
User Route /user/:id
Uses middleware and an async wrapper to catch errors:

js
Copy
Edit
app.get('/user/:id', logStuff, aysncWrap((req, res, next) => {
  abcd = abcdef; // ReferenceError
  res.send('User Info');
}));
Logging Middleware
Logs the original URL and HTTP method for each request:

js
Copy
Edit
function logOriginalUrl(req, res, next) { ... }
function logMethod(req, res, next) { ... }
⚠️ Error Handling Middleware Flow
First Middleware: Logs and forwards the error.

Second Middleware: Modifies error with a custom ExpressError.

Third Middleware: Logs the error message.

Fourth Middleware: Sends the error message as a response.

🧠 Custom Modules
wrapAsync.js
Wraps async functions and forwards errors to next().

js
Copy
Edit
function aysncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>{next(err)})
  }
}
ExpressError.js
Defines a custom error class with status and message.

js
Copy
Edit
class ExpressError extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }
}
📌 Notes
Always define error-handling middleware after all routes.

Middleware chaining allows modular and layered error inspection.

The project is a good starting point for building robust Express applications with clear error logging and handling.

