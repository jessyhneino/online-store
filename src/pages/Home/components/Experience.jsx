import React from "react";

const Experience = () => {
  return (
    <section className="relative bg-[#1e2329] min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 overflow-hidden">
      {/* Background Decorative Element - إضافة لمسة جمالية للخلفية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* الجزء النصي - Text Content */}
        <div className="space-y-6 md:space-y-8 text-white order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <div className="space-y-3">
            <span className="inline-block text-[#636e7a] uppercase tracking-[0.25em] text-[10px] sm:text-xs font-bold bg-white/5 px-3 py-1 rounded-full lg:bg-transparent lg:p-0">
              Limited Availability
            </span>
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Experience Luxury <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 ">
                Without Borders.
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-md lg:max-w-sm leading-relaxed font-light mx-auto lg:mx-0">
            Global shipping available for our entire collection. Curated
            locally, delivered globally.
          </p>

          <div className="pt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#1d75e9] hover:bg-[#1669d4] active:scale-95 transition-all duration-300 text-white px-8 md:px-12 py-4 rounded-2xl font-semibold text-base shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40">
              Discover More
            </button>
          </div>

          {/* دعم اللغة العربية - Arabic Support */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-8 opacity-70 border-t border-white/5 w-full lg:w-fit">
            <span className="text-[12px] sm:text-[13px] italic font-light tracking-wide">
              Arabic support available
            </span>
            <div className="hidden sm:block h-[1px] w-8 bg-gray-600"></div>
            <span className="text-sm sm:text-base font-medium" dir="rtl">
              الدعم العربي متاح
            </span>
          </div>
        </div>

        {/* جزء الصورة - Image Content */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end px-4 sm:px-0">
          {/* Effect Orbs - هالات ضوئية خلف الصورة */}
          <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[80px] animate-pulse"></div>

          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] aspect-[4/5] group">
            {/* Border Frame Decoration */}
            <div className="absolute -inset-3 border border-white/10 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
            
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl transform lg:rotate-3 group-hover:rotate-0 transition-all duration-700 ease-out border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Modern Interior"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0  transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;