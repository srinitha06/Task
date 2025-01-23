/*
function fetch(callback) {
    setTimeout(() => { callback("done"); }, 2000);
}

fetch((message) => { console.log(message); });*/
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using
/*const fetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("fetched");
    }, 2000);
});

fetch
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
    const fetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("fetched");
    }, 2000);
});

fetch
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fetched");
        }, 2000);
    });
}

fetchData()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
*/
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fetched");
        }, 2000);
    });
}

async function main() {
    const message = await fetchData();
    console.log(message);
}

main();


