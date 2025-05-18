let divCardCountry = document.getElementById("card-country")
let loggedUser = JSON.stringify(localStorage.getItem("looggedUser"));
let righnavbar = document.getElementById("navbar-right")

function navbar() {
    if (loggedUser.id) {
        righnavbar.innerHTML = `
		<button onclick=()>{loggedUser.username}</button>
		<button onclick=(logout())>logout</button>
		
		`
    } else {
        `<button>SignIn</button>`
    }
}

function logout() {
    loggedUser.removeItem(loggedUser)
}




async function getData() {

    try {
        let url = "https://restcountries.com/v3.1/all";
        let response = await fetch(url);
        let data = await response.json()

        data.forEach(c => {
            //console.log(c)
            let commonName = document.createElement('h4')
            commonName.textContent = c.name.common


            let officialName = document.createElement('h3')
            officialName.textContent = c.name.official


            let populationNumber = document.createElement('p')
            populationNumber.textContent = c.population

            let img = document.createElement('img')
            img.src = c.flags.png

            let region = document.createElement('h4')
            region.textContent = c.region

            let languages = document.createElement('p')
            languages.textContent = c.languages

            let maps = document.createElement('a')
            maps.href = c.maps.googleMaps


            divCardCountry.appendChild(commonName)
            divCardCountry.appendChild(officialName)
            divCardCountry.appendChild(populationNumber)
            divCardCountry.appendChild(img)
            divCardCountry.appendChild(region)
            divCardCountry.appendChild(languages)
            divCardCountry.appendChild(maps)
        });
    } catch {
        console.log("error to get data")
    }

}
getData()