function usersData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => allUsers(data))
}

function allUsers(data){
    const usersContainer = document.getElementById('users-container');
    for(const doc of data){
        const userDiv = document.createElement("div");
        userDiv.classList.add("users");
        userDiv.innerHTML = `
        <h3>user ID: ${doc.id} </h3>
        <h2>Name: ${doc.name}</h2>
        <h4>user-Name: ${doc.username}</h4>
        <p>Email: ${doc.email} </p>
        `
        usersContainer.appendChild(userDiv);
    }
}