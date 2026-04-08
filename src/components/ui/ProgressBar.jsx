import React from 'react';

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-8">
      <div 
        className="bg-purple-600 h-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
