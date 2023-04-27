const searchForm=document.querySelector('.search-location');
const cityValue=document.querySelector('.search-location input');
const cityName=document.querySelector('.city-name p');
const cardBody=document.querySelector('.card-body');

const spitOutCelsius=(kelvin)=>{
    celsius=Math.round(kelvin-273.15);
    return celsius;
}

updateWeatherApp=(city)=>{
    console.log(city);
    const imageName=city.weather[0].icon;
    const iconSrc=''
    cityName.textContent=city.name;
    cardBody.innerHTML=` <div class="card-mid row">
    <div class="col-8 text-center temp">
        <span>30&deg;C</span>
    </div>
    <div class="col-4 condition-temp">
        <p class="condition">${city.weather[0]}</p>
        <p class="temperature">${city.name.temp_max}&deg;C</p>
    </div>
</div>
<div class="icon-container card shadow">
    <img src="img/1489136024.svg" alt="">
</div>
<div class="card-bottom px-5 py-4 row">               
    <div class="col text-center1">
        <p>${city.name.temp_max}&deg;C</p>
        <span>Feels like</span>
    </div>
    <div class="col text-center2">
        <p>55%</p>
        <span>Humidity</span>
    </div>
</div>`;
   
}

                                                    //form event listenerrr
searchForm.addEventListener('submit',event=>{

    event.preventDefault();
    const citySearched=cityValue.nodeValue.trim();
    console.log(citySearched);
    searchForm.reset();

    requestCity(citySearched)
    .then((data)=>{
        updateWeatherApp(data);
    })
    .catch((error)=>{console.log(error) })

})