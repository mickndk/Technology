const menu = document.querySelector('.menu');
const menubar = document.querySelector('.icon');

menubar.addEventListener("click", () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; 
    } else {
        menu.style.display = 'none'; 
    }
});
