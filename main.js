var typed = new Typed(".text",{
    strings:['Fronted Developer', 'Student','IT Engineer'],
    typeSpeed:50 ,
    backSpeed:10,
    backDelay:500,
    loop:true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";

}

function closemenu(){
    sidemenu.style.right = "-200px";
    
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxpfHFjtYROrJES5oYcdD9aUUtWarCgdoLizmS6gP1c3qNfNqFpJhu3WOgUyfiMg7Xg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");

        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
            msg.innerHTML= "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML= ""
            },5000)
            form.reset()
        })
            .catch(error => console.error('Error!', error.message))
        })