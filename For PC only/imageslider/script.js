let slides = document.getElementsByClassName("slide");
var flag = 0;
imageShowOf(flag);

let inter = setInterval(imageShowOf, 2000);

// function stopInterval() {
//     clearInterval(interval);
// }



function imageShowOf(num = 1) {
    flag = flag + num;
    if (flag < 0) {
        flag = slides.length - 1;
    }
    if (flag > slides.length - 1) {
        flag = 0;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // all will off
    }
    slides[flag].style.display = "block"; // particular 1 will be on
    // console.log(flag);
    let pointer = document.getElementsByClassName("pointer");
    for (let i = 0; i < pointer.length; i++) {
        pointer[i].addEventListener("click", function() {
            clearInterval(inter);
        });
    }

}
