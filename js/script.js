let openModal = document.querySelectorAll('.modal-btn');
let closeBtn = document.querySelector('.close-btn');

openModal.forEach((el) => {
    el.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "block" ;
    });
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none" ;
});
// window.onclick = function (e) {
//     if (e.target === modal) {
//         document.querySelector(".modal").style.display = "none"
//     }
// };