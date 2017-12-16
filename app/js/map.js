var mymap = L.map("Map",{scrollWheelZoom:!1}).setView([51.473654,46.144265],16);
L.tileLayer("https://api.mapbox.com/styles/v1/kawaiigoth/civl8debz00mg2kpagk9a8xtr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F3YWlpZ290aCIsImEiOiJjaXZsOGExbWswMDhyMnpxa2h0aGI4M3BqIn0.2IvOi4m9APXINm9BGyjZjg", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var t=L.icon({
    iconUrl:"img/map/mark.png",
    shadowUrl:"img/map/mark-shadow.png",
    iconSize:[68,95],
    shadowSize:[70,64],
    iconAnchor:[34,95],
    shadowAnchor:[35,62],
    popupAnchor:[-3,-76]});

L.marker([51.473654,46.144265],{icon:t}).addTo(mymap);
