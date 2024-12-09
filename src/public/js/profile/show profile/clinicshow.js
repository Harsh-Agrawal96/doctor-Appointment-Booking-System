document.addEventListener('DOMContentLoaded', function() {
    const showBoxBtn = document.querySelectorAll('.showBoxBtn');
    const closeBoxBtn = document.getElementById('closeBoxBtn');
    const centeredBox = document.getElementById('centeredBox');

    console.log(showBoxBtn)

    for( let i = 0;i<showBoxBtn.length;i++ ){

        showBoxBtn[i].addEventListener('click', function() {
            centeredBox.classList.remove('hidden');
            createOverlay();
        });
    }

    closeBoxBtn.addEventListener('click', function() {
        centeredBox.classList.add('hidden');
        removeOverlay();
    });

    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
        overlay.style.display = 'block';
        overlay.addEventListener('click', function() {
            centeredBox.classList.add('hidden');
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
