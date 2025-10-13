import { useState } from 'react';
import { Users } from 'lucide-react';

interface TeamMemberImageProps {
  name: string;
  image: string;
  fallbackImage: string;
  className?: string;
}

export const TeamMemberImage: React.FC<TeamMemberImageProps> = ({
  name,
  image,
  fallbackImage,
  className = ""
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-quantum-primary to-quantum-secondary flex items-center justify-center ${className}`}>
        <Users className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-primary to-quantum-secondary flex items-center justify-center">
          <Users className="w-16 h-16 text-white animate-pulse" />
        </div>
      )}
      <img
        src={fallbackImage}
        alt={name}
        className={`w-full h-full object-cover object-center transition-all duration-500 hover:scale-110 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};