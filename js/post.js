function postData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => allPost(data))
}

function allPost(data){
    const usersContainer = document.getElementById('users-container');
    for(const doc of data){
        const userDiv = document.createElement("div");
        userDiv.classList.add("users");
        userDiv.innerHTML = `
        <h4>Post ID: ${doc.postId} </h4>
        <h3>id: ${doc.id}</h3>
        <h2>Name: ${doc.name}</h2>
        <h3>Email: ${doc.email}</h3>
        <p>Body: ${doc.body} </p>
        `
        usersContainer.appendChild(userDiv);
    }
}