

import "leaflet/dist/leaflet.css";

import styles from "./MapView.module.scss";

import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers"

export default function MapView() {
    return (
        <div className={styles.MapView}>
            <MapContainer center = {[54.68916, 25.2798]} zoom = {13}>
                <TileLayer
                attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Markers/>
            </MapContainer>
        </div>
    )
}