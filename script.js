setTimeout(()=>{
    document.getElementById("loading").style.display="none";
},15000)

let home=document.getElementById("home");
let about=document.getElementById("about");
let contact=document.getElementById("contact");
document.getElementById("Home").addEventListener("click",()=>{
    home.style.display="inline-block";
    about.style.display="none";
    contact.style.display="none";
})
document.getElementById("logo").addEventListener("click",()=>{
    home.style.display="inline-block";
    about.style.display="none";
    contact.style.display="none";
})
document.getElementById("start").addEventListener("click",()=>{
    home.style.display="none";
    about.style.display="none";
    contact.style.display="inline-block";
})
document.getElementById("About").addEventListener("click",()=>{
    home.style.display="none";
    about.style.display="inline-block";
    contact.style.display="none";
})
document.getElementById("Contact").addEventListener("click",()=>{
    home.style.display="none";
    about.style.display="none";
    contact.style.display="inline-block";
})
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent.");
  this.reset(); // Clear form
});
