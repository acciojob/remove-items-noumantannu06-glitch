 function removecolor() {
            var x = document.getElementById("colorSelect");
            if (x && x.selectedIndex >= 0) {
                x.removeChild(x.options[x.selectedIndex]);
            }
        }