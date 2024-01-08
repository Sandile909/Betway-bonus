const eye = document.getElementById("eye")
const pass = document.getElementById("pass")
eye.onclick = () => {
    if (pass.getAttribute("type") === "text") {
        pass.setAttribute("type", "password")
        eye.classList.replace("fa-eye-slash", "fa-eye")
    } else {
        pass.setAttribute("type", "text")
        eye.classList.replace('fa-eye', 'fa-eye-slash')
    }
}