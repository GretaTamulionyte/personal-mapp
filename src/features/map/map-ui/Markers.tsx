import { Marker, Popup } from "react-leaflet";

import { Icon, divIcon, type DivIcon} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import styles from "./Markers.module.scss";

interface MarkerData {
    id: string;
    geocode: [number, number];
    popUp: string;

}
const markers: MarkerData[]= [
        {
            id: "vilnius",
            geocode: [54.68916, 25.2798],
            popUp: "Sostinė",

        },
        {
            id: "kaunas",
            geocode: [54.90156, 23.90909],
            popUp: "Kitas miestas",
        },
        {
            id: "klaipeda",
            geocode: [55.7068, 21.13912],
            popUp: "Dar kitas miestas"
        }
    ];


const iconUrl = "https://cdn-icons-png.flaticon.com/128/3660/3660542.png";


const customIcon = new Icon({
    iconUrl: iconUrl,
    // later once decided on icon actually download the right icon png, also different icons
    // for different locations
    iconSize: [20, 20],
    iconAnchor:[20 / 2, 20 / 2]  ,
}
)

type Cluster = {
    getChildCount: () => number;
};

const createCustomClusterIcon = (cluster: Cluster): DivIcon => {
    const count = cluster.getChildCount();

    const clusterSize = count > 50 ? 36 : count > 2 ? 40 : 30;

    return divIcon({
        html: `<div class="${styles["custom-cluster-icon"]}"><img src="${iconUrl}" alt="cluster"/></div>`,
        iconSize: [clusterSize, clusterSize],
        iconAnchor: [clusterSize / 2, clusterSize / 2],
        className: ""
    });
};

export default function Markers() {

    return (
        <>
    <MarkerClusterGroup
    chunkedLoading
    iconCreateFunction= {createCustomClusterIcon}>

    {markers.map(marker => (
    <Marker key={marker.id} position= {marker.geocode} icon ={customIcon}>
    <Popup>{marker.popUp}</Popup>

        </Marker>))

    }
    </MarkerClusterGroup>
    </>
)
};