import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600 underline mb-4">
        Hello World with Tailwind!
      </h1>

      <p className="text-lg text-gray-700">
        هذا مثال لتأكيد أن Tailwind CSS شغال في مشروع React
      </p>

      <button className="mt-6 px-6 py-3 bg-red-500 text-red-600 rounded-lg hover:bg-blue-600 transition">
        زر تجريبي
      </button>
    </div>
  );
}

export default App;
