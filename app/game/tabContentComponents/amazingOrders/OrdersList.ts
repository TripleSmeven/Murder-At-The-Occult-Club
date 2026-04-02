interface Order {
  date: string;
  customerName: string;
  color?: string;
  items: Item[];
}

interface Item {
  name: string;
  category: string;
  price: string;
}

export const OrdersList: Order[] = [
  {
    date: "12/7",
    customerName: "Unknown A", // Candace Eng
    color: "red",
    items: [
      {
        name: "Baking Soda 1lb - For Baking, Cleaning",
        category: "HOME",
        price: "12.00",
      },
      {
        name: "Organic Cane Sugar 32oz",
        category: "FOOD",
        price: "20.00",
      },
      {
        name: "Hand Illustrated Tarot Cards With Guide Book",
        category: "MISC",
        price: "24.00",
      },
      {
        name: "5x6-inch Altar Cloth Pentagram Pattern",
        category: "HOME",
        price: "11.00",
      },
      {
        name: "Red Wax Candles for Ambiance, Decor",
        category: "HOME",
        price: "11.00",
      },
    ],
  },
  {
    date: "12/8",
    customerName: "Unknown B", // Andrew Wolfe
    color: "orange",
    items: [
      {
        name: "2-in-1 Corded Stick Mini Vacuum Cleaner",
        category: "HOME",
        price: "27.50",
      },
      {
        name: "Flexible Adhesive Bandages, Small, 100ct",
        category: "HOME",
        price: "8.00",
      },
      {
        name: "Red dot LED Light Pointer Interactive Toy",
        category: "MISC",
        price: "5.00",
      },
      {
        name: "Ace of Spades BOOST 4pk",
        category: "DRINK",
        price: "12.00",
      },
    ],
  },
  {
    date: "12/8",
    customerName: "Unknown C", // Carlos Sanchez
    color: "yellow",
    items: [
      {
        name: "Adult Mult-Sport Helmet (Biking, Skateboarding)",
        category: "SPORTS",
        price: "32.00",
      },
      {
        name: "Purple Orchid Flower Plant, Long Stem",
        category: "HOME",
        price: "20.50",
      },
      {
        name: "Dreamcatcher, 100% Hemp and Duck Feather 3ct",
        category: "MISC",
        price: "20.00",
      },
      {
        name: "Ace of Spades 24pk",
        category: "DRINK",
        price: "50.00",
      },
    ],
  },
  {
    date: "12/9",
    customerName: "Thomas Brooke",
    color: "green",
    items: [
      {
        name: "HyperY Computer Headset with Microphone",
        category: "OFFICE",
        price: "46.00",
      },
      {
        name: "Ergonomic Mousepad with Gel Wrist Rest",
        category: "OFFICE",
        price: "11.75",
      },
      {
        name: "MegTech Computer Ergonomic Mouse (R)",
        category: "OFFICE",
        price: "20.00",
      },
      {
        name: "All Natural Wood Chip Bedding For Small Cages",
        category: "HOME",
        price: "14.00",
      },
    ],
  },
  {
    date: "12/9",
    customerName: "Daisy Verde",
    color: "cyan",
    items: [
      {
        name: "Premium Canada Goose Down Jacket",
        category: "CLOTHING",
        price: "250.00",
      },
      {
        name: "Xyrtec 24 Allergy Relief 10g Antihistamine",
        category: "HEALTH",
        price: "24.00",
      },
    ],
  },
  {
    date: "12/9",
    customerName: "Sarah Findley",
    color: "blue",
    items: [
      {
        name: "9oz Red Plastic Solo Cups For Parties 20ct",
        category: "HOME",
        price: "10.00",
      },
      {
        name: "Compostable Paper Plates 6inch 20ct",
        category: "HOME",
        price: "12.00",
      },
      {
        name: "Clear Plastic Forks 30ct",
        category: "HOME",
        price: "10.00",
      },
      {
        name: "MegTech Computer Ergonomic Mouse (L)",
        category: "OFFICE",
        price: "20.00",
      },
      {
        name: "Davy Crockett Hat - Real Rabbit Fur and Raccoon Tail",
        category: "CLOTHING",
        price: "90.00",
      },
    ],
  },
  {
    date: "12/10",
    customerName: "Daisy Verde",
    color: "purple",
    items: [
      {
        name: "Concentrated Bleach Tablets (32 Tablets)",
        category: "HOME",
        price: "9.00",
      },
      {
        name: "Pink Himalayan Salt 5lb",
        category: "FOOD",
        price: "17.00",
      },
    ],
  },
  {
    date: "12/10",
    customerName: "Candace Eng",
    items: [
      {
        name: "Tom's Rodenticide 50oz (L)",
        category: "HOME",
        price: "14.00",
      },
      {
        name: "Assorted MESPRESSO Coffee Pods 50ct",
        category: "FOOD",
        price: "20.00",
      },
    ],
  },
  {
    date: "12/10",
    customerName: "Unknown D", // Andrew Wolfe
    color: "black",

    items: [
      {
        name: "10oz Fae Salt - Protection From Evil - Break Curses",
        category: "HOME",
        price: "26.00",
      },
      {
        name: "Occult Incantations Vol 4 - Includes Grimm's Incantations",
        category: "BOOKS",
        price: "43.00",
      },
    ],
  },
];
