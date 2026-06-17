import ShopPage from '../../components/ShopPage';

const config = {
  title: 'Beauty Store', subtitle: 'Top cosmetics, skincare & beauty essentials',
  emoji: '💄', color: '#be185d', color2: '#74007A',
  categories: ['💄 All', '💋 Lipstick', '🧴 Skincare', '💅 Nails', '👁️ Eyes', '🌸 Perfume', '🧼 Cleansers'],
  products: [
    { id: 1, name: 'Matte Lipstick Set 6',  price: '₹599',  original: '₹899',  rating: 4.7, reviews: 892, badge: 'BESTSELLER', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=70' },
    { id: 2, name: 'Vitamin C Face Serum',  price: '₹899',  original: '₹1,299',rating: 4.6, reviews: 567, badge: 'SALE',       img: 'https://images.unsplash.com/photo-1570194065650-d99fb4e44c80?w=300&q=70' },
    { id: 3, name: 'Foundation (30ml)',     price: '₹499',  original: null,    rating: 4.4, reviews: 345, badge: null,         img: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=300&q=70' },
    { id: 4, name: 'Rose Water Toner',      price: '₹299',  original: '₹399',  rating: 4.8, reviews: 1023, badge: 'SALE',     img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300&q=70' },
    { id: 5, name: 'Nude Eye Shadow Kit',   price: '₹799',  original: null,    rating: 4.5, reviews: 234, badge: 'NEW',       img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&q=70' },
    { id: 6, name: 'Perfume (EDP 50ml)',    price: '₹1,499',original: '₹1,999',rating: 4.7, reviews: 412, badge: 'SALE',      img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=300&q=70' },
  ],
};

export default () => <ShopPage config={config} />;
