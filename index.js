let x = false;

function Togglemenu() {

    let submenu = document.getElementById("submenu");
    if (x == false) {
        submenu.style.maxHeight = 245;
        x = true;
    }
    else {
        submenu.style.maxHeight = 0;
        x = false;
    }

}

function set_color(x) {
    var r = document.querySelector(':root');
    if (x == 1) {
        r.style.setProperty('--color', '#11d48a');
    }
    if (x == 2) {
        r.style.setProperty('--color', 'blue');
    }
    if (x == 3) {
        r.style.setProperty('--color', '#d45511');
    }
    if (x == 4) {
        r.style.setProperty('--color', '#d411c4');
    }
}