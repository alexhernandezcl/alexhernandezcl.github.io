document.querySelector("button#btnLogin").addEventListener("click", e=>{
    console.log("Do the Login");
    var uname = document.getElementById("user").value;
    if(uname===""){
        alert("Debe ingresar credenciales");
    } else {
        localStorage.setItem("brider_uname", uname);
        window.location = "home.html"
    }
})