import React from 'react';

const categories = [
  {
    title: 'Clothing',
    items: '420+ Items',
    image: 'https://images.unsplash.com/photo-1523381235312-3a1647fa9921?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'Electronics',
    items: '115+ Items',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Accessories',
    items: '312+ Items',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Home',
    items: '200+ Items',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Categories</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Navigate through our meticulously organized collections across lifestyle and technology.
          </p>
        </div>
        <a href="#" className="flex items-center text-blue-600 font-semibold hover:underline group">
          Browse all categories 
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-xl bg-gray-100 h-[300px] cursor-pointer ${cat.gridClass}`}
          >
            {/* Image with Zoom Effect */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{cat.title}</h3>
              <p className="text-sm font-medium opacity-90 drop-shadow-md">{cat.items}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;