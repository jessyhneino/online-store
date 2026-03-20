import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => (
  <div className="mt-20 flex justify-center items-center gap-4 border-t border-gray-100 pt-10">
    <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-black">
      <ChevronLeft size={20} />
    </button>

    <div className="flex items-center gap-1">
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
            num === 1
              ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
              : "hover:bg-gray-50"
          }`}
        >
          {num}
        </button>
      ))}
      <span className="text-gray-300 px-2">...</span>
      <button className="w-10 h-10 rounded-full hover:bg-gray-50 text-sm font-bold">
        12
      </button>
    </div>

    <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-black">
      <ChevronRight size={20} />
    </button>
  </div>
);

export default Pagination;
