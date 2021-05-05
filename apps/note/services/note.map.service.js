import {utilService} from '../../../services/util-service.js'
export const mapService = {getLocationByVal,setLocation};
var gMap;
let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let labelIndex = 0;
let gMarker;


function setLocation(lnglat, locationName,mapId) {
    const location = {
        id: utilService.makeId(), name: locationName, lat: lnglat.lat, lng: lnglat.lng
    }
    initMap(location.lat, location.lng,mapId);
}

function initMap(lat, lng,mapId) {
    return _connectGoogleApi()
        .then((res) => {
            gMap = new google.maps.Map(
                document.querySelector(`#${mapId}`), {
                center: { lat, lng },
                zoom: 15
            })
            addMarker(gMap.center);
            return gMap;
        })
}


function addMarker(loc) {
    var marker = new google.maps.Marker({
        id: utilService.makeId(),
        labels: labels[labelIndex++ % labels.length],
        position: loc,
        map: gMap
        // title: 'Hello World!'
    });
    if (gMarker) removeMarker(gMarker);
    gMarker = marker;
    return marker;
}

function removeMarker(marker) {
    marker.setMap(null);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = ' AIzaSyAJxEq1dGkLrZA5cB3DKdS1-OgI5LDRxRE';
    //TODO: Enter your API Key
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&region=ISR&language=EN`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}

function getLocationByVal(location) {
    const API_KEY = ' AIzaSyAJxEq1dGkLrZA5cB3DKdS1-OgI5LDRxRE';
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?${location}&key=${API_KEY}&region=ISR&language=EN`)
        .then((res) => {
            console.log(res)
            return res.data.results;
        })
        .catch((err) => {
            Swal.fire(
                'We sorry but we could not get it for you right now',
                'please try again later',
                'error'
            )
            return err;
        })
}