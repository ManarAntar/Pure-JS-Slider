var imgList = Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer = document.querySelector('.lightBoxContainer');
var lightBoxContainerItem = document.querySelector('.lightBoxContainerItem');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var closeBtn = document.querySelector('.close');
var currentSliderIndex = 0;

for (i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', function (e) {
        var imgSrc = e.target.getAttribute('src');
        lightBoxContainerItem.style.cssText = `background-image: url(${imgSrc})`;
        lightBoxContainer.classList.replace('d-none', 'd-flex');
        currentSliderIndex = imgList.indexOf(e.target);
    })
}

function nextImg() {
    currentSliderIndex++;
    if (currentSliderIndex > imgList.length - 1) {
        currentSliderIndex = 0;
    }
    imgSrc = imgList[currentSliderIndex].getAttribute('src');
    lightBoxContainerItem.style.cssText = `background-image: url(${imgSrc})`;

}

function prevImg() {
    currentSliderIndex--;
    if (currentSliderIndex < 0) {
        currentSliderIndex = 5;
    }
    imgSrc = imgList[currentSliderIndex].getAttribute('src');
    lightBoxContainerItem.style.cssText = `background-image: url(${imgSrc})`;

}

nextBtn.addEventListener('click', nextImg);

prevBtn.addEventListener('click', prevImg);

closeBtn.addEventListener('click', function () {
    lightBoxContainer.classList.replace('d-flex', 'd-none');
})
document.addEventListener('keyup', function (e) {
    if (e.key == "ArrowLeft") {
        prevImg();
    }
})
document.addEventListener('keyup', function (e) {
    if (e.key == "ArrowRight") {
        nextImg();
    }
})
document.addEventListener('keyup', function (e) {
    if (e.key == 'Escape') {
        lightBoxContainer.classList.replace('d-flex', 'd-none');
    }
})