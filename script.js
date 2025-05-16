const map = L.map('map').setView([34.045, -118.255], 13);

// Glowing green map tiles
const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

tileLayer.getContainer().style.filter = `
  brightness(1.8)
  contrast(2)
  hue-rotate(90deg)
  saturate(5)
`;

// Marker locations
const locations = [
  {
    title: "Sacred Facades, Profane Screens",
    lat: 34.040547,
    lng: -118.259694,
    url: "essay.html"
  },
  {
    title: "Saint Vibiana and Her Cathedral",
    lat: 34.0503,
    lng: -118.2456,
    url: "vibiana.html"
  }
];

locations.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lng]).addTo(map);
  marker.bindPopup(`
    <strong>${loc.title}</strong><br>
    <a href="${loc.url}" target="_blank" style="color:#00ff66;">View Full Essay & Artwork</a>
  `);
});
