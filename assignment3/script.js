// variables
const key = '32230c2e989a69f56f5c65ce95c9ae84'
const container = document.querySelector('.container')
const button = document.querySelector('button')
const input = document.querySelector('input')


// functions
const geolocation = (city) => `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`

const weather = async (lat, lon, city, state, country) => {
    const climate = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    const finalclimate = await climate.json()
    // console.log(finalclimate)
    const temp = ((finalclimate.main.temp) - 273.15).toFixed(0)
    const mintemp = ((finalclimate.main.temp_min) - 273.15).toFixed(0)
    const maxtemp = ((finalclimate.main.temp_max) - 273.15).toFixed(0)
    const weather = finalclimate.weather[0].main
    const descrip = finalclimate.weather[0].description
    const windspeed = ((0.5144444 * (finalclimate.wind.speed)) * 3.6).toFixed(0)
    const humidity = finalclimate.main.humidity
    const visibility = finalclimate.visibility / 1000
    const div = document.createElement('div')
    div.innerHTML = generatecard(city, state, country, temp, mintemp, maxtemp, weather, descrip, windspeed, humidity, visibility)
    container.appendChild(div)

}

const generatecard = (city, state, country, temp, mintemp, maxtemp, weather, descrip, windspeed, humidity, visibility) =>
    `<div class="card m-2 bg-purple-500 opacity-50 w-76 flex flex-col items-center p-2">
            <div class="city text-white italic font-serif text-3xl">${city}</div>
            <div class="text-lg text-white italic font-serif mt-1">${state} ${country}</div>
            <div class="temp text-white font-serif italic mt-8 text-2xl">
                <span class="val text-2xl">${temp}</span>&degC
            </div>
            <div class="mm text-white italic flex">
                <div class="mintemp  mx-6">
                    Min:
                    <span class="min">${mintemp}</span>&degC
                </div>
                <div class="maxtemp  mx-6">
                    Max:
                    <span class="max">${maxtemp}</span>&degC
                </div>
            </div>
            <div class="Weather text-4xl text-white italic mt-6">
                <div class="main text-3xl flex justify-center">${weather}</div>
                <div class="description flex justify-center text-2xl">${descrip}</div>
            </div>
            <div class="details text-white text-xl italic mt-8 ">
                <div class="wind"> <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M564.352484 386.978714H71.006413a22.378321 22.378321 0 1 1 0-44.756642h493.346071c63.074896 0 114.39478-51.319884 114.39478-114.397977S627.42738 113.426118 564.352484 113.426118a22.378321 22.378321 0 1 1 0-44.756642c87.754987 0 159.151422 71.396435 159.151422 159.154619s-71.396435 159.154619-159.151422 159.154619z" fill="#1f07f2"></path><path d="M815.916781 498.790397h-493.346071a22.378321 22.378321 0 1 1 0-44.756642h493.346071c63.078093 0 114.397977-51.319884 114.397977-114.404371 0-63.078093-51.319884-114.397977-114.397977-114.397977a22.378321 22.378321 0 1 1 0-44.756642c87.758184 0 159.154619 71.396435 159.154619 159.154619 0.003197 87.761381-71.393238 159.161013-159.154619 159.161013zM704.111492 954.051762a22.378321 22.378321 0 1 1 0-44.756642c63.078093 0 114.397977-51.319884 114.397977-114.401174 0-63.078093-51.319884-114.397977-114.397977-114.397976H210.762224a22.378321 22.378321 0 1 1 0-44.756642h493.346071c87.758184 0 159.154619 71.396435 159.154619 159.154618s-71.393238 159.157816-159.151422 159.157816z" fill="#1f07f2"></path><path d="M572.226456 313.449945H78.880385a22.378321 22.378321 0 1 1 0-44.756642h493.346071a22.378321 22.378321 0 1 1 0 44.756642z" fill="#06b4fe"></path><path d="M815.191084 588.383603h-493.346071a22.378321 22.378321 0 1 1 0-44.756642h493.346071a22.378321 22.378321 0 1 1 0 44.756642z" fill="#f50569"></path></g></svg>Wind-speed:
                    <span class="ws">${windspeed}kmph</span>
                </div>
                <div class="humidity"> <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#1d37b9;}  </style> <g> <path class="st0" d="M391.703,195.531l-0.203-0.344l-0.266-0.375L256,0L120.516,195.156l-0.234,0.375 c-27.172,42.719-45.609,92.109-45.703,141.75c-0.016,21.328,3.5,42.688,11.438,63.063c7.906,20.375,20.281,39.688,37.313,56.719 h0.016C159.906,493.641,208.063,512.031,256,512c47.938,0.031,96.078-18.359,132.656-54.938l-15.859,15.859l15.859-15.859 c17.047-17.031,29.422-36.344,37.328-56.703c7.938-20.391,11.438-41.75,11.438-63.063 C437.328,287.641,418.891,238.25,391.703,195.531z M384.141,384.078c-5.719,14.672-14.453,28.438-27.219,41.234l15.875-15.875 l-15.875,15.875C329,453.219,292.609,467.078,256,467.109c-36.609-0.031-73-13.891-100.922-41.797l0,0 c-12.781-12.797-21.5-26.563-27.234-41.25c-5.703-14.672-8.375-30.344-8.375-46.781c-0.109-38.078,14.859-80.328,38.531-117.375 l98-141.188l98.031,141.219c23.641,37.047,38.594,79.281,38.5,117.359C392.531,353.734,389.859,369.406,384.141,384.078z"></path> <path class="st0" d="M205.328,237.781c-23.422,26.031-60.719,94.547-37.297,142.25c26.156,53.281,61.75,21.609,45.109-12.125 C181.047,302.844,205.328,237.781,205.328,237.781z"></path> </g> </g></svg>Humidity:
                    <span class="humi">${humidity}</span>
                </div>
                <div class="visibility"><svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>eye</title> <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path> </g></svg>Visibility:
                    <span class="visi">${visibility}km</span>
                </div>
            </div>
        </div>`

const geoloc = async (city) => {
    input.value = ''
    const loc = await fetch(geolocation(city))
    const finalloc = await loc.json()
    container.innerHTML = ''
    // console.log(finalloc)
    finalloc.forEach(element => {
        const lat = element.lat
        const lon = element.lon
        const name = element.name
        const state = element.state
        const country = element.country
        weather(lat, lon, name, state, country)
    });
}


// main
button.addEventListener('click', () => {
    console.log(input.value)
    geoloc(input.value)
})
navigator.geolocation.getCurrentPosition(pos => {
    container.innerHTML = ''
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    //   console.log(lat)  
    //   console.log(lon)
    weather(lat, lon, 'current location', '-', '-')
})


