// ! DOM components
let result = document.getElementById("result");
const img = document.getElementById("img");
const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("decrypt");
const copyBtn = document.getElementById("copy");
const clearBtn = document.getElementById("clear");

// ! Keys
const keys = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

// ! Encrypt event
encryptBtn.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    for(key in keys){
        const regex = new RegExp(key, "g");
        input = input.replace(regex, keys[key]);
    };
    img.style.display = "none";
    result.innerHTML = input;
});

// ! Decrypt event
decryptBtn.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    for(key in keys){
        const regex = new RegExp(keys[key], "g");
        input = input.replace(regex, key);
    };
    img.style.display = "none";
    result.innerHTML = input;

});