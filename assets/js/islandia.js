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
