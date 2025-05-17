// loginUser in a Promise 
// run also on chrome console just copy paste
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "alice" && password === "password123") {
                console.log("User logged in");
                resolve({ userId: 1, username: username, password: password });
            } else {
                reject("Invalid username or password");
            }
        }, 1000);
    });
}

// getUserDetails in a Promise
function getUserDetails(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User details fetched");
            resolve({ userId: userId, name: "Alice" });
        }, 1000);
    });
}

// getUserOrders in a Promise
function getUserOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User orders fetched");
            resolve(["order1", "order2"]);
        }, 1000);
    });
}

// .then() .catch()
// loginUser("alice", "password123")
//     .then(user => {
//         return getUserDetails(user.userId)
//         .then(userDetails => {
//             return { user, userDetails };
//         });
//     })
//     .then(({ user, userDetails }) => {
//         return getUserOrders(user.userId)

//         // comment uncommet any .then(order=>) to check result
//         // uncomment this and check [[PromiseResult]]:undefined
//         // .then(orders => {
//         //     console.log("Final Result:", {
//         //         user: {
//         //             ...userDetails,
//         //             username: user.username,
//         //             password: user.password 
//         //         },
//         //         orders: orders
//         //     });

//         // });

//         //uncomment [[PromiseResult]]:Object
//         .then(orders => {
//             const finalResult = {
//                 user: {
//                     ...userDetails,
//                     username: user.username,
//                     password: user.password 
//                 },
//                 orders: orders
//             };
//             console.log("Final Result:", finalResult);
//             return finalResult;
//         });
//     })
//     .catch(err => {
//         console.error("Error:", err);
//     });

// async await
async function fetchUser() {
    try {
        const user = await loginUser("alice", "password123");
        const userDetails = await getUserDetails(user.userId);
        const orders = await getUserOrders(user.userId);

        const finalResult = {
            user: {
                ...userDetails,
                username: user.username,
                password: user.password
            },
            orders: orders
        };

        console.log("Final Result:", finalResult);
        return finalResult;
    } catch (err) {
        console.error("Error:", err);
    }
}

fetchUser();

