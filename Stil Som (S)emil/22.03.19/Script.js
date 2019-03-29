var div = document.createElement("div");
var fontSize = 10;
var halfScreenSize = 50;

div.id = "hello";
div.innerHTML = "Hello, World!";
div.style.textAlign = "center";
div.style.fontSize = fontSize + "vh";
div.style.margin = halfScreenSize - fontSize + "vh";
document.body.appendChild(div);