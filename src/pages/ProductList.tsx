import React from 'react';
import Logo from '../components/Logo';

const products = [
  {
    id: 'P001',
    name: 'Data Analytics Suite Pro',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P002',
    name: 'Cloud Storage Enterprise',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P003',
    name: 'Business Intelligence Tool',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P004',
    name: 'Data Visualization Platform',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P005',
    name: 'Machine Learning Suite',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P006',
    name: 'Database Management System',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P007',
    name: 'Data Security Package',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P008',
    name: 'Big Data Processing Tool',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P009',
    name: 'Data Integration Platform',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'P010',
    name: 'Analytics Dashboard Pro',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500',
  },
];

const ProductList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-1">ID: {product.id}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-indigo-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductList;