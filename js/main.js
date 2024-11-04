
window.addEventListener("load", function() {
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-right");
    const prevBtn = document.querySelector(".slider-left");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    let positionX = 0;
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let index = 0;

    setInterval(() => {
        handleChangeSlide(1);
    }, 3000);

    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1);
    });

    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1);
    });

    [...dotItems].forEach((item) => {
        item.addEventListener("click", function(e) {
            [...dotItems].forEach((el) => el.classList.remove("active"));
            const sliderIndex = parseInt(e.target.dataset.index);
            index = sliderIndex;
            e.target.classList.add("active");
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style.transform = `translateX(${positionX}px)`;
        });
    });

    function handleChangeSlide(dir) {
        if (dir === 1) {
            index++;
            if (index >= sliderLength) {
                index = 0; 
            }
        } else if (dir === -1) {
            index--;
            if (index < 0) {
                index = sliderLength - 1; 
            }
        }

        positionX = -1 * index * sliderItemWidth; // Cập nhật vị trí slide
        sliderMain.style.transform = `translateX(${positionX}px)`;

        // Cập nhật dot
        [...dotItems].forEach((el) => el.classList.remove("active"));
        dotItems[index].classList.add("active");
    }
});
