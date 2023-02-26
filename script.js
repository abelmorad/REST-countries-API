// pull data from the REST Countries API and display
let countryImg = document.getElementById('countryImg');
let countryName = document.querySelector('.country-name');
const url = 'data.json';

window.addEventListener('load', requestCountryData);

function requestCountryData() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    xhr.onload = function () {
        if(xhr.status == 200) { 
            let countries = JSON.parse(this.response);
            countries.forEach(country => {
                const countryContainer = document.querySelector('.country-container');
                const countryFigure = document.createElement('figure');

                countryFigure.innerHTML = `<figure id="countryBox" class="country-box">
                <img id="countryImg" class="country-img" src="${country.flags.png}" alt="" srcset="">
                <div class="country-small-details">
                    <h2 id="countryName">${country.name}</h2>
                    <p id="countryPopulation">Population: ${country.population}</p>
                    <p id="countryRegion">Region: ${country.region} </p>
                    <p id="countryCapital">Capital: ${country.capital} </p>
                </div>
            </figure>`;
            // console.log(country.region);
            countryContainer.appendChild(countryFigure);
            })
        }
    }
    xhr.send();
}
// region filter
function selectedRegion() {
    const regionValue =  document.getElementById('regionFilter').value;
    const regionAsia = ['asia'];
    const countryBox = document.querySelectorAll('.country-box');
    
    countryBox.forEach(region => {
        if(regionAsia.includes(regionValue)) {
            if(region.classList.contains(regionValue)) {
                region.style.display = 'grid';
            } else {
                region.style.display = 'grid';
            }
        } else {
            region.style.display = 'grid';
        }
    })
} 


// dark mode & light mode
const colorMode  = document.body;
const headerMode = document.getElementById('header');
const searchBtn = document.getElementById('searchBtn');
const searchImg = document.getElementById('searchImg');
const searchFieldMode = document.getElementById('searchBar');
// const countryBoxMode = document.getElementById('countryBox');
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
    // countryBoxMode.classList.toggle('country-box-dark');
    
    // Replaces text when toggled
    if (colorMode.classList.contains('dark-mode')) {
        colorToggle.textContent = ' Light Mode';
    } else {
        colorToggle.textContent = ' Dark Mode';
    }
}

