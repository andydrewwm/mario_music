let menuOpen = false;

function toggleMenu(expandMenu) {
    expandMenu.disabled = true;

    const links = document.getElementById("links");
    if (menuOpen) {
        expandMenu.style.rotate = "0deg";
        links.style.display = "none"
        menuOpen = false;
    } else {
        expandMenu.style.rotate = "90deg";
        links.style.display = "block"
        menuOpen = true;
    }

    expandMenu.disabled = false;
}
