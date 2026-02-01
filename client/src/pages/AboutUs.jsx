import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-gray-900 dark:text-white rounded min-h-[90vh]">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          About iOdia
        </h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          iOdia is a modern streaming platform built to bring Odia TV channels
          and entertainment together in one simple, fast, and user-friendly
          experience.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our mission is to make Odia content easily accessible to everyone,
            anywhere. We focus on clean design, fast streaming, and a smooth
            viewing experience without unnecessary complexity.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Live Odia TV channels with adaptive streaming</li>
            <li>High-quality video playback using HLS & Plyr</li>
            <li>Built-in casual games for entertainment</li>
            <li>Mobile-friendly and lightweight UI</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-base-100 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Why iOdia?
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>⚡ Fast & smooth streaming</li>
            <li>🎯 Focused on Odia content</li>
            <li>🎮 Entertainment beyond TV</li>
            <li>🔒 No unnecessary clutter</li>
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-14 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} iOdia. Built with ❤️ for Odia audiences.
      </div>
    </div>
  );
};

export default AboutUs;
