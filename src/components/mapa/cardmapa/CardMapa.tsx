import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://ik.imagekit.io/grupo8/juntosnaestrada/kombi.png?updatedAt=1769613821931",
  iconSize: [40, 40],     
  iconAnchor: [20, 40],    
  popupAnchor: [0, -40],   
});

export function MapCard() {

  const position: [number, number] = [-23.55052, -46.633308];

  return (
    <div className="rounded-2xl overflow-hidden h-[70vh] w-full">
      <MapContainer center={position} zoom={16} className="h-full w-full">
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={customIcon}>
          <Popup>Inicio</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapCard;