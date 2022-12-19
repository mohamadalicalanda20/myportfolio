// for api count
function cb(response) {
    document.getElementById('visits').innerText = response.value;
}

var menuEl = document.getElementById('navbar-nav')
menuEl.style.maxHeight = "0px"
var imageEl = document.getElementById('ali-image')
var barEl = document.getElementById('navbar-toggler-icon')

// for mobile view
// function toggleMenu(){
//     if(menuEl.style.maxHeight == "0px"){
//         // menuEl.style.maxHeight = "160px"                                                                
//         barEl.style.transform="rotate(90deg)"
//     }
//     else{
//         menuEl.style.maxHeight = "0px"
//         barEl.style.transform="rotate(0deg)"
//     }
// }