function loginUser(username, password, callback) {
    setTimeout(() => {
        // alice should be same in loginuser
        if (username === "alice" && password === "password123") {
            console.log("User logged in");
            callback(null, { userId: 1, username: username, password: password });
        } else {
            callback("Invalid username or password");
        }
    }, 1000);
}

function getUserDetails(userId, callback) {
    setTimeout(() => {
        console.log("User details fetched");
        callback(null, { userId: userId, name: "Alice" });
    }, 1000);
}

function getUserOrders(userId, callback) {
    setTimeout(() => {
        console.log("User orders fetched");
        callback(null, ["order1", "order2"]);
    }, 1000);
}

// Callback hell 
loginUser("alice", "password123", (err, user) => {
    if (err) return console.error("Login error:", err);

    getUserDetails(user.userId, (err, userDetails) => {
        if (err) return console.error("Details error:", err);

        getUserOrders(user.userId, (err, orders) => {
            if (err) return console.error("Orders error:", err);

            console.log("Final Result:", {
                user: {
                    ...userDetails,
                    username: user.username,
                    password: user.password
                },
                orders: orders
            });
        });
    });
});
