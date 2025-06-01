const express = require("express");
const PORT = 3000;
const app = express();
const cookieParser = require("cookie-parser");

// cookie parser middleware
app.use(cookieParser());

// to set a cookie
app.get("/set-cookie", (req, res) => {
    res.cookie("username", "John Doe", {
        maxAge: 60 * 1000, // 60sec means 1min
        // httpOnly: true, // not accessible via JS
        // secure: true, // Uncomment if using HTTPS but using HTPP keep it commented
    });
    res.send("Cookie has been set!");
});

// to get cookie
app.get("/get-cookie", (req, res) => {
    const username = req.cookies.username; // read cookie from client request
    res.send(`Cookie retrieved: ${username}`);
});

// to clear cookie
app.get("/clear-cookie", (req, res) => {
    res.clearCookie("username"); // Tells browser to delete the cookie
    res.send("Cookie has been cleared.");
});

app.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); // Server confirmation
});
