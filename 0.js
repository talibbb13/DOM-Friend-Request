var statusss = document.querySelector("h3")
var addFriend = document.querySelector("#add")
// var removeee = document.querySelector("#remove")

// addFriend.addEventListener("click", function() {
//    statusss.innerHTML = "friends 😀"
//    statusss.style.color = "green"
// })

// removeee.addEventListener("click", function() {
//     statusss.innerHTML = "Stranger 🙁"
//     statusss.style.color = "crimson"
//  })

var flag = true

addFriend.addEventListener("click", function() {
   if (flag == true) {
    statusss.innerHTML = "friends 😀"
   statusss.style.color = "green"
   addFriend.innerHTML = "Remove"
   addFriend.style.backgroundColor = "#ff345a"
   flag = false
   }
   else {
    statusss.innerHTML = "Stranger 🙁"
   statusss.style.color = "crimson"
   addFriend.innerHTML = "Add Friend"
   addFriend.style.backgroundColor = "#478b61"
   flag= true
   }
 })
 