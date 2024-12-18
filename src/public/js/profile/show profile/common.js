document.addEventListener('DOMContentLoaded', function() {
    const showBoxBtn = document.querySelectorAll('.showBoxBtn');
    const centeredBox = document.getElementsByClassName('centeredBox');

    for( let i = 0;i<showBoxBtn.length;i++ ){

        showBoxBtn[i].addEventListener('click', function() {
            if( i%2 == 0 ){
                centeredBox[0].classList.remove('hidden');
                createOverlay(0);
            }else{
                centeredBox[1].classList.remove('hidden');
                createOverlay(1);
            }
        });
    }

    function createOverlay(i) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block';
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
