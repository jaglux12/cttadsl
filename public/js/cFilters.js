const $clearFilters = document.querySelector("#cFilters")
const $fBrand = document.querySelector("#fBrand"),
        $fLocation = document.querySelector("#fLocation")

document.addEventListener("click", event =>{
    if(event.target.matches("#cFilters") || event.target.matches("#cFilters *")){
        $fBrand.value = "-1"
        $fLocation.value = "-1"
        document.querySelectorAll(".equipmentItem").forEach( element => {
            element.classList.remove("filterNone")
        })
    }
})

document.addEventListener("DOMContentLoaded", event => {
    $fBrand.value = "-1"
    $fLocation.value = "-1"
})

document.addEventListener("click", event => {

    if(event.target.matches("#fBrand *")){
            document.querySelectorAll(".equipmentItem").forEach( element => {
                element.querySelector(".brand").dataset.brand.includes(event.target.value) ?
                element.classList.remove("filterNone")
                : element.classList.add("filterNone")
            })
    }

    if(event.target.matches("#fLocation *")){
        if($fBrand.value != ""){
            document.querySelectorAll(".equipmentItem").forEach( element => {
                if(element.querySelector(".brand").dataset.brand.includes($fBrand.value) && element.querySelector(".location").dataset.location.includes(event.target.value)){
                    element.classList.remove("filterNone")
                }else{
                    element.classList.add("filterNone")
                }
            })
        }else{
            document.querySelectorAll(".equipmentItem").forEach( element => {
                if(element.querySelector(".location").dataset.location.includes(event.target.value)){
                    element.classList.remove("filterNone")
                }else{
                    element.classList.add("filterNone")
                }
            })
        }
    }

})