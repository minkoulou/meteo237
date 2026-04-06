// ✅ Plus de console.log(data) ici en dehors de la fonction

const apiKey = "d295f78de81c66bdaa234a56334cf6cf";
const params = new URLSearchParams(window.location.search);
const city = params.get("ville"); // ✅ "ville" en string

async function getWeather() {
    if (!city) {
        alert("Aucune ville fournie !");
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // ici c'est correct

        if (data.cod != 200) {
            alert("Ville non trouvée ❌");
            return;
        }

        document.getElementById("icone-meteo").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


        document.getElementById("city").innerHTML = data.name + ", " + data.sys.country;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("description").innerHTML = data.weather[0].description;

        if (data.weather[0].description === "nuageux" || data.weather[0].description === "partiellement nuageux") {
            document.body.style.backgroundImage = 'url("../image/nuage.jpeg")'
            document.body.style.backgroundPosition = 'center'
            document.body.style.backgroundAttachmen = 'fixed';
            document.body.style.backgroundRepeat = 'no-repeat'
        }else if(data.weather[0].description === "orage"){
              document.body.style.backgroundImage = 'url("../image/orage.jpeg")'
            document.body.style.backgroundPosition = 'cneter'
            document.body.style.backgroundAttachmen = 'fixed';
            document.body.style.backgroundRepeat = 'no-repeat'
        }else if(data.weather[0].description === "pluie"){
              document.body.style.backgroundImage = 'url("../image/pluie.jpeg")'
            document.body.style.backgroundPosition = 'cneter'
            document.body.style.backgroundAttachmen = 'fixed';
            document.body.style.backgroundRepeat = 'no-repeat'
        }

        // affichage correct avec labels
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
        document.getElementById("pression").innerHTML = data.main.pressure + " hPa";

        // Lever du soleil dynamique
        const sunrise = new Date(data.sys.sunrise * 1000)
            .toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
        document.getElementById("sunrise").innerHTML = sunrise;

    } catch (error) {
        console.error(error);
        alert("Erreur lors du chargement ❌");
    }
}

getWeather();
const menuMobile = document.getElementById("menu-mobile");
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