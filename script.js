const map = L.map('map').setView([34.040547, -118.259694], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map by OpenStreetMap'
}).addTo(map);

const marker = L.marker([34.040547, -118.259694]).addTo(map);

marker.bindPopup(`
  <strong>Sacred Facades, Profane Screens</strong><br>
  <a href="essay.html" target="_blank" style="color:blue;">View Full Essay & Artwork</a>
`);
