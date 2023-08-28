import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import iconPlace2 from "./assets/place2.svg";
import iconPlace1 from "./assets/place.svg";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {
   //markers:
   const markers = [
      {
         geocode: [52.255422254652494, 10.539756513488964],
         popUp: "BraWo Park",
      },
      {
         geocode: [52.263672803998446, 10.518041051244222],
         popUp: "Typografix",
      },
      {
         geocode: [52.2902406843294, 10.521280911411937],
         popUp: "Eintracht-Stadion",
      },
   ];

   const customIcon = new Icon({
      iconUrl: iconPlace1,
      iconSize: [68, 68], //size of the icon
   });

   // custom cluster icon
   const createClusterCustomIcon = function (cluster) {
      return new divIcon({
         html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
         className: "custom-marker-cluster",
         iconSize: point(63, 63, true),
      });
   };

   return (
      <MapContainer center={[52.266666, 10.516667]} zoom={13}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />

         <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
            {markers.map((marker, i) => {
               return (
                  <Marker position={marker.geocode} icon={customIcon} key={i}>
                     <Popup>{marker.popUp}</Popup>
                  </Marker>
               );
            })}
         </MarkerClusterGroup>
      </MapContainer>
   );
}

export default App;
