function changeImage(index) {
    let images = document.querySelectorAll('.slider img');
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}