import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
  const position = [33.8938, 35.5018]; // مثال: بيروت

  return (
    <div className="h-[250px] w-full rounded-2xl overflow-hidden">
      <MapContainer center={position} zoom={13} className="h-full w-full">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          {/* <Popup>مرحبا 👋 هاي نقطة على الخريطة</Popup> */}
        </Marker>
      </MapContainer>
    </div>
  );
}