const map = L.map('map').setView([34.040547, -118.259694], 14); // centered on Hill St

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map by OpenStreetMap'
}).addTo(map);

// Add your artworks here
const artworks = [
  {
    title: "Mina Gudis, Sacred Facades, Profane Screens: Pornography, Preservation, and the Erotic Afterlives of Los Angeles’ Historic Theatres, 2025. Digital collage.",
    lat: 34.040547,
    lng: -118.259694,
    description: "Abstract:
This paper examines the intertwined histories of architectural preservation and pornography in Los Angeles, using the Mayan Theatre as a focal case study. Originally commissioned by oil magnate Edward Doheny and designed by Mexican artist Francisco Cornejo in the Mayan Revival style, the theater was a lavish tribute to Mesoamerican aesthetics. In the 1970s, it entered a new life as an adult film venue under the ownership of Carlos Tobalina, reflecting a broader trend in which the porn industry repurposed historic performance spaces. Through analysis of media reports, preservation records, and firsthand accounts of venues such as the Tiki and Pussycat theaters, this paper argues that adult cinema played an unacknowledged role in conserving Los Angeles’s architectural heritage. This investigation also serves as a conceptual foundation for an original artwork that incorporates the Mayan Theatre’s facade and visual motifs from the poster of Tobalina’s Lady Dynamite. By positioning this creative work within its historical and cultural context, the paper demonstrates how the visual legacy of adult cinema continues to shape Los Angeles’s aesthetic and spatial memory.

Main Text:
In the heart of Downtown Los Angeles, the Mayan Theatre stands as an ornate relic of the city’s theatrical past. Completed in 1927 at the height of the Mayan Revival architectural movement, it was funded by oil tycoon Edward Doheny and sculpted by Mexican artist Francisco Cornejo. Its facade is crowded with iconographic motifs drawn from Mesoamerican architecture: sun gods, serpents, jaguars, and celestial symbols rendered in faux sandstone and painted in red, blue, and gold. The theater’s aesthetic vision was both an architectural experiment and a political fantasy, imagining a “true architecture of the Americas” at a moment when Los Angeles sought to position itself as a global cultural capital (Mejía 2024; Counter 2018).
Yet beneath this sacred styling lies another history, one equally tied to the identity of Los Angeles. In the late 1960s and through the 1980s, the Mayan became a hub for adult cinema under the stewardship of Carlos Tobalina, a prominent figure in the Los Angeles porn industry. This shift was not a deviation from the city’s trajectory but a logical extension of it. Across Los Angeles, dozens of once-grand theaters were preserved not through nonprofit conservancies or public funds but through their reinvention as pornographic venues. These theaters provided not only space but sanctuary, becoming havens for subcultural publics and urban outsiders. The same architecture that once staged Gershwin musicals now housed erotic fantasies, reaffirming the city’s theatrical identity in a newly transgressive form (Koester 2021; Hernandez 2023).
This evolution was not isolated. Adult cinemas such as the Pussycat, Tiki, and Cave Theatre became embedded in the urban fabric, stabilizing properties that might otherwise have faced demolition. While often derided as sites of moral decay, these theaters offered anonymity, affordability, and freedom at a time when public expressions of sexuality were increasingly monitored and suppressed. Before the term “adaptive reuse” gained popularity in the preservation world, the adult film industry had already enacted it, preserving the structural shells of Beaux Arts, Art Deco, and revivalist buildings even as the content inside veered into the illicit. Tobalina’s work at the Mayan, along with his conversion of other properties such as the X Theatre, reveals the layered relationship between pornography and the physical preservation of Los Angeles (Counter 2018; Popula 2021).
The Tiki Theater, the final remaining porn theater in Los Angeles, stands as a quiet epilogue. Tucked between discount shops and storefronts on Santa Monica Boulevard, the Tiki today functions as a space of stillness and anonymity. Patrons buy time, not necessarily to watch, but to be left alone. For some, it is a ritual space. For others, a shelter. While the images flicker on screen, what persists is the architecture itself—a low-lit monument that endures despite gentrification, real estate speculation, and the ubiquity of private digital screens (Hernandez 2023).
To examine these theaters is to confront the contradictions that animate Los Angeles. This is a city obsessed with surfaces but moved by what happens behind them. It is a place that dreams in cinematic color but survives in its shadows. The Mayan Theatre, with its sacred facade and profane history, embodies that contradiction. It is more than a building. It is a monument to the hidden forces that have helped shape the city’s visual culture, its erotic undercurrents, and its peculiar commitment to preservation through taboo.

Works Cited:
Counter, Bill. “Los Angeles Theatres: Mayan Theatre: History.” Los Angeles Theatres, 2018.
https://losangelestheatres.blogspot.com/2018/04/mayan-theatre.html
Hernandez, Angie Orellana. “Inside the Last Porn Theater in Los Angeles.” Los Angeles Times, December 5, 2023.
https://www.latimes.com/california/story/2023-12-05/last-porn-movie-theater-los-angeles-tiki
Koester, Megan. “The Last Dirty Picture Show.” Popula, July 5, 2021.
https://popula.com/2021/07/05/the-last-dirty-picture-show
Mejía, Paula. “Luchadores and Porn Kings: The Unlikely Survival of LA’s Mayan Masterpiece.” SFGate, December 18, 2024.
https://www.sfgate.com

"
  }
  // You can add more artworks here
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
