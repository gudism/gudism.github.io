// Initialize the map centered on the Mayan Theatre
const map = L.map('map').setView([34.040547, -118.259694], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map by OpenStreetMap'
}).addTo(map);

// Your artwork marker
const artworks = [
  {
    title: "Mayan Theatre – Site of the Work",
    lat: 34.040547,
    lng: -118.259694,
    description: `
      <strong>Sacred Facades, Profane Screens</strong><br>
      Digital collage, 2025<br><br>
      <a href="#essay" style="color:blue; text-decoration:underline;">View artwork and essay below</a>
    `
  }
];

// Add the marker to the map
artworks.forEach(art => {
  const marker = L.marker([art.lat, art.lng]).addTo(map);
  marker.on('click', () => {
    document.getElementById('art-info').innerHTML = `
      <h2>${art.title}</h2>
      <p>${art.description}</p>
    `;
  });
});
