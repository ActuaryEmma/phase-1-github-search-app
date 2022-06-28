
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
    })
       
    document.location.href="#repos-list"
    form.reset();
    })
    
function displaygit(datagit){
    let datausers = datagit.items;
    datausers.forEach(dataObject => {
        console.log(dataObject.login)
        let userName = dataObject.login;
        let userImage = dataObject.avatar_url;
        let userUrl =  dataObject.url;

        let displaydiv = document.createElement("div")
        displaydiv.classList.add("userItem")
        displaydiv.innerHTML = `
        <a target="_blank" href="https://www.github.com/${userName}"><img src="${userImage}" alt ="${userName}"/></a>
        <p>${userName}</p>
        <p>${userUrl}</p>
        
        `
        gitresults.appendChild(displaydiv)
    })
}
// line 33 anchor tag is to make the image clickable and open on a new blank page


