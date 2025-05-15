const map = L.map('map').setView([34.0522, -118.2437], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map by OpenStreetMap'
}).addTo(map);

const artworks = [
  {
    title: "Sunset Over Skid Row",
    lat: 34.045,
    lng: -118.25,
    description: "Mixed media, 2023. A commentary on urban decay and resilience."
  },
  {
    title: "Hollywood Mirage",
    lat: 34.1,
    lng: -118.33,
    description: "Digital collage, 2024. The illusion of fame rendered in glitch textures."
  }
];

artworks.forEach(art => {
  const marker = L.marker([art.lat, art.lng]).addTo(map);
  marker.on('click', () => {
    document.getElementById('art-info').innerHTML = `
      <h2>${art.title}</h2>
      <p>${art.description}</p>
    `;
  });
});
