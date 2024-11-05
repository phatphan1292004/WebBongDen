window.addEventListener("load", function() {
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-right");
    const prevBtn = document.querySelector(".slider-left");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    let positionX = 0;
    const sliderItemWidth = sliderMain.offsetWidth;
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

        positionX = -1 * index * sliderItemWidth; 
        sliderMain.style.transform = `translateX(${positionX}px)`;

        [...dotItems].forEach((el) => el.classList.remove("active"));
        dotItems[index].classList.add("active");
    }

    const cateData = [
        {
            id: "01",
            name: "Đèn chùm"
        },
        {
            id: "02",
            name: "Đèn thả"
        },
        {
            id: "03",
            name: "Đèn bàn"
        },
        {
            id: "04",
            name: "Đèn ốp trần"
        },
        {
            id: "05",
            name: "Đèn quạt"
        },
        {
            id: "06",
            name: "Đèn khác"
        }
    ];
    
    const subcateData = [
        {
            id: "01",
            name: "Đèn chùm hiện đại",
            idCate: "01" 
        },
        {
            id: "02",
            name: "Đèn chùm cổ điển",
            idCate: "01" 
        },
        {
            id: "03",
            name: "Đèn thả trang trí",
            idCate: "02" 
        },
        {
            id: "04",
            name: "Đèn thả nghệ thuật",
            idCate: "02" 
        },
        {
            id: "05",
            name: "Đèn bàn học",
            idCate: "03" 
        },
        {
            id: "06",
            name: "Đèn bàn trang trí",
            idCate: "03" 
        },
        {
            id: "07",
            name: "Đèn ốp trần LED",
            idCate: "04"
        },
        {
            id: "08",
            name: "Đèn ốp trần cổ điển",
            idCate: "04"
        },
        {
            id: "09",
            name: "Đèn quạt trần",
            idCate: "05" 
        },
        {
            id: "10",
            name: "Đèn quạt điều khiển từ xa",
            idCate: "05" 
        },
        {
            id: "11",
            name: "Đèn trang trí khác",
            idCate: "06" 
        }
    ];   
    
    cateData.forEach(category => { 
        const categoryItem = document.createElement("li");
        categoryItem.classList.add("category");
    
        const productsList = `
            <p class="category-header">${category.name}</p>
            <ul class="category-products">
                ${subcateData
                    .filter(subcate => subcate.idCate === category.id)
                    .map(subcate => `<li class="category-item">${subcate.name}</li>`)
                    .join('')}
            </ul>
        `;
    
        categoryItem.innerHTML = productsList;
        document.getElementById("category-list").appendChild(categoryItem);
    });    
});
