jQuery(window).scroll(function () {
    if(jQuery(window).scrollTop() > jQuery(window).height()/3){
    jQuery('.scrollToTop').toggleClass('showScrollTop', true);}
    else { jQuery('.scrollToTop').removeClass('showScrollTop');}
    });

//погода
const apiKey = '54125b5bf70ea26fa8f1343392f24dfd';
const city = 'Чернигов'; 
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

async function getWeather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
        
    document.getElementById('city').textContent = data.name + ", " + data.sys.country;
    document.getElementById('temperature').textContent = "Температура: " + data.main.temp + "°C";
    document.getElementById('weather-description').textContent = "Описание: " + data.weather[0].description;
    document.getElementById('wind-speed').textContent = "Скорость ветра: " + data.wind.speed + " км/час";
    document.getElementById('precipitation').textContent = "Влажность: " + data.main.humidity + "%";
            
    const weatherIcon = document.getElementById('weather-icon');
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconUrl);
}
getWeather();

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}
document.addEventListener('DOMContentLoaded', getWeather);

//вывод сообщения при нажатии на номер телефона
var phoneLink = document.getElementById("phoneLink");
phoneLink.addEventListener("click", function(event) {
    event.preventDefault();            
    alert("Свяжитесь с нами по нормеру +38 093 573 97 46!");
});

//переход на страницу для отправки письма
var emailLink = document.getElementById("emailLink");
emailLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./mailForm.html";
});

//карусель
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true
    });
  });

//часы
  function updateClockAndDate() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    clockElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
    dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
}
setInterval(updateClockAndDate, 1000);
updateClockAndDate();

//меню
const menuItems = document.querySelectorAll('ul#menu li');
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        menuItems.forEach((menuItem) => {
            menuItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});