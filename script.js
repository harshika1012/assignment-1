// document.addEventListener('DOMContentLoaded', function () {
//     const likeCounter = document.querySelector('.like-counter');
//     const commentsSection = document.querySelector('.comments-section');
//     const blogId = likeCounter.dataset.blogId;

//     // Initialize like counter from local storage or set to 0
//     likeCounter.textContent = getFromLocalStorage(blogId + '-likes') || 0;

//     // Increment like counter on click
//     likeCounter.addEventListener('click', function () {
//         let likes = parseInt(likeCounter.textContent);
//         likes++;
//         likeCounter.textContent = likes;
//         saveToLocalStorage(blogId + '-likes', likes);
//     });

//     // Initialize comments section from local storage or set to empty
//     commentsSection.textContent = getFromLocalStorage(blogId + '-comments') || '';

//     // Save comments to local storage on input
//     commentsSection.addEventListener('input', function () {
//         const comments = commentsSection.textContent;
//         saveToLocalStorage(blogId + '-comments', comments);
//     });

//     function saveToLocalStorage(key, value) {
//         localStorage.setItem(key, JSON.stringify(value));
//     }

//     function getFromLocalStorage(key) {
//         const value = localStorage.getItem(key);
//         return value ? JSON.parse(value) : null;
//     }
// });

        // Function to toggle between light and dark mode
        function toggleMode() {
            const body = document.body;
            body.classList.toggle("dark-mode");
            body.classList.toggle("light-mode");
        }
// let body=document.querySelectorAll("body");
// let but=document.querySelectorAll("button");
// let currentmode=dark;
// dark_mode();
// function dark_mode(){
//     body.style.backgroundcolor="black";
//     body.style.color="white";
//     currentmode=white;
// }
// function light_mode(){
//     body.backgroundcolor="white";
//     body.color="black";
//     currentmode=dark;
// }
// but.eventListener("click",()=>{
//     if(currentmode==dark){
//         currentmode=white;
//         light_mode();
//     }
//     else{
//         currentmode=dark;
//         dark_mode();
//     }
// })

