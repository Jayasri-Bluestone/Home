import ShopPage from '../../components/ShopPage';

const config = {
  title: 'Jewellery Shop', subtitle: 'Exquisite gold, silver & diamond jewellery',
  emoji: '💍', color: '#b45309', color2: '#d97706',
  categories: ['💍 All', '📿 Necklace', '💎 Rings', '✨ Earrings', '📿 Bangles', '⌚ Bracelets', '🥇 Gold'],
  products: [
    { id: 1, name: 'Gold Temple Necklace',  price: '₹24,999', original: '₹29,999', rating: 4.9, reviews: 89,  badge: 'PURE 22K', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&q=70' },
    { id: 2, name: 'Diamond Solitaire Ring',price: '₹45,000', original: null,       rating: 4.8, reviews: 56,  badge: 'REAL',     img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&q=70' },
    { id: 3, name: 'Silver Anklet Pair',    price: '₹899',    original: '₹1,199',  rating: 4.6, reviews: 312, badge: 'SALE',     img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&q=70' },
    { id: 4, name: 'Pearl Drop Earrings',   price: '₹1,499',  original: null,       rating: 4.7, reviews: 178, badge: null,       img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&q=70' },
    { id: 5, name: 'Gold Bangles Set 2pc',  price: '₹8,999',  original: '₹10,999', rating: 4.8, reviews: 234, badge: 'SALE',     img: 'https://images.unsplash.com/photo-1573408301185-9519bf4e6f13?w=300&q=70' },
    { id: 6, name: 'Ruby Pendant Gold',     price: '₹3,999',  original: '₹4,999',  rating: 4.5, reviews: 145, badge: null,       img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=70' },
  ],
};

export default () => <ShopPage config={config} />;
