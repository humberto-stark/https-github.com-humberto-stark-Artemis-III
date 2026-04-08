import React from 'react';

export default function TagList({ tags, variant = 'neutral' }) {
  const variants = {
    positive: 'bg-green-900/30 text-green-400 border-green-800/50',
    negative: 'bg-red-900/30 text-red-400 border-red-800/50',
    neutral: 'bg-gray-800 text-gray-300 border-gray-700',
    accent: 'bg-purple-900/30 text-purple-400 border-purple-800/50'
  };

  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
