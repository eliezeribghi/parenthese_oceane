const informations = [
  {
    name: "Marée Haute",
    title: "Gite 2 pièces",
    description:
      "Découvrez le confort d'une maison ancienne rénovée. <br/><br/> Parfait pour deux personnes, ce logement de 27m2 propose une cuisine équipée, une chambre de 12m2 avec lit king-size et penderie et une salle d'eau. <br/><br/> Profitez d'une terrasse privative et partagez un vaste jardin de 3000 mètres carrés avec des équipements ludiques.",
    roomComposition: [" 1 lit (160x200)"],
    tarifs: [
      { label: "À partir de", amount: "50,00 €", isBold: true },
      { label: "Montant de la caution :", amount: "300,00 €", isBold: true },
      { label: "Forfait ménage :", amount: "30€ /séjour (en supplément)", isBold: true },
      { label: "Taxe de séjour", additionalInfo: "(en supplément)" },
    ],
  },
];

const myAccommodation = [
  {
    capacity: 2,
    rooms: 1,
    bathrooms: 1,
    beds: 1,
    squareMeter: 27,
    svgPaths: [
      { id: 1, path: "./assets/public/guests.svg", title: "Capacity  Holiday Cottage", text: "Hôtes" },
      { id: 2, path: "./assets/public/bedrooms.svg", title: "Number of rooms Holiday Cottage", text: "Chambres" },
      { id: 3, path: "./assets/public/shower.svg", title: "Number of bathrooms Holiday Cottage", text: "Douche " },
      { id: 4, path: "./assets/public/beds.svg", title: "Number of beds Holiday Cottage", text: "Lit" },
      { id: 5, path: "./assets/public/area.svg", title: "Surface Holiday Cottage", text: "m2" },
    ],
  },
];

const tarifs = informations[0].tarifs;
const combinedData = [...informations, ...myAccommodation];

export { informations, myAccommodation, tarifs, combinedData };
