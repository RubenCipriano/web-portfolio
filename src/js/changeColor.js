
var colors = [
    {"property": "--background-color", "white": "#121212", "#121212": "white"},
    {"property": "--font-primary-color", "#2C2C2C": "white", "white": "#2C2C2C"},
    {"property": "--secondary-background", "#E5E5E5": "white", "white": "#E5E5E5"}
]

function changeColor(button) {

    for(var i = 0; i < button.children.length; i++) {
        if(button.children[i].classList.contains("hidden")) {
            button.children[i].classList.remove("hidden")
        } else {
            button.children[i].classList.add("hidden")
        }
    }

    var root = document.querySelector(':root');

    var rootComputedStyle = getComputedStyle(root);

    colors.forEach(color => {
        var keyProperty = rootComputedStyle.getPropertyValue(color.property);

        root.style.setProperty(color.property, color[keyProperty]);
    });
}