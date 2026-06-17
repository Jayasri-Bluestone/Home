import ShopPage from '../../components/ShopPage';

const config = {
  title: 'Dessert Stall', subtitle: 'Ice creams, sweets & desserts for every sweet tooth',
  emoji: '🍦', color: '#74007A', color2: '#f472b6',
  categories: ['🍦 All', '🍨 Ice Cream', '🍰 Cakes', '🍩 Donuts', '🍫 Chocolates', '🧁 Cupcakes', '🍮 Puddings'],
  products: [
    { id: 1, name: 'Kulfi on Stick',        price: '₹49',  original: null,   rating: 4.8, reviews: 892, badge: 'POPULAR', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=70' },
    { id: 2, name: 'Chocolate Lava Cake',   price: '₹149', original: '₹199', rating: 4.9, reviews: 341, badge: 'TOP',     img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=70' },
    { id: 3, name: 'Strawberry Sundae',     price: '₹99',  original: null,   rating: 4.6, reviews: 567, badge: null,      img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&q=70' },
    { id: 4, name: 'Belgium Waffle',        price: '₹129', original: '₹169', rating: 4.7, reviews: 234, badge: 'SALE',   img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=300&q=70' },
    { id: 5, name: 'Gulab Jamun Box',       price: '₹89',  original: null,   rating: 4.5, reviews: 1023, badge: 'FRESH', img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=70' },
    { id: 6, name: 'Ferrero Rocher 16pc',   price: '₹399', original: '₹499', rating: 4.8, reviews: 456, badge: 'GIFT',   img: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=300&q=70' },
  ],
};

export default () => <ShopPage config={config} />;
