const smenu =document.querySelector('.side_menu');
const show = document.querySelector('.list_load')
document.querySelector('.menu-icon').addEventListener('click',function (e){
e.preventDefault();
if (this.classList.contains('closed')){
    this.classList.remove('closed');
    this.classList.add('opened');
    smenu.style.left= '1px';
}else{
    this.classList.remove('opened');
    this.classList.add('closed');
    smenu.style.left= '-250px';
}

});

