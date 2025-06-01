const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

//middleware setup
app.use(session({
    secret: "yourSecretKey",        // to sign the session ID cookie(keep it secret!)
    resave: false,                  // dont save session, saves session only if modified
    saveUninitialized: true,       // save new sessions
    cookie: { maxAge: 60000 }      // logout after 60sec check using /dashboard route
}));

// Route to set session data
app.get("/login", (req, res) => {
    req.session.username = "JohnDoe";
    res.send("Session set for username: JohnDoe");
});

// Route to read session data
app.get("/dashboard", (req, res) => {
    if (req.session.username) {
        res.send(`Welcome back, ${req.session.username}!`);
    } else {
        res.send("You are not logged in.");
    }
});

// Route to destroy session (logout)
app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send("Error logging out.");
        }
        res.clearCookie("connect.sid"); // clear session cookie
        res.send("Logged out successfully.");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
