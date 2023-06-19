var i;
var z = document.querySelectorAll("button");
for (i = 0; i < z.length; i++) {
    z[i].addEventListener("click", function () {

        if (this.innerHTML.trim() === "=") {
            document.querySelector("input").value = eval(document.querySelector("input").value);
        }
        else if (this.innerHTML.trim() === "C") {
            document.querySelector("input").value = "";
        }
        else {
            var c = "";
            c = document.querySelector("input").value;
            document.querySelector("input").value = c + this.innerHTML.trim();
        }
    })
}
