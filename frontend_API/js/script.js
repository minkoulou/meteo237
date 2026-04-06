const input    = document.getElementById("Search");
const button   = document.getElementById("btn");
const icone    = document.getElementById("icon");
const hamburger  = document.getElementById("hamburger");
const menuMobile = document.getElementById("menu-mobile");
 
// ============================================
// FONCTION PRINCIPALE — recherche de ville
// ============================================
function rechercherville() {
    const ville = input.value.trim();
 
    if (ville === "") {
        alert("Veuillez entrer une ville !");
        return;
    }

    // redirection vers la page d'affichage
    window.location.href = `./html/affichage.html?ville=${encodeURIComponent(ville)}`;
}
 
// ============================================
// ÉVÉNEMENTS — recherche
// ============================================
 
// clic sur le bouton Search
button.addEventListener("click", () => {
    rechercherville();
});
 
// touche Entrée dans l'input
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {   // ✅ e.key et non e.keypress
        rechercherville();
    }
});
 
// clic sur l'icône de recherche
icone.addEventListener("click", () => {
    rechercherville();
});
 
// ============================================
// HAMBURGER MENU
// ============================================
 
hamburger.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
});
 
// fermer si clic en dehors
document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !menuMobile.contains(e.target)) {
        menuMobile.classList.add("hidden");
    }
});
 
// fermer si redimensionnement vers desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
        menuMobile.classList.add("hidden");
    }
});