// модальное окно фото

document.querySelectorAll('.el_1-img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal img').src = img.getAttribute('src')
    }
});

document.querySelector('.modal span').onclick = () => {
    document.querySelector('.modal').style.display = 'none';
}