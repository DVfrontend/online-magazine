export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  currency?: string,
  inStock?: boolean,
  category?: string,
  brand?: string,
  rating?: number,
  reviewsCount?: number,
  image?: string
}

export type Carousel = {
  id: number,
  img?: string,
  title: string,
}

export type Socials = {
  name: string,
  id: number,
  url: string,
  logo?: string
}

export type LayoutProps = {
  children: React.ReactNode;
}

export type Navigation = {
  id: number;
  title: string;
  path: string;
}