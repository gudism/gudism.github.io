const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Enhanced neon green glow effect
tileLayer.getContainer().style.filter = `
  hue-rotate(95deg)     /* Turn grays into green */
  saturate(8)           /* Intensify color */
  brightness(2.2)       /* Make lines stand out more */
  contrast(2.5)         /* Sharpen features */
  drop-shadow(0 0 3px #00ff66)
  drop-shadow(0 0 6px #00ff66)
  drop-shadow(0 0 9px #00ff66)
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
