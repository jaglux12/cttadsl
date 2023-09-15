const $template = document.querySelector("#template").content,
            $templateRow = $template.querySelector("#templateRow"),
            $templateRow2 = $template.querySelector("#templateRow2"),
            $main = document.querySelector("#main-section"),
            $fragmento = document.createDocumentFragment(),
            $fragmento2 = document.createDocumentFragment(),
            $search = document.querySelector("#search"),
            $bSearch = document.querySelector("#bSearch"),
            $sTipo = document.querySelector("#lSearch")

function setState(value){
    let result = 0
    if(value == "1"){
        result = "Usado"
    }
    if(value == "2"){
        result = "Dañado"
    }
    if(value == "0"){
        result = "Libre"
    }
    return result
}

function setBaja(value){
    let result = false
    if(value.includes("baja")){
        result = true
    }
    return result
}

function addRows(lineaTexto){
    let nPlaca = lineaTexto.split(":")[1].trim(),
        modelo = lineaTexto.split("/")[0].trim(),
        nPuerto = lineaTexto.split("*")[1].trim(),
        estado = lineaTexto.split("|")[1],
        nCliente = lineaTexto.split("#")[1].trim(),
        info = lineaTexto.split("-")[1]


    $templateRow.querySelector(".modelo").textContent = modelo
    $templateRow.querySelector(".nPlaca").textContent = nPlaca
    $templateRow.querySelector(".nPuerto").textContent = nPuerto
    $templateRow.querySelector(".estado").textContent = setState(estado)
    $templateRow.querySelector(".nCliente").textContent = nCliente
    $templateRow.querySelector(".info").textContent = info

    $templateRow.dataset.id = nCliente
    $templateRow.dataset.info = info != undefined ? info.toLowerCase():""

    let $clone = document.importNode($templateRow,true)
    if(setBaja(lineaTexto)){
        $clone.classList.add("text-white")
    }
    $fragmento.appendChild($clone)
    document.querySelector(".tBody").appendChild($fragmento)
}

function addRows2(lineaTexto){
    let modelo = lineaTexto.split("/")[0].trim(),
        nPuerto = lineaTexto.split(":")[1].trim(),
        estado = lineaTexto.split("|")[1],
        nCliente = lineaTexto.split("#")[1].trim(),
        info = lineaTexto.split("-")[2]


    $templateRow2.querySelector(".modelo").textContent = modelo
    $templateRow2.querySelector(".nPuerto").textContent = nPuerto
    $templateRow2.querySelector(".estado").textContent = setState(estado)
    $templateRow2.querySelector(".nCliente").textContent = nCliente
    $templateRow2.querySelector(".info").textContent = info

    

    $templateRow2.dataset.id = nCliente
    $templateRow2.dataset.info = info != undefined ? info.toLowerCase():""

    let $clone = document.importNode($templateRow2,true)
    if(setBaja(lineaTexto)){
        $clone.classList.add("text-white")
    }
    $fragmento2.appendChild($clone)
    document.querySelector(".tBody2").appendChild($fragmento2)
}

function searchItems(){
    if($sTipo.value == "NºCliente"){
        let registros = document.querySelectorAll(".tBody *")
    registros.forEach(element => {
        if(element.dataset.id != " " && element.dataset.id != undefined){
            if(element.dataset.id.startsWith($search.value)){
                element.classList.remove("filterNone")
            }else{
                element.classList.add("filterNone")
            }
        }
    })

    let registros2 = document.querySelectorAll(".tBody2 *")
    registros2.forEach(element => {
        if(element.dataset.id != " " && element.dataset.id != undefined){
            if(element.dataset.id.startsWith($search.value)){
                element.classList.remove("filterNone")
            }else{
                element.classList.add("filterNone")
            }
        }
    })
    }else{
        
        let registros = document.querySelectorAll(".tBody *")
    registros.forEach(element => {
        if(element.dataset.info != " " && element.dataset.info != undefined){
            if(element.dataset.info.includes($search.value.toLowerCase())){
                element.classList.remove("filterNone")
            }else{
                element.classList.add("filterNone")
            }
        }
    })

    let registros2 = document.querySelectorAll(".tBody2 *")
    registros2.forEach(element => {
        if(element.dataset.info != " " && element.dataset.info != undefined){
            if(element.dataset.info.includes($search.value.toLowerCase())){
                element.classList.remove("filterNone")
            }else{
                element.classList.add("filterNone")
            }
        }
    })
    }
}



        document.addEventListener("DOMContentLoaded", async event => {
            await fetch("data1.txt") 
            .then(res => res.text())
            .then(content => {
                let lines = content.split(/\n/);
                lines.forEach(line => {
                    if(line != ""){
                        addRows(line)
                    }else{

                    }
                });
                
            })

            await fetch("data2.txt") 
            .then(res => res.text())
            .then(content => {
                let lines = content.split(/\n/);
                lines.forEach(line => {
                    if(line != ""){
                        addRows2(line)
                    }else{
                        
                    }
                });
                
            })

        });


        document.addEventListener("click", event => {
            if(event.target.matches("#bBuscar")){
                searchItems()
            }
        })

        document.addEventListener("keypress", event =>{
            if(event.target.matches("#search") && event.key === "Enter"){
                searchItems()
            }
        })



        