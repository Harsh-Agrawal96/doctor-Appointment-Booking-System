
document.addEventListener( "DOMContentLoaded", function () {

    document.querySelectorAll(".formcon")[1].classList.add('show');
    document.querySelectorAll(".formcon")[0].classList.add("ui_color");
    document.querySelectorAll(".section")[0].classList.add('section_design');

});
let choose = document.querySelectorAll(".section");
console.log(choose);

for( let i = 0;i<choose.length;i++ ){

    choose[i].addEventListener( "click", function () {

        document.querySelectorAll(".formcon")[0].classList.remove('show');
        document.querySelectorAll(".formcon")[1].classList.remove('show');
        document.querySelectorAll(".formcon")[0].classList.remove('ui_color');
        document.querySelectorAll(".formcon")[1].classList.remove('ui_color');
        document.querySelectorAll(".section")[0].classList.remove('section_design');
        document.querySelectorAll(".section")[1].classList.remove('section_design');

        let val = "show";
        let ind = 1 - i;
        document.querySelectorAll(".formcon")[ind].classList.add(val);
        document.querySelectorAll(".formcon")[i].classList.add("ui_color");
        document.querySelectorAll(".section")[i].classList.add('section_design');
    })
}