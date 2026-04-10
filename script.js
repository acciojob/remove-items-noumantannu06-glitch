function removecolor() {
    var x = document.getElementById("colorSelect");
    if (x.selectedIndex >= 0) {  // Safety check
        x.removeChild(x.options[x.selectedIndex]);
    }
}