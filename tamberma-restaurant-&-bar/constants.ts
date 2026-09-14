import { MenuCategory } from './types';

export const WHATSAPP_LINK = "https://wa.me/234XXXXXXXXXX";
export const GLOVO_LINK = "https://glovoapp.com/en/ng/lagos/stores/tamberma-restaurant-bar-los";
export const ADDRESS = "245 Samuel Manuwa St, Victoria Island, Lagos";
export const GOOGLE_MAPS_LINK = "https://maps.google.com/?q=245+Samuel+Manuwa+St,+Victoria+Island,+Lagos";

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'indian',
    title: 'The Tandoor & Curries',
    description: 'Authentic flavors from the clay oven and rich, aromatic gravies.',
    items: [
      {
        id: 'i1',
        name: 'Murgh Tikka Masala',
        description: 'Chargrilled chicken morsels simmered in a rich tomato and fenugreek sauce.',
        price: '₦ 18,000',
        image: 'https://picsum.photos/400/300?random=1'
      },
      {
        id: 'i2',
        name: 'Lamb Rogan Josh',
        description: 'Tender lamb slow-cooked with Kashmiri spices and yogurt.',
        price: '₦ 22,000',
        isSpicy: true,
        image: 'https://picsum.photos/400/300?random=2'
      },
      {
        id: 'i3',
        name: 'Garlic Butter Naan',
        description: 'Soft leavened bread baked in the tandoor topped with garlic and butter.',
        price: '₦ 3,500',
        isVegetarian: true,
        image: 'https://picsum.photos/400/300?random=3'
      },
      {
        id: 'i4',
        name: 'Dal Makhani',
        description: 'Black lentils cooked overnight with cream and butter.',
        price: '₦ 12,000',
        isVegetarian: true,
        image: 'https://picsum.photos/400/300?random=4'
      }
    ]
  },
  {
    id: 'chinese',
    title: 'The Wok & Dim Sum',
    description: 'Traditional wok-tossed favorites and delicate steamed parcels.',
    items: [
      {
        id: 'c1',
        name: 'Prawn Har Gao',
        description: 'Translucent steamed shrimp dumplings with bamboo shoots.',
        price: '₦ 16,000',
        image: 'https://picsum.photos/400/300?random=5'
      },
      {
        id: 'c2',
        name: 'Szechuan Kung Pao Chicken',
        description: 'Diced chicken wok-tossed with dried chilies, peanuts, and scallions.',
        price: '₦ 17,500',
        isSpicy: true,
        image: 'https://picsum.photos/400/300?random=6'
      },
      {
        id: 'c3',
        name: 'Cantonese Chow Mein',
        description: 'Crispy egg noodles topped with a savory vegetable and meat gravy.',
        price: '₦ 15,000',
        image: 'https://picsum.photos/400/300?random=7'
      }
    ]
  },
  {
    id: 'nigerian',
    title: 'The Nigerian Grill',
    description: 'Local favorites elevated with a gourmet twist.',
    items: [
      {
        id: 'n1',
        name: 'Signature Suya Pizza',
        description: 'A fusion masterpiece. Spicy beef suya, onions, and peppers on a thin crust.',
        price: '₦ 14,000',
        isSpicy: true,
        image: 'https://picsum.photos/400/300?random=8'
      },
      {
        id: 'n2',
        name: 'Whole Grilled Croaker',
        description: 'Marinated in Tamberma secret spice blend, served with plantains.',
        price: '₦ 25,000',
        image: 'https://picsum.photos/400/300?random=9'
      },
      {
        id: 'n3',
        name: 'Gourmet Jollof Rice',
        description: 'Smoky party jollof served with grilled prawns and coleslaw.',
        price: '₦ 16,500',
        isSpicy: true,
        image: 'https://picsum.photos/400/300?random=10'
      }
    ]
  }
];