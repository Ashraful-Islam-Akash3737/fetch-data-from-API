function todosData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => allTodos(data))
}

function allTodos(data){
    const usersContainer = document.getElementById('users-container');
    for(const doc of data){
        const userDiv = document.createElement("div");
        userDiv.classList.add("users");
        userDiv.innerHTML = `
        <h3>user ID: ${doc.userId} </h3>
        <h3>id: ${doc.id}</h3>
        <h2>Title: ${doc.title}</h2>
        <p>Completed: ${doc.completed} </p>
        `
        usersContainer.appendChild(userDiv);
    }
}