document.addEventListener('DOMContentLoaded', function() {
    const showBoxBtn = document.querySelectorAll('.showBoxBtn');
    const closeBoxBtn = document.getElementById('closeBoxBtn');
    const centeredBox = document.getElementsByClassName('centeredBox');

    console.log(closeBoxBtn)
    console.log(centeredBox)
    console.log(showBoxBtn)

    for( let i = 0;i<showBoxBtn.length;i++ ){

        showBoxBtn[i].addEventListener('click', function() {
            if( i%2 == 0 ){
                console.log(0);
                centeredBox[0].classList.remove('hidden');
                console.log(centeredBox[0]);
                createOverlay(0);
            }else{
                console.log(1);
                centeredBox[1].classList.remove('hidden');
                console.log(centeredBox[1]);
                createOverlay(1);
            }
        });
    }

    closeBoxBtn.addEventListener('click', function() {
        centeredBox.classList.add('hidden');
        removeOverlay();
    });

    function createOverlay(i) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block';
        console.log(overlay)
        overlay.addEventListener('click', function() {
            centeredBox[i].classList.add('hidden');
            removeOverlay();
        });
    }

    function removeOverlay() {
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.style.display = 'none';
            document.body.removeChild(overlay);
        }
    }
});
