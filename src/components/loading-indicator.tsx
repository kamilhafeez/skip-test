import { ArrowPathIcon } from '@app/components/icons';

export const LoadingIndicator = ({ size = 24, className = '' }) => {
  return (
    <div className="flex items-center justify-center">
      <ArrowPathIcon
        className={`animate-spin text-gray-500 ${className}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
};
