const $template = document.querySelector("#template-product").content,
        $main = document.querySelector("#main-section"),
        $fragmento = document.createDocumentFragment()

const getProducts = async () => {
    try {
        const dataAxios = await axios("equipment.json"),
                dataJson = await dataAxios.data 
        
        dataJson.forEach(element => {
            $template.querySelector(".brand").textContent = element.brand
            $template.querySelector(".brand").dataset.brand = element.brand

            $template.querySelector(".model").textContent = element.model
            $template.querySelector(".model").dataset.model = element.model

            $template.querySelector(".ip").textContent = element.ip
            $template.querySelector(".ip").dataset = element.ip

            $template.querySelector(".description").textContent = element.description
            $template.querySelector(".description").dataset.description = element.description

            $template.querySelector(".location").textContent = element.location
            $template.querySelector(".location").dataset.location = element.location

            let $clone = document.importNode($template,true)
            
            $fragmento.appendChild($clone)
        })

        document.querySelector("main").appendChild($fragmento)

    } catch (error) {
        alert(error)
    }   
}

document.addEventListener("DOMContentLoaded",getProducts)


