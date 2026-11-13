// JavaScript
import {LeafletMap, TileLayer, Marker} from 'leaflet';
const map = new LeafletMap('map').setView([33.67345752177457, 130.44140661378802], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = new Marker([[33.67345752177457, 130.44140661378802]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
