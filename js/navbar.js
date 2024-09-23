const btn_click = document.querySelector('.expand-nav');
const menuList = document.querySelector('.menu-container>ul');

btn_click.addEventListener('click', ()=>{
    menuList.classList.toggle('menu-active');
    btn_click.classList.toggle('btn_clicked');
});

