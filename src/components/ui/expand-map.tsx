// src/components/MyMap.jsx
import { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function LocationMap() {
  const [popupInfo, setPopupInfo] = useState(null);

  const locations = [
    { id: 1, name: 'Bengaluru', lat: 12.9716, lng: 77.5946 },
  ];

  return (
    <Map
      initialViewState={{
        longitude: 77.5946,
        latitude: 12.9716,
        zoom: 10,
      }}
      style={{ width: '100%', height: '20rem' }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
      <NavigationControl position="top-right" />

      {locations.map((loc) => (
        <Marker
          key={loc.id}
          longitude={loc.lng}
          latitude={loc.lat}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(loc);
          }}
        />
      ))}

      {popupInfo && (
      <Popup
        longitude={popupInfo.lng}
        latitude={popupInfo.lat}
        onClose={() => setPopupInfo(null)}
        closeOnClick={false}
        closeButton={false}
        className="!p-0 [&_.maplibregl-popup-tip]:!border-t-white"
      >
        <div className="min-w-[180px] rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {popupInfo.name}
              </h3>
              <p className="mt-0.5 text-xs text-gray-500">
                {popupInfo.lat.toFixed(4)}, {popupInfo.lng.toFixed(4)}
              </p>
            </div>
            <button
              onClick={() => setPopupInfo(null)}
              className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </Popup>
    )}
    </Map>
  );
}

export default LocationMap;