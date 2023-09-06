const $button_theme = document.querySelector("#button-theme")
const default_state = false

document.addEventListener("click", event => {
    if(event.target == $button_theme){
        
        if(event.target.checked === true){
            localStorage.theme = "dark"
            document.documentElement.classList.add("dark")
        }else{
            localStorage.theme = "light"
            document.documentElement.classList.remove("dark")
        }

    }
})

document.addEventListener("DOMContentLoaded",event => {
    if(localStorage.theme === "dark"){
        $button_theme.checked = true
        document.documentElement.classList.add("dark")
    }else{
        $button_theme.checked = false
        document.documentElement.classList.remove("light")
    }
})


