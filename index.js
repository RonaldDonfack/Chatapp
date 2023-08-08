document.addEventListener('DOMContentLoaded' , () => {

    const toggleBtn = document.querySelector('.togglebtn')
    const toggleBtnIcon = document.querySelector('.togglebtn i')
    const dropDownMenu = document.querySelector('.dropdown-menu')
    
    toggleBtn.onclick = () =>{
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')
    
        toggleBtnIcon.classList = isOpen  ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
       
    }
})
