import React from "react";
import { Mail } from "lucide-react"; // تأكد من تثبيت lucide-react أو استبدالها بأي أيقونة أخرى

const NewsLetter = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon Container */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Join the <span className="text-blue-600">Curator Club</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Receive early access to seasonal sales, exclusive brand launches, and
          editorial content directly to your inbox.
        </p>

        {/* Form */}
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-800 shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md shadow-blue-100 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-gray-400 uppercase tracking-widest font-medium">
          No spam. Only inspiration. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
