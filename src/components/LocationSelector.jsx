import { useState, useRef, useEffect } from 'react';

function LocationSelector({ onLocationSelect }) {
  const [address, setAddress] = useState('');
  const autoCompleteRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      { componentRestrictions: { country: 'ZA' } } // Restrict to South Africa
    );

    autoCompleteRef.current.addListener('place_changed', () => {
      const place = autoCompleteRef.current.getPlace();
      
      if (place.geometry) {
        onLocationSelect({
          address: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          zone: determineZone(place.geometry.location.lat(), place.geometry.location.lng())
        });
      }
    });
  }, [onLocationSelect]);

  // Mock function to determine zone based on coordinates
  const determineZone = (lat, lng) => {
    // In reality, this would use proper zone boundaries
    // For demo, returning mock zones based on latitude
    return `Zone ${Math.floor((lat * 10) % 8) + 1}`;
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

export default LocationSelector; 