import React, { useState } from "react";
// 1. استيراد useNavigate من المكتبة
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  // 2. تعريف navigate داخل المكون
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isEmailValid = validateEmail(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      console.log("Sending reset link to:", email);

      // 3. تفعيل الانتقال إلى المسار المطلوب
      // تأكدي أن المسار '/create-new-password' مطابق لما هو موجود في App.js
      navigate("/createnewpassword");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="p-8 pt-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight mb-3">
            RESET PASSWORD
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed mb-8 px-4">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="name@example.com"
                className={`w-full px-4 py-4 rounded-xl outline-none transition-all duration-200 text-slate-700 ${
                  isEmailValid
                    ? "bg-white border-2 border-green-500 ring-2 ring-green-100"
                    : "bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={!isEmailValid}
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all duration-150 uppercase tracking-wider text-sm ${
                isEmailValid
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 active:scale-[0.98] cursor-pointer"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
              }`}
            >
              Send Reset Link
            </button>
          </form>

          <div className="my-8 border-t border-slate-100 w-full"></div>

          <button
            onClick={() => navigate("/login")} // يفضل استخدام navigate هنا أيضاً بدلاً من back
            className="group flex items-center justify-center gap-2 w-full text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
