import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. استيراد أداة التوجيه
import { Eye, EyeOff, CheckCircle2, Circle } from "lucide-react";

const CreateNewPassword = () => {
  const navigate = useNavigate(); // 2. تعريف التوجيه
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // شروط التحقق
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // 3. التحقق من أن كل الشروط محققة + تطابق كلمتي المرور
  const allChecksPassed = Object.values(checks).every(Boolean);
  const isMatch = password === confirmPassword && password !== "";
  const isButtonEnabled = allChecksPassed && isMatch;

  const handleUpdate = (e) => {
    e.preventDefault();
    if (isButtonEnabled) {
      // هنا تضع كود إرسال البيانات للسيرفر إذا أردت
      console.log("Password Updated Successfully!");

      // 4. التوجه لصفحة الـ Home
      navigate("/signin");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">
        {/* النص الخلفي الزخرفي (SET) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[180px] font-black text-gray-100/60 leading-none tracking-tighter">
            SET
          </span>
        </div>

        <div className="relative z-10">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-light text-gray-700 tracking-wide uppercase mb-3">
              Create New Password
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed px-6">
              Your new password must be different from previously used
              passwords.
            </p>
          </header>

          <form className="space-y-6" onSubmit={handleUpdate}>
            {/* حقل كلمة المرور الجديدة */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-100 border-none rounded-xl py-4 px-5 text-gray-700 focus:ring-2 focus:ring-gray-200 transition-all outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* حقل تأكيد كلمة المرور */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  className="w-full bg-gray-100 border-none rounded-xl py-4 px-5 text-gray-700 focus:ring-2 focus:ring-gray-200 transition-all outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* قائمة التحقق */}
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 space-y-3">
              <CheckItem label="Minimum 8 characters" isMet={checks.length} />
              <CheckItem
                label="One uppercase letter"
                isMet={checks.uppercase}
              />
              <CheckItem label="One special character" isMet={checks.special} />
              {/* اختيارية: إضافة علامة لتطابق الكلمتين */}
              <CheckItem label="Passwords must match" isMet={isMatch} />
            </div>

            {/* زر التحديث المعدل */}
            <button
              type="submit"
              disabled={!isButtonEnabled} // تعطيل الزر برمجياً
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-lg 
                ${
                  isButtonEnabled
                    ? "bg-gray-800 text-white hover:bg-black active:scale-[0.98] shadow-gray-300"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                }`}
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const CheckItem = ({ label, isMet }) => (
  <div className="flex items-center gap-3">
    {isMet ? (
      <CheckCircle2 size={18} className="text-green-500 transition-colors" />
    ) : (
      <Circle size={18} className="text-gray-300 transition-colors" />
    )}
    <span
      className={`text-sm ${
        isMet ? "text-gray-700 font-medium" : "text-gray-400"
      }`}
    >
      {label}
    </span>
  </div>
);

export default CreateNewPassword;
