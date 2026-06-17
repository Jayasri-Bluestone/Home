import ShopPage from '../../components/ShopPage';

const config = {
  title: 'Sports Zone', subtitle: 'Premium sports equipment & fitness gear',
  emoji: '⚽', color: '#0284c7', color2: '#0369a1',
  categories: ['⚽ All', '🏏 Cricket', '⚽ Football', '🏸 Badminton', '🏊 Swimming', '🏋️ Gym', '🚴 Cycling'],
  products: [
    { id: 1, name: 'SG Cricket Bat',        price: '₹2,199', original: '₹2,999', rating: 4.7, reviews: 312, badge: 'SALE',  img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&q=70' },
    { id: 2, name: 'Nike Football Size 5',  price: '₹1,499', original: null,      rating: 4.6, reviews: 245, badge: null,    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&q=70' },
    { id: 3, name: 'Yonex Badminton Racket',price: '₹899',   original: '₹1,299', rating: 4.5, reviews: 189, badge: 'SALE',  img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=300&q=70' },
    { id: 4, name: 'Yoga Mat Non-Slip',     price: '₹599',   original: '₹799',   rating: 4.4, reviews: 567, badge: null,    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&q=70' },
    { id: 5, name: 'Dumbbell Set 10kg',     price: '₹1,999', original: null,      rating: 4.8, reviews: 234, badge: 'NEW',   img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=70' },
    { id: 6, name: 'Running Shoes Pro',     price: '₹2,499', original: '₹3,499', rating: 4.7, reviews: 398, badge: 'SALE',  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=70' },
  ],
};

export default () => <ShopPage config={config} />;
