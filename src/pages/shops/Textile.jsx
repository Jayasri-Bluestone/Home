import ShopPage from '../../components/ShopPage';

const config = {
  title: 'Textile Shop', subtitle: 'Fashion, clothing & accessories for everyone',
  emoji: '👗', color: '#74007A', color2: '#74007A',
  categories: ['👗 All', '👘 Sarees', '👔 Shirts', '👖 Jeans', '👙 Tops', '👒 Kids', '🧥 Winter'],
  products: [
    { id: 1, name: 'Kanjeevaram Silk Saree', price: '₹2,499', original: '₹3,999', rating: 4.7, reviews: 234, badge: 'SALE', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=70' },
    { id: 2, name: 'Linen Casual Shirt',     price: '₹599',   original: '₹899',   rating: 4.3, reviews: 87,  badge: null,   img: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=300&q=70' },
    { id: 3, name: 'Floral Maxi Dress',      price: '₹899',   original: null,      rating: 4.5, reviews: 156, badge: 'NEW',  img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=70' },
    { id: 4, name: 'Denim Jacket',           price: '₹1,299', original: '₹1,799', rating: 4.4, reviews: 201, badge: null,   img: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=300&q=70' },
    { id: 5, name: 'Kurta Pyjama Set',       price: '₹799',   original: '₹1,199', rating: 4.6, reviews: 312, badge: 'SALE', img: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=300&q=70' },
    { id: 6, name: 'Summer Sundress',        price: '₹649',   original: null,      rating: 4.2, reviews: 98,  badge: null,   img: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=300&q=70' },
    { id: 7, name: 'Wedding Sherwani',       price: '₹4,999', original: '₹6,999', rating: 4.8, reviews: 45,  badge: 'SALE', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&q=70' },
    { id: 8, name: 'Cotton Palazzo Set',     price: '₹499',   original: null,      rating: 4.1, reviews: 78,  badge: null,   img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4f8a?w=300&q=70' },
  ],
};

export default () => <ShopPage config={config} />;
