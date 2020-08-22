const places = ['norte', 'nordeste', 'centro-oeste', 'sudeste', 'sul'];

module.exports.getPlace = function getPlace(place) {

    if (!place) return 'placeNotFound';
    return places[places.indexOf(place.toLowerCase())];
}