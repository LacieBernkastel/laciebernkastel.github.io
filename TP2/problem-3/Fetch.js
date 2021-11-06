// The initial account displayed when opening the index.html is used as a placeholder.

let input = document.getElementById("usernameSearch");
input.addEventListener('keydown', function(e) {
    if(e.key === "Enter"){
        search();
    }
})

// Get all users
fetch('https://api.github.com/users')
  .then((response) => response.json())
  .then((json) => {
    const res = json;
    console.log(res);
  });



// Display a user information
function getUser(username){

    let userProfile = document.getElementById("userProfile");

    fetch('https://api.github.com/users/' + username)
    .then((response) => response.json())
    .then((user) => {

        let html = `<tr>
                        <td><img id="avatar" src=${user.avatar_url}></td>
                    </tr>
                    <tr>
                        <td id="name">${user.name}</td>
                    </tr>
                    <tr>
                        <td id="username">${user.login}</td>
                    </tr>
                    <tr>
                        <td id="email">${user.email}</td>
                    </tr>
                    <tr>
                        <td id="location">${user.location}</td>
                    </tr>
                    <tr>
                        <td id="nbOfGists">${user.public_gists}</td>
                    </tr>`;
        userProfile.innerHTML = html;
                    })
}

// Get all repositories for a user
function getRepos(user){

    let userRepos = document.getElementById("userRepos");
    let html = "";

    fetch('https://api.github.com/users/' + user + '/repos')
    .then((response) => response.json())
    .then((repos) => {
        
        if(repos.length > 4){
            document.getElementById("repoList").style.overflowY = "scroll";
            document.getElementById("repoList").style.maxHeight = "80vh";
        }

        repos.forEach(function(repo){
            html += 
            `<tr>
                <td>
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                </td>
            </tr>`;
            console.log(repo);
        });
        
        userRepos.innerHTML = html;
        console.log(repos);
        })
}

// Search for a user
function search(){
    fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((json) => {
        const res = json;
        res.filter(function(element){
            if(element.login.toUpperCase().includes(input.value.toUpperCase())){
                getUser(element.login);
                getRepos(element.login);
            };
        });
        console.log(res);
    });
}