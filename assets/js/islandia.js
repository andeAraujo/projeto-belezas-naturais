document.querySelectorAll(".toggle-info").forEach(button => {
    button.addEventListener("click", () => {
        const extraInfo = button.previousElementSibling.querySelector(".extra-info")

        if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
            extraInfo.style.display = "inline"
            button.textContent = "Leia menos"
        } else {
            extraInfo.style.display = "none"
            button.textContent = "Leia mais"
        }
    })
})

document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", event => {
        const modal = document.getElementById("image-modal")
        const modalImage = document.getElementById("modal-image")
        const caption = document.getElementById("caption")

        modal.style.display = "flex"
        modalImage.src = event.target.src
        caption.textContent = event.target.alt
    })
})

document.querySelector(".modal .close").addEventListener("click", () => {
    document.getElementById("image-modal").style.display = "none"
})

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault() // IMpede o envio padrao do formulario
    
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    // valindando o email...
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.")
        return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, insira um e-mail válido.")
        return
    }

    alert("Feedback enviado com sucesso! Obrigado por compartilhar sua opinião.")
})

function scrollToMap(mapId) {
    const mapSection = document.getElementById(mapId);
    if (mapSection) {
        mapSection.scrollIntoView({ behavior: "smooth" });
    }
}