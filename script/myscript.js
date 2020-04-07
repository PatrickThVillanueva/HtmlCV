function toggleDarkLight() {
    var body = document.getElementsByTagName("body")[0];
    var currentClass = body.className;
    body.className = currentClass == "dark" ? "light" : "dark";


    var block = document.getElementById("dark1");

    currentClass = block.className;
    block.className = currentClass == "dark" ? "light" : "dark";

    block = document.getElementById("dark2");

    currentClass = block.className;
    block.className = currentClass == "dark" ? "light" : "dark";
}

function startSetLight() {
    document.getElementById("modalbutton").click();
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    if (!isDayTime) toggleDarkLight();
}