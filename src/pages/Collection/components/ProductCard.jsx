import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="group cursor-grab active:cursor-grabbing pb-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-gray-50 dark:bg-zinc-900 transition-colors duration-500">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-800/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-tighter uppercase shadow-sm text-gray-900 dark:text-white transition-colors duration-500">
            {t(product.tag)}
          </span>
        )}
      </div>

      <div className="flex justify-between items-start mb-1">
        <h2 className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-500">
          {t(product.name)}
        </h2>
        <span className="font-bold text-lg text-gray-900 dark:text-gray-100 transition-colors duration-500">
          ${product.price}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <Star size={13} className="fill-orange-400 text-orange-400" />
        <span className="text-xs font-bold text-gray-900 dark:text-gray-100 transition-colors duration-500">
          {product.rating}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-400 transition-colors duration-500">
          ({product.reviews})
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
