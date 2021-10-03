function onGeoGood(position) {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    console.log("You live in", lat, long);
}
function onGeoError() {
    alert("Cannot find the weather.")
}

navigator.geolocation.getCurrentPosition(onGeoGood, onGeoError);