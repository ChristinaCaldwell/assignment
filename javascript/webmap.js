
//initalise map
var map = L.map('map',{
    center: [53.347926, -6.268621],
    zoom: 15,
    minzoom: 6,
});
//add ESRI basemap
L.esri.basemapLayer('Gray').addTo(map);

//add wedding venues
L.marker([53.351350, -6.267763],{icon:L.icon.mapkey({icon:'restaurant',size:30,color:'#FFFFFF',background:'#209CEE'})}).addTo(map).bindPopup("The Chocolate Factory").openPopup();

L.marker([53.344126,-6.266583],{icon:L.icon.mapkey({icon:'tram_stop',size:30,color:'#FFFFFF',background:'#FFDD57'})}).addTo(map).bindPopup("Tax Rank");

L.marker([53.343817,-6.267228],{icon:L.icon.mapkey({icon:'heart',size:30,color:'#FFFFFF',background:'#FF3860'})}).addTo(map).bindPopup("City Hall");

//hotels
L.marker([53.354247, -6.266641],{icon:L.icon.mapkey({icon:'hotel_alt',size:30,color:'#FFFFFF',background:'#00D1B2'})}).addTo(map).bindPopup("The Maldron Hotel");
L.marker([53.351536, -6.263042],{icon:L.icon.mapkey({icon:'hotel_alt',size:30,color:'#FFFFFF',background:'#00D1B2'})}).addTo(map).bindPopup("Jury's Hotel");
L.marker([53.345450, -6.258799],{icon:L.icon.mapkey({icon:'hotel_alt',size:30,color:'#FFFFFF',background:'#00D1B2'})}).addTo(map).bindPopup("The Westin Hotel");
L.marker([53.340850, -6.268249],{icon:L.icon.mapkey({icon:'hotel_alt',size:30,color:'#FFFFFF',background:'#00D1B2'})}).addTo(map).bindPopup("The Radisson Blue Hotel");

//B&Bs and Guesthouses
L.marker([53.361025, -6.290067],{icon:L.icon.mapkey({icon:'hotel',size:30,color:'#FFFFFF',background:'#3273DC'})}).addTo(map).bindPopup("Sycamore House B&B");
L.marker([53.367063, -6.255691],{icon:L.icon.mapkey({icon:'hotel',size:30,color:'#FFFFFF',background:'#3273DC'})}).addTo(map).bindPopup("Kennedys Drumcondra B&B");
L.marker([53.3420645,-6.2651072],{icon:L.icon.mapkey({icon:'hotel',size:30,color:'#FFFFFF',background:'#3273DC'})}).addTo(map).bindPopup("Grafton Guesthouse");