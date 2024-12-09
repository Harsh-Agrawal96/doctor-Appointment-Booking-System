// script.js

document.addEventListener("DOMContentLoaded", function() {

    // show default first section

    let content = document.querySelectorAll(".content")
    let firstSec = 'con' + 1;
    content[0].classList.add(firstSec);
    document.querySelectorAll(".section")[0].classList.add('righteffect');
    document.querySelectorAll(".small_sec")[0].classList.add('smallrighteffect');
    console.log(document.querySelectorAll(".small_sec"));

    let first;
    let multiData = document.querySelectorAll(".multi_data")
    let multihead = document.querySelectorAll(".multi_head")
    console.log(multihead);
    first = 'data' + 0;
    multiData[0].classList.add(first);
    multihead[0].classList.add('designback');
    first = 'data' + 4;
    multiData[4].classList.add(first);
    multihead[4].classList.add('designback');
    first = 'data' + 8;
    multiData[8].classList.add(first);
    multihead[8].classList.add('designback');

    let docform = document.querySelectorAll(".main_work form");
    for( let i = 0;i<docform.length;i++ ){
        docform[i].classList.add('hideme');
    }

});

// switch in between different edit sections

let section_name = document.querySelectorAll(".section")
let smallsec = document.querySelectorAll(".small_sec")

for( let i = 0;i<section_name.length;i++ ){

    section_name[i].addEventListener("click", function () {

        let nameofsec = "con" + (i+1);
    
        for( let j = 0;j<section_name.length;j++ ){
            let name = "con" + (j+1);
            document.getElementsByClassName("content")[j].classList.remove(name);
            section_name[j].classList.remove('righteffect');
        }
        document.getElementsByClassName("content")[i].classList.add(nameofsec);
        section_name[i].classList.add('righteffect');
    })
    smallsec[i].addEventListener("click", function () {

        let nameofsec = "con" + (i+1);
    
        for( let j = 0;j<smallsec.length;j++ ){
            let name = "con" + (j+1);
            document.getElementsByClassName("content")[j].classList.remove(name);
            smallsec[j].classList.remove('smallrighteffect');
        }
        document.getElementsByClassName("content")[i].classList.add(nameofsec);
        smallsec[i].classList.add('smallrighteffect');
    })
}

let booking_section = document.querySelectorAll(".bookhead")
let multiple_head = document.querySelectorAll(".multi_head");

let index;

for( let j = 0;j<multiple_head.length;j++ ){

    multiple_head[j].addEventListener("click", function () {
        index = j;
        
    })

}

for( let i = 0;i<booking_section.length;i++ ){

    booking_section[i].addEventListener("click", function () {

        let nameofsec = "data" + index;

        if( i == 2 ){
            for( let j = 4*i;j<(4*i + 3);j++ ){
                let name = "data" + (j);
                document.getElementsByClassName("multi_data")[j].classList.remove(name);
                multiple_head[j].classList.remove('designback')
            }
        }else{

            for( let j = 4*i;j<(4*i + 4);j++ ){
                let name = "data" + (j);
                document.getElementsByClassName("multi_data")[j].classList.remove(name);
                multiple_head[j].classList.remove('designback')
            }
        }
        document.getElementsByClassName("multi_data")[index].classList.add(nameofsec);
        multiple_head[index].classList.add('designback')
    
    })
}


let showformbtn = document.querySelectorAll('.main_work > div button');
for( let i = 0;i<showformbtn.length;i++ ){

    showformbtn[i].addEventListener( "click", function () {

        let innerform = document.querySelectorAll(".main_work form")[i];
        if( innerform.classList.contains('hideme') ){
            innerform.classList.remove('hideme');
            document.querySelectorAll(".main_work > div button")[i].innerHTML = "Close";
        }else{
            innerform.classList.add('hideme');
            document.querySelectorAll(".main_work > div button")[i].innerHTML = "Respond";
        }
    })
}

