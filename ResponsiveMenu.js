const menuIcon = document.getElementById("menu-link");

function handleMenuIcon() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

menuIcon.addEventListener("click", handleMenuIcon);