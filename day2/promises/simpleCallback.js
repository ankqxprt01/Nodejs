
function fetchData(callback) {
    let data = { id: 1, name: "Alice" };

    let error = null; // when u pass data u should check for error

    if (error) {
        callback(error); // if there is an error, we pass it
    } else {
        // if u comment null u will get Error:{ id: 1, name: 'Alice' }
        callback(null, data); // If no error, we pass null for error and data for result
    }
}

fetchData((err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Data received:", data);
    }
});
