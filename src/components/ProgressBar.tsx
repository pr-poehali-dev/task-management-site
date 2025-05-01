
import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#0d1a3d] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-right mt-2 text-gray-700 font-medium">{percentage}%</div>
    </div>
  );
};

export default ProgressBar;
