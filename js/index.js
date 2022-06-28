
// function gituser(name){
//     return fetch("https://api.github.com/user",{
//         method:"POST",
//         headers:{
//             "Content-Type": "application/json",
//             Accept: "application/vnd.github.v3+json"
//         },
//         body:JSON.stringify({name})
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => consol.log(error))

// }
const gitresults = document.querySelector("#repos-list")
const form = document.getElementById("github-form")
form.addEventListener("submit", function(event){
    const search = document.getElementById("search").value;
    event.preventDefault();
    console.log(form)
    

    fetch(`https://api.github.com/search/users?q=${search}`)
    .then(response => response.json())
    .then(datagit => {
        console.log(datagit)
        gitresults.innerHTML=``
        displaygit(datagit)
       
        // document.getElementById("repos-list").innerHTML=`
        // <a target="_blank" href="https://api.github.com/${search}"> <img src = "${data.avatar_url}"/></a>
        
        // `
    })
  
    // .catch(error => console.log(error))

    

})
function displaygit(datagit){
    let datausers = datagit.users;
    datausers.forEach(dataObject => {
        console.log(dataObject.current_user_url)
    })
}


