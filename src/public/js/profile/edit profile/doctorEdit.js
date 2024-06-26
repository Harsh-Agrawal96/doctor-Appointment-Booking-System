// script.js

document.addEventListener("DOMContentLoaded", function() {

    // show default first section

    let content = document.querySelectorAll(".content")
    let firstSec = 'con' + 1;
    content[0].classList.add(firstSec);
    console.log(content);
    console.log(firstSec);

    let first;
    let multiData = document.querySelectorAll(".multi_data")
    first = 'data' + 0;
    multiData[0].classList.add(first);
    first = 'data' + 4;
    multiData[4].classList.add(first);

    
    // add and remove input in skills

    const skillInput = document.querySelectorAll(".skillInput");
    const addSkillButton = document.querySelectorAll(".addSkillButton");
    const skillsList = document.querySelectorAll(".skillList");
    const skillsHiddenInput = document.querySelectorAll(".hideskillList");


    for( let i = 0;i<addSkillButton.length;i++ ){

        addSkillButton[i].addEventListener("click", function() {

            const skill = skillInput[i].value.trim();
            console.log(skill);
            if (skill) {
                addSkill(skill,i);
                skillInput[i].value = '';
            }
        })
    }

    for( let i = 0;i<skillsList.length;i++ ){

        skillsList[i].addEventListener("click", function(event) {
            if (event.target.tagName === 'BUTTON') {
                removeSkill(event.target.parentElement,i);
            }
        });
    }

    function addSkill(skill,ind) {
        const li = document.createElement("li");
        li.textContent = skill;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        li.appendChild(removeButton);
        skillsList[ind].appendChild(li);
        updateHiddenInput(ind);
    }

    function removeSkill(skillElement,i) {
        skillsList[i].removeChild(skillElement);
        updateHiddenInput(i);
    }

    function updateHiddenInput(i) {
        const skills = [];
        skillsList[i].querySelectorAll("li").forEach(li => {
            skills.push(li.firstChild.textContent);
        });
        skillsHiddenInput[i].value = skills.join(",");
    }

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

        if( i == 1 ){
            for( let j = 4*i;j<(4*i + 3);j++ ){
                let name = "data" + (j);
                document.getElementsByClassName("multi_data")[j].classList.remove(name);
            }
        }else{

            for( let j = 4*i;j<(4*i + 4);j++ ){
                let name = "data" + (j);
                document.getElementsByClassName("multi_data")[j].classList.remove(name);
            }
        }
        document.getElementsByClassName("multi_data")[index].classList.add(nameofsec);
    
    })
}
