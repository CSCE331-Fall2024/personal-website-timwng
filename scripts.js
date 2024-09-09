function toggleStyle() { 
    var current = document.getElementById("currentstyle");
    var stylename = current.getAttribute("href");

    var style;
    if(stylename === "style1") {
        style = "style2.css";
    } else {
        style = "style1.css";
    }

    current.setAttribute("href", style);
    localStorage.setItem("href", style);
} 

window.onload = function() {
    var current = document.getElementById("currentstyle")
    current.setAttribute("href", localStorage.getItem("href"));
}

document.getElementById("switch").addEventListener("click", toggleStyle)