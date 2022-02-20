const menuIcon = document.querySelector("#menu__icon")
const sideBar = document.querySelector("#sidebar")
const sideBarCloseBtn = document.querySelector("#sidebar__close-btn")

const menuClick = () => {
    sideBar.classList.add('aside__visible')
    console.log("heeloo")
}

const sideBarClose = () => {
    sideBar.classList.remove('aside__visible')
}


menuIcon.addEventListener("click", menuClick)
sideBarCloseBtn.addEventListener("click", sideBarClose)