const map = L.map('research-map', { scrollWheelZoom: false }).setView([25, 95], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const places = [
  { name: 'Xi\'an, China', type: 'B.Eng., Northwestern Polytechnical University', year: '2015–2019', lat: 34.3416, lng: 108.9398 },
  { name: 'Nanjing, China', type: 'Ph.D., Southeast University; ICMMT / IMWS-AMP', year: '2019–Present', lat: 32.0603, lng: 118.7969 },
  { name: 'Xiamen, China', type: 'IEEE AP-CAP conference paper', year: '2022', lat: 24.4798, lng: 118.0894 },
  { name: 'Harbin, China', type: 'ICMMT conference paper', year: '2022', lat: 45.8038, lng: 126.5349 },
  { name: 'Ningbo, China', type: 'National Conference on Antennas', year: '2021', lat: 29.8683, lng: 121.5440 },
  { name: 'Bali, Indonesia', type: 'APMC conference papers; Best Student Paper Award', year: '2024', lat: -8.3405, lng: 115.0920 },
  { name: 'Ottawa, Canada', type: 'IEEE APS/URSI conference paper', year: '2025', lat: 45.4215, lng: -75.6972 },
  { name: 'Chiba, Japan', type: 'PIERS conference paper', year: '2025', lat: 35.6074, lng: 140.1065 }
];

const route = [];
places.forEach(p => {
  route.push([p.lat, p.lng]);
  L.circleMarker([p.lat, p.lng], { radius: 7, weight: 2, fillOpacity: 0.85 })
    .addTo(map)
    .bindPopup(`<strong>${p.name}</strong><br>${p.type}<br><em>${p.year}</em>`);
});
L.polyline(route, { weight: 2, opacity: 0.55, dashArray: '6, 8' }).addTo(map);
document.getElementById('year').textContent = new Date().getFullYear();
