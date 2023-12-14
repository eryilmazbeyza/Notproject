const notesContainer = document.querySelector(".notes-container");

const createBtn = document.querySelector(".btn");

let notes = document.querySelector(".input-box");


function shownot() {
    notesContainer.innerHTML = localStorage.getItem("notes");

}

shownot();

//Sayfada gelen notları güncelleyecek.Değiştirip atama yapacak
function updateStorage() {

    localStorage.setItem("notes", notesContainer.innerHTML);
        
}


createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/sil.png";
    notesContainer.appendChild(inputBox).appendChild(img);


})




//addevent listener
//addEventlistener fonksiyonu nesnelerde olay çalışmasını sağlar
//Bir etikete birden fazla olay ataması yapılmasını sağlar.
//sayfamızda buton varsa kullanıcı butona tıkladıktan sonra
//butonun renk değiştirmesini sağlar.Diğer adı olay dinleyicidir.


notesContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "IMG") {

        e.target.parentElement.remove();
    }

    else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.foreach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })


    }

})



document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();

    }





})

