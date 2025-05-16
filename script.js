const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// 💡 Electric green glow effect via CSS filter
tileLayer.getContainer().style.filter = `
  brightness(1.8)
  contrast(2)
  hue-rotate(90deg)
  saturate(5)
  `;



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
