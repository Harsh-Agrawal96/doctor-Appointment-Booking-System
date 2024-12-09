const parent = document.querySelectorAll('.parent');
const viewport = document.querySelectorAll('.data_show');
const scrollLeftBtn = document.querySelectorAll('.scroll-left');
const scrollRightBtn = document.querySelectorAll('.scroll-right');
const scrollStep = 100;

console.log(parent);
console.log(scrollLeftBtn);
console.log(scrollRightBtn);
console.log(viewport);

for( let i = 0;i<scrollLeftBtn.length;i++ ){

    scrollLeftBtn[i].addEventListener('click', () => {
        viewport[i].scrollBy({
            left: -scrollStep,
            behavior: 'smooth'
        });
    });
}

for( let i = 0;i<scrollRightBtn.length;i++ ){

    scrollRightBtn[i].addEventListener('click', () => {
        viewport[i].scrollBy({
            left: scrollStep,
            behavior: 'smooth'
        });
    });
    
}
