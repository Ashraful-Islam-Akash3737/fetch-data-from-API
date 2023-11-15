function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => fetchData(data))
}

function fetchData(info) {
    const ul = document.getElementById('users-list');
    for (let user of info) {
        // console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }


}
