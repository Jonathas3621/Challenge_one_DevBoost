const mainMenu = document.querySelector('.main_menu');
const toggle = document.querySelector('.toggle-container');

function switchClass(element, firstClass, secondClass){
    if(element.classList.contains(firstClass)){
        element.classList.remove(firstClass);
        element.classList.add(secondClass);
    }else{
        element.classList.remove(secondClass);
        element.classList.add(firstClass);
    }
}

toggle.addEventListener('click', function(){
    mainMenu.classList.toggle('show-main-menu');
    switchClass(toggle, 'toggle-active', 'toggle-disabled');
});