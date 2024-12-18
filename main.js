// Ma'lumot blokini olish
let infoContainer = document.getElementById("infoContainer");

// Funksiya: ma'lumotni ko'rsatish yoki yashirish
function toggleInfo() {
    if (infoContainer.style.display === "none" || infoContainer.style.display === "") {
        infoContainer.style.display = "block"; // Ma'lumotlarni ko'rsatish
    } else {
        infoContainer.style.display = "none"; // Ma'lumotlarni yashirish
    }
}


