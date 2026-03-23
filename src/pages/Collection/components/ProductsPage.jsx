// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import { LayoutGrid, ListFilter } from "lucide-react";

// const ProductsPage = ({ products }) => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 px-4 md:px-10 py-12">
//       {/* Header القسم */}
//       <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
//             OUR COLLECTIONS
//           </h1>
//           <p className="text-gray-500 dark:text-zinc-400 max-w-md">
//             Explore our curated selection of high-quality products designed for
//             your lifestyle.
//           </p>
//         </div>

//         <div className="flex items-center gap-4">
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-zinc-800 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all">
//             <ListFilter size={16} /> Filter
//           </button>
//           <div className="h-6 w-[1px] bg-gray-200 dark:bg-zinc-800" />
//           <p className="text-sm font-bold text-gray-400">
//             Showing{" "}
//             <span className="text-black dark:text-white">
//               {products.length}
//             </span>{" "}
//             Products
//           </p>
//         </div>
//       </div>

//       {/* الـ Grid الاحترافي */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
//         {products.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>

//       {/* Pagination بشكل جديد */}
//       <div className="max-w-7xl mx-auto mt-20 flex justify-center">
//         <nav className="flex items-center gap-2">
//           <button className="px-6 py-3 rounded-full bg-gray-100 dark:bg-zinc-900 font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
//             Load More
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
