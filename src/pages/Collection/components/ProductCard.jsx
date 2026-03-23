import { Star, ShoppingBag, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // افترضت أنك تستخدم react-router

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/curator/${product.id}`)} // رابط صفحة التفاصيل
      className="group relative flex flex-col cursor-pointer"
    >
      {/* Container الصورة */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f6f6f6] dark:bg-zinc-900 rounded-xl transition-all duration-500">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
        />

        {/* التاج - Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 overflow-hidden">
            <span className="block bg-black/80 dark:bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white dark:text-black rounded-sm transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
              {t(product.tag)}
            </span>
          </div>
        )}

        {/* أزرار سريعة تظهر عند الـ Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px]">
          <button className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
            <ShoppingBag size={18} />
          </button>
          <button className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-[400ms]">
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-[14px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {t("Electronics")} {/* يمكنك تغيير القسم حسب الداتا */}
          </h3>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-orange-400 text-orange-400" />
            <span className="text-[12px] font-bold dark:text-gray-200">
              {product.rating}
            </span>
          </div>
        </div>

        <h2 className="text-[17px] font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {t(product.name)}
        </h2>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-black text-gray-900 dark:text-white">
            ${product.price}
          </span>
          {/* سعر وهمي قبل الخصم ليعطي طابع احترافي */}
          <span className="text-sm text-gray-400 line-through">
            ${(product.price * 1.2).toFixed(0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
