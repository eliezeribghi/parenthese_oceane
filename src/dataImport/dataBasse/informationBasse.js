const informations = [
  {
    name: "Marée Basse",
    title: "Gîte 2 pièces",
    description: "Gîte rénové, d'une capacité d'accueil de 4 personnes, d'une superficie de 37 mètres carrés. <br> <br> Il comprend un salon confortable, une cuisine entièrement équipée, une chambre comprenant un lit double (160 cm) ainsi qu'un lit superposé (90 cm), une salle d'eau moderne et un espace de stationnement dédié. <br> <br> Profitez également d'une terrasse privée pour des moments de détente en plein air, ainsi que d'un jardin partagé où vous pourrez admirer la nature environnante. <br> <br> De plus, des jeux pour enfants sont disponibles pour divertir les plus jeunes et leur assurer un séjour des plus agréables.",
    roomComposition: [
      "1 lit 160x200",
      "1 lit superposé (2 x 90x200)"
    ],
    tarifs: [
      { label: "À partir de", amount: "60,00 €", isBold: true },
      { label: "Montant de la caution :", amount: "350,00 €", isBold: true },
      { label: "Forfait ménage :", amount: "40€ /séjour (en supplément)", isBold: true },
      { label: "Taxe de séjour", additionalInfo: "(en supplément)" }
    ],
  },
  // Ajoutez d'autres objets pour chaque description de logement
];

const myAccommodation = [{
  capacity: 4,
  rooms: 1,
  bathrooms: 1,
  beds: 2,
  squareMeter: 37,
  svgPaths: [
    { id: 1, path: "./assets/public/guests.svg", title: "Capacity", text: "Hôtes" },
    { id: 2, path: "./assets/public/bedrooms.svg", title: "Number of rooms", text: "Chambre" },
    { id: 3, path: "./assets/public/shower.svg", title: "Number of bathrooms", text: "Douche " },
    { id: 4, path: "./assets/public/beds.svg", title: "Number of beds", text: "Lits" },
    { id: 5, path: "./assets/public/area.svg", title: "Surface", text: "m2" }
  ],
},
];
const tarifs = informations[0].tarifs;
const combinedData = [...informations, ...myAccommodation];

export { informations, myAccommodation, tarifs, combinedData };
