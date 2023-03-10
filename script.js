// api ajax request
window.addEventListener('load', requestCountryData);

function requestCountryData() {
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    xhr.onload = function () {
        if(xhr.status == 200) { 
            let countries = JSON.parse(this.response);
            data = countries.map(country => {
                // for country template display 
                const countryCardContainer =  document.querySelector('[country-card-container]');
                const countryTemplate = document.querySelector('[country-template]');
                const countryCard = countryTemplate.content.cloneNode(true).children[0];

                const countryNames = countryCard.querySelector('[country-name]');
                const countryCapital = countryCard.querySelector('[country-capital]');
                const countryFlag = countryCard.querySelector('[country-flag]');
                const countryPopulation = countryCard.querySelector('[country-population]');
                const countryRegion = countryCard.querySelector('[country-region]');
                
                countryFlag.src = country.flags.png;
                countryPopulation.textContent = country.population;
                countryNames.textContent = country.name;
                countryRegion.textContent = country.region;
                countryCapital.textContent = country.capital;

                countryCardContainer.appendChild(countryCard);
                    
                return {
                    name: country.name,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flags: country.flags.png,
                    element: countryCard
                }
            })
        }
    }
    xhr.send();
}
// dark mode & light mode
const colorMode  = document.body;
const headerMode = document.getElementById('header');
const searchBtn = document.getElementById('searchBtn');
const searchImg = document.getElementById('searchImg');
const searchFieldMode = document.getElementById('searchBar');
const regionFilter = document.getElementById('regionFilter');
const colorModeBtn = document.querySelector('.fa-regular');
const colorToggle = document.querySelector('.color-toggle');

colorModeBtn.addEventListener('click', colorChange);

function colorChange() {
    colorMode.classList.toggle('dark-mode');
    headerMode.classList.toggle('header-dark');
    searchFieldMode.classList.toggle('search-field-dark');
    searchBtn.classList.toggle('search-btn-dark');
    searchImg.classList.toggle('fa-magnifying-glass-dark');
    regionFilter.classList.toggle('region-filter-dark');
    
    // Replaces text when toggled
    if (colorMode.classList.contains('dark-mode')) {
        colorToggle.textContent = ' Light Mode';
    } else {
        colorToggle.textContent = ' Dark Mode';
    }
}

// search filter by country
let data = [];
const searchInput = document.querySelector('[data-search]');
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    data.forEach(country => {
        const isVisible = 
        country.name.toLowerCase().includes(value);
        country.element.classList.toggle('hide-card', !isVisible);
    })
});
//filter by region
const regionInput = document.querySelector('[region-input]');
regionInput.addEventListener('change', () => {
    const regionFilterValue = document.getElementById('regionFilter').value;
    
    data.forEach(country => {
        const isVisible = 
        country.region.toLowerCase().includes(regionFilterValue);
        country.element.classList.toggle('hide-card',!isVisible);

        if (regionFilterValue === "all") {
            country.element.classList.remove('hide-card');
        } else {
            isVisible;
        }
    })
});
// DETAILED COUNTRY INFORMATION INFO PAGE 
//  const infoContainer = document.querySelector('more-info-container');
//  const infoTemplate = document.querySelector('[info-template]');
//  const infos = infoTemplate.content.cloneNode(true).children[0];

//  const infoCountry = document.querySelector('[info-country]');
//  const infoRegion = document.querySelector('[info-region]');
//  const infoCapital = document.querySelector('[info-capital]');
//  const infoPopulation = document.querySelector('[info-population]');
//  const infoFlag = document.querySelector('[info-flag]');
//  const infoLang = document.querySelector('[info-languages]');
//  const infoCurr = document.querySelector('[info-currency]');
//  const infoSub = document.querySelector('[info-sub-region]');
//  const infoNative = document.querySelector('[info-native-name]');
//  const infoDomain = document.querySelector('[info-top-lvl-domain]');

//  infoFlag.src = country.flags.png;
//  infoCountry.textContent = country.name;
 
 
// infoContainer.appendChild(infos);
