const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWF5dmFsYS0xIiwiYSI6ImNsZmR3ODJkeDNvbXIzb3IwMGU0Zm8wbm8ifQ.l951TiL_PaQoMzd_7BaPhw';



navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true, })

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation(){
    setupMap([-2.24,53.48])
}

function setupMap(centerPosition){
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: centerPosition,
        zoom: 15, // starting zoom
    });


    const navigationControls = new mapboxgl.NavigationControl()
    map.addControl(navigationControls)


const directionControls =  new MapboxDirections({
accessToken: MAPBOX_ACCESS_TOKEN
})
map.addControl(directionControls, 'top-left')

}