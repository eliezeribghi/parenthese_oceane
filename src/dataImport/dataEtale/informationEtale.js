// InformationEtale.js

const informations = [
    {
      name:"Étale",
      title: "Gite 3 pièces",
      description: "Gîte de 100m² rénové, situé au rez-de-chaussée, au-dessus de la maison des propriétaires, sur un terrain de 3000m² comprenant 2 autres gîtes. <br/><br/> Accès commun au logement avec un parking privatif. Salon (cheminée décorative)/séjour/cuisine ouverte. <br/><br/> Une terrasse privative, soigneusement aménagée avec un salon de jardin, offrant un espace extérieur.",
      roomComposition: [
        "1 lit (160x200)",
        "2 lits jumelables (80x200)",
        "1 lit (180x200)",
      ],
      tarifs: [
        { label: "À partir de", amount: "101,67 €", isBold: true },
        { label: "Montant de la caution :", amount: "500,00 €", isBold: true },
        { label: "Forfait ménage :", amount: "60€ /séjour (en supplément)", isBold: true },
        { label: "Taxe de séjour", additionalInfo: "(en supplément)" }
      ],
    },
  ];
  
  const myAccommodation = [{
    capacity: 6,
    rooms: 3,
    bathrooms: 1,
    beds: 4,
    squareMeter: 100,
    svgPaths: [
      { id: 1, path: "./assets/public/guests.svg", title: "Capacity", text: "Hôtes" },
      { id: 2, path: "./assets/public/shower.svg", title: "Number of rooms", text: "Douche" },
      { id: 3, path: "./assets/public/bedrooms.svg", title: "Number of bathrooms", text: "Chambres" },
      { id: 4, path: "./assets/public/beds.svg", title: "Number of beds", text: "Lits"},
      { id: 5, path: "./assets/public/area.svg", title: "Surface", text: "m2" }
    ],
  },
];
  
  const tarifs = informations[0].tarifs;
  const combinedData = [...informations, ...myAccommodation];
  
  export { informations, myAccommodation, tarifs, combinedData };
  