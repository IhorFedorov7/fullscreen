let onTop = document.querySelector('.onTop'),
    below = document.querySelector('.below');

    function onTopDown() {

        let pos = 0,
            down = setInterval(frame, 20);

        function frame() {
            if (pos === 35) {
            clearInterval(down);
            }else {
                pos++;
                onTop.style.top = pos + 'px';
            }
        }
    }
    onTopDown();

    function belowTop() {
        let pos = 200,
            belowOn = setInterval(frame1, 5);

        function frame1() {
            if (pos === 60) {
                clearInterval(belowOn);
            }else {
                pos--;
                below.style.top = pos + 'px';
            }
        }
    }
    belowTop();


//слайдер 
/*let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    // Очистить все изображения 'Clear all images'
    function reset() {
        for( i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
    }

    // Начальный слайдер 'Init slider'
    function startSlide() {
        reset();
        sliderImages[0].style.display = 'block';
    }

    // Показать предыдущий 'Show prev'
    function slideLeft(){
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }

    // Показать следующее 'Show next'
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }

    // Стрелка влево 'Left arrow click'
    arrowLeft.addEventListener('click', function() {
        if(current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    // Стрелка вправо 'Right arrow click'
    arrowRight.addEventListener('click', function() {
        if(current === sliderImages.length - 1) {
            current = - 1;
        }
        slideRight();
    });

    startSlide();*/

    