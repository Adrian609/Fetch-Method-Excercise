
//document.getElementById('getText').addEventListener('click', getText);
document.getElementById("getText").addEventListener('click', getText2);
document.getElementById("getUsers").addEventListener('click', getUsers);
document.getElementById("getPost").addEventListener('click', getPost);
document.getElementById("addPost").addEventListener('click', addPost);


function getText() {
    fetch("sample.txt").then(function (res) {
        return res.text();
    }).then(function (data) {
        console.log(data)
    });
}

function getText2() {
    fetch("sample.txt").then((res) => res.text()).then((data) => {
        let output = '<h2 class="mb-4">Sample Text Displayed</h2>';
         document.getElementById('output').innerHTML = output+= data;
    }).catch((err) => console.log(err));
}

function getUsers() {
    fetch(/*'https://jsonplaceholder.typicode.com/users'*/'scripts/users.json').then((res) => res.json()).then((data) => {
        let output = '<h2 class="mb-4">Users</h2>';
        data.forEach(function (users) {
            output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${users.id}</li>
                    <li class="list-group-item">Name: ${users.name}</li>
                    <li class="list-group-item">Username: ${users.username}</li>
                    <li class="list-group-item">Email: ${users.email}</li>
                    <li class="list-group-item">Phone: ${users.phone}</li>
                </ul> 
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
        let output = '<h2 class="mb-4">Post</h2>';
        data.forEach(function (post) {
            output += `
                <div class="card-body mb-3">
                    <h3>${post.title}</h3>
                    <p class="media text-muted">${post.body}</p> 
                </div>   
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({ title: title, body: body })
    }).then((res) => res.json()).then((data) => console.log(data));
}

