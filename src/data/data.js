export const categories = [
  {
    id: 1,
    name: "Dwarf Planets",
    description: "Small celestial bodies that orbit the Sun.",
  },
  {
    id: 2,
    name: "Terrestrial Planets",
    description: "Planets with solid, rocky surfaces.",
  },
  {
    id: 3,
    name: "Gas Giants",
    description: "Large planets primarily composed of gases.",
  },
  {
    id: 4,
    name: "Ice Giants",
    description: "Planets composed mostly of ice and gas.",
  },


];


export const planets = [
  {
    id: 1,
    name: "Mercury",
    description: "The smallest planet in our solar system, closest to the Sun.",
    image: require("../image/planets/1.jpg"),
    categoryId: 1,
    diameter: "4,880 km",
    mass: "3.3011 x 10^23 kg",
    distanceFromSun: "57.9 million km",
    moons: 0,
    atmosphericComposition: "virtually none (very thin exosphere)",
    averageTemperature: "430°C",
    rotationPeriod: "58.6 days",
    orbitalPeriod: "88 days",
  },
  {
    id: 2,
    name: "Venus",
    description:
      "The second planet from the Sun, known for its scorching hot surface and thick atmosphere.",
    image: require("../image/planets/2.jpg"),
    categoryId: 1,
    diameter: "12,104 km",
    mass: "4.8675 x 10^24 kg",
    distanceFromSun: "108.2 million km",
    moons: 0,
    atmosphericComposition:
      "96.5% carbon dioxide, 3.5% nitrogen, trace amounts of other gases",
    averageTemperature: "465°C",
    rotationPeriod: "243 days",
    orbitalPeriod: "225 days",
  },
  {
    id: 3,
    name: "Earth",
    description:
      "The third planet from the Sun, known for its diverse ecosystems and the presence of liquid water.",
    image: require("../image/planets/3.jpg"),
    categoryId: 1,
    diameter: "12,742 km",
    mass: "5.972 x 10^24 kg",
    distanceFromSun: "149.6 million km",
    moons: 1,
    atmosphericComposition:
      "78% nitrogen, 21% oxygen, trace amounts of other gases",
    averageTemperature: "15°C",
    rotationPeriod: "24 hours",
    orbitalPeriod: "365.25 days",
  },
  {
    id: 4,
    name: "Mars",
    description:
      "The fourth planet from the Sun, often called the 'Red Planet' due to its reddish appearance.",
    image: require("../image/planets/4.jpg"),
    categoryId: 1,
    diameter: "6,779 km",
    mass: "6.4171 x 10^23 kg",
    distanceFromSun: "227.9 million km",
    moons: 2,
    atmosphericComposition:
      "95% carbon dioxide, 2.7% nitrogen, 1.6% argon, trace amounts of other gases",
    averageTemperature: "-80°C",
    rotationPeriod: "24.6 hours",
    orbitalPeriod: "687 days",
  },
  {
    id: 5,
    name: "Jupiter",
    description:
      "The largest planet in our solar system, characterized by its prominent bands of clouds and numerous moons.",
    image: require("../image/planets/5.jpg"),
    categoryId: 2,
    diameter: "139,822 km",
    mass: "1.8982 x 10^27 kg",
    distanceFromSun: "778.5 million km",
    moons: 79,
    atmosphericComposition:
      "89% hydrogen, 10% helium, trace amounts of other gases",
    averageTemperature: "-145°C",
    rotationPeriod: "9.9 hours",
    orbitalPeriod: "11.9 years",
  },
  {
    id: 6,
    name: "Saturn",
    description:
      "A gas giant with its distinctive ring system made up of icy particles.",
    image: require("../image/planets/6.jpg"),
    categoryId: 2,
    diameter: "116,464 km",
    mass: "5.6834 x 10^26 kg",
    distanceFromSun: "1.4 billion km",
    moons: 82,
    atmosphericComposition:
      "96% hydrogen, 3% helium, trace amounts of other gases",
    averageTemperature: "-178°C",
    rotationPeriod: "10.7 hours",
    orbitalPeriod: "29.5 years",
  },
  {
    id: 7,
    name: "Uranus",
    description:
      "An ice giant with a unique sideways rotation and a faint ring system.",
    image: require("../image/planets/7.jpg"),
    categoryId: 3,
    diameter: "50,724 km",
    mass: "8.6810 x 10^25 kg",
    distanceFromSun: "2.9 billion km",
    moons: 27,
    atmosphericComposition:
      "83% hydrogen, 15% helium, 2% methane, trace amounts of other gases",
    averageTemperature: "-224°C",
    rotationPeriod: "17.2 hours",
    orbitalPeriod: "84 years",
  },
  {
    id: 8,
    name: "Neptune",
    description: "An ice giant known for its deep blue color and strong winds.",
    image: require("../image/planets/8.jpg"),
    categoryId: 3,
    diameter: "49,244 km",
    mass: "1.02413 x 10^26 kg",
    distanceFromSun: "4.5 billion km",
    moons: 14,
    atmosphericComposition:
      "80% hydrogen, 19% helium, trace amounts of other gases",
    averageTemperature: "-214°C",
    rotationPeriod: "16.1 hours",
    orbitalPeriod: "165 years",
  },
  {
    id: 9,
    name: "Pluto",
    description:
      "A dwarf planet and a member of the Kuiper Belt, with a heart-shaped region on its surface.",
    image: require("../image/planets/9.jpg"),
    categoryId: 4,
    diameter: "2,377 km",
    mass: "1.303 x 10^22 kg",
    distanceFromSun: "5.9 billion km",
    moons: 5,
    atmosphericComposition: "thin nitrogen atmosphere with traces of methane",
    averageTemperature: "-225°C",
    rotationPeriod: "6.4 days",
    orbitalPeriod: "248 years",
  },
  {
    id: 10,
    name: "Eris",
    description:
      "A dwarf planet in the scattered disk region, larger than Pluto.",
    image: require("../image/planets/10.jpg"),
    categoryId: 4,
    diameter: "2,326 km",
    mass: "1.6466 x 10^22 kg",
    distanceFromSun: "14.6 billion km",
    moons: 1,
    atmosphericComposition: "methane, nitrogen",
    averageTemperature: "-243°C",
    rotationPeriod: "25.9 hours",
    orbitalPeriod: "558 years",
  },
];

export const latestNews = [
  {
    id: 1,
    title: "New Exoplanet Discovered in Habitable Zone",
    date: "2023-08-20",
    content:
      "Astronomers have discovered a new exoplanet that falls within the habitable zone of its star...",
    image: require("../image/latestNews/1.webp"),
  },
  {
    id: 2,
    title: "Upcoming Mars Mission Set to Explore Martian Moons",
    date: "2023-08-15",
    content:
      "NASA's upcoming Mars mission aims to explore the two moons of Mars...",
    image: require("../image/latestNews/2.jpg"),
  },
  {
    id: 3,
    title: "Breakthrough in Understanding Dark Matter",
    date: "2023-08-10",
    content:
      "Scientists have made a significant breakthrough in our understanding of dark matter...",
    image: require("../image/latestNews/3.webp"),
  },
  {
    id: 4,
    title: "New Comet Spotted in the Night Sky",
    date: "2023-08-05",
    content:
      "Amateur astronomers have discovered a new comet that is visible in the night sky...",
    image: require("../image/latestNews/4.webp"),
  },
  {
    id: 5,
    title: "Hubble Space Telescope Captures Stunning Image of Galaxy Cluster",
    date: "2023-07-30",
    content:
      "The Hubble Space Telescope has captured a breathtaking image of a distant galaxy cluster...",
    image: require("../image/latestNews/5.png"),
  },
  {
    id: 6,
    title: "New Exoplanet with Unique Atmospheric Composition Found",
    date: "2023-07-25",
    content:
      "Researchers have identified an exoplanet with an unexpected mix of gases in its atmosphere...",
    image: require("../image/latestNews/6.webp"),
  },
  {
    id: 7,
    title: "NASA's Juno Mission Reveals Surprising Insights About Jupiter",
    date: "2023-07-20",
    content:
      "Data from NASA's Juno spacecraft has unveiled new insights about Jupiter's magnetic field...",
    image: require("../image/latestNews/7.jpg"),
  },

];

export const educationalContent = [
  {
    id: 1,
    title: "Introduction to Astronomy",
    content:
      "Learn the basics of astronomy, from celestial objects to the science of the universe.",
    type: "article",
    image: "https://example.com/astronomy_intro.jpg",
  },
  {
    id: 2,
    title: "Exploring Planetary Atmospheres",
    content:
      "Dive into the study of planetary atmospheres and their composition.",
    type: "video",
    videoUrl: "https://example.com/atmosphere_video.mp4",
  },
  {
    id: 3,
    title: "The Search for Exoplanets",
    content:
      "Discover the methods astronomers use to find planets beyond our solar system.",
    type: "article",
    image: "https://example.com/exoplanet_search.jpg",
  },
  {
    id: 4,
    title: "Space Travel: Challenges and Future",
    content:
      "Explore the challenges and possibilities of human space travel in the future.",
    type: "article",
    image: "https://example.com/space_travel.jpg",
  },
];

export const dailyFacts = [
  {
    id: 1,
    fact: "Venus has a longer day than its year due to its slow rotation.",
  },
  {
    id: 2,
    fact: "Jupiter's Great Red Spot is a massive storm that has been raging for centuries.",
  },
  {
    id: 3,
    fact: "A day on Mercury is longer than its year.",
  },
  {
    id: 4,
    fact: "Neptune has the strongest winds in the solar system, reaching speeds of over 1,200 mph.",
  },
  {
    id: 5,
    fact: "The tallest volcano in the solar system is on Mars. It's called Olympus Mons.",
  },
  {
    id: 6,
    fact: "The Milky Way galaxy is estimated to be about 100,000 light-years in diameter.",
  },
  {
    id: 7,
    fact: "The Hubble Space Telescope is in orbit around Earth, providing stunning images of distant objects.",
  },
  {
    id: 8,
    fact: "Saturn's rings are made up of particles ranging in size from tiny grains to large chunks.",
  },
];
