export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}