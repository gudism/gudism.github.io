const map = L.map('map').setView([34.045, -118.255], 13); // Center between both sites

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map by OpenStreetMap contributors'
}).addTo(map);

// Mayan Theatre
const marker1 = L.marker([34.040547, -118.259694]).addTo(map);
marker1.bindPopup(`
  <strong>Sacred Facades, Profane Screens</strong><br>
  <a href="essay.html" target="_blank" style="color:blue;">View Full Essay & Artwork</a>
`);

// St. Vibiana’s Cathedral
const marker2 = L.marker([34.0503, -118.2456]).addTo(map);
marker2.bindPopup(`
  <strong>Saint Vibiana and Her Cathedral</strong><br>
  <a href="vibiana.html" target="_blank" style="color:blue;">View Full Essay & Artwork</a>
`);
