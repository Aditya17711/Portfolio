document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
const text = "Hi, I am Aditya " ;
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text[index];
        index++;
        setTimeout(typeEffect, 200); // Adjust speed
    }
}
typeEffect();
function explore()
{
document.getElementById("About_me_container").scrollIntoView({behavior:"smooth"}); 
// it moves to the about me section of the 
// page with a  scroll animation so that it looks nicer.


//window.location.hash="About_me_container";  //( if you directly want to jump to the about me section without any 
// animation. it works on all the modern browsers.)
}




/*document.querySelector("form").addEventListener("Send Message", function (event) {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;

    if (name.length < 3) {
        alert("Name should be at least 3 characters!");
        event.preventDefault();
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email!");
        event.preventDefault();
    }
});

*/