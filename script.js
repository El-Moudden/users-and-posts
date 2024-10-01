


function getUsers(){

    let request = new XMLHttpRequest()
    request.open('GET', 'https://jsonplaceholder.typicode.com/users')
    request.responseType = "json"
    request.send()
    document.querySelector(".users").innerHTML = ""

    request.onload = function() {
        if(request.status >= 200 && request.status<300){
            let users = request.response
            let i = 1
            
            users.forEach(user => {
                
                document.querySelector(".users").innerHTML += `
                <div class="user"onclick="define(${user.id})">
                    <img src="./imgs/img${i}.jpg" alt="">
                    <div class="profil">
                        <p class="name"> ${user.name} </p>
                        <span class="email"> ${user.email}</span>
                    </div>
                </div>
                ` 
                i++
                
            })
        }else {
            console.error("Error:", request.statusText)
        }
    }

}

function getPosts(userId){

    let request = new XMLHttpRequest()
    request.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    request.responseType = "json"
    request.send()
    document.querySelector(".posts").innerHTML = ""

    request.onload = function() {
        if(request.status >= 200 && request.status<300){
            let posts = request.response

            posts.forEach(post => {
                
                document.querySelector(".posts").innerHTML += `
                <div class="post">
                    <h2>${post.title}</h2>
                    <hr>
                    <p>${post.body}</p>
                </div>
                ` 
                
            })
        }else {
            console.error("Error:", request.statusText)
        }
    }

}

function define(id){
    // Remove the 'scaled' class from all user divs
    document.querySelectorAll('.user').forEach(userDiv => {
        userDiv.classList.remove('scaled');
    });

    // Find the clicked user div and add the 'scaled' class
    const clickedUserDiv = document.querySelector(`.user[onclick*="define(${id})"]`);
    if (clickedUserDiv) {
        clickedUserDiv.classList.add('scaled');
    }

    // Fetch posts for the clicked user
    getPosts(id);
}
define()
getPosts()



getUsers()
