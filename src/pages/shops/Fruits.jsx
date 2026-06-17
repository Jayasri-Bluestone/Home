import ShopPage from '../../components/ShopPage';

const config = {
  title: 'Fresh Market', subtitle: 'Farm-fresh fruits & vegetables delivered to your door',
  emoji: '🍎', color: '#15803d', color2: '#16a34a',
  categories: ['🍎 All', '🍊 Citrus', '🍇 Grapes', '🍌 Tropical', '🥦 Vegetables', '🥗 Organic', '🍓 Berries'],
  products: [
    { id: 1, name: 'Alphonso Mangoes 1kg',  price: '₹249', original: '₹299', rating: 4.9, reviews: 512, badge: 'FRESH', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&q=70' },
    { id: 2, name: 'Fresh Strawberries',    price: '₹99',  original: null,   rating: 4.7, reviews: 341, badge: null,    img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=70' },
    { id: 3, name: 'Organic Bananas 1 doz', price: '₹60',  original: '₹80',  rating: 4.5, reviews: 289, badge: 'SALE',  img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=70' },
    { id: 4, name: 'Sweet Orange 2kg',      price: '₹129', original: null,   rating: 4.6, reviews: 198, badge: 'FRESH', img: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&q=70' },
    { id: 5, name: 'Fresh Broccoli',        price: '₹79',  original: '₹99',  rating: 4.3, reviews: 156, badge: null,    img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&q=70' },
    { id: 6, name: 'Watermelon Whole',      price: '₹149', original: null,   rating: 4.8, reviews: 421, badge: null,    img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=70' },
    { id: 7, name: 'Red Grapes 500g',       price: '₹119', original: '₹149', rating: 4.4, reviews: 267, badge: 'SALE',  img: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300&q=70' },
    { id: 8, name: 'Apple Basket 2kg',      price: '₹199', original: null,   rating: 4.6, reviews: 389, badge: 'FRESH', img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&q=70' },
  ],
};

export default () => <ShopPage config={config} />;
