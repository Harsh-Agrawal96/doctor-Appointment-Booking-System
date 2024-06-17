// script.js

document.addEventListener("DOMContentLoaded", function() {

    // show default first section

    let content = document.querySelectorAll(".content")
    let firstSec = 'con' + 1;
    content[0].classList.add(firstSec);
    console.log(content);
    console.log(firstSec);

});

// switch in between different edit sections

let section_name = document.querySelectorAll(".section")

for( let i = 0;i<section_name.length;i++ ){

    section_name[i].addEventListener("click", function () {

        let nameofsec = "con" + (i+1);
    
        for( let j = 0;j<section_name.length;j++ ){
            let name = "con" + (j+1);
            document.getElementsByClassName("content")[j].classList.remove(name);
        }
        document.getElementsByClassName("content")[i].classList.add(nameofsec);
    })
}