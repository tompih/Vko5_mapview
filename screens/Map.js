import { StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function Map(props) {
    const [marker, setMarker] = useState(null)
    
    /*useEffect(() => {
        (async () => {
            getUserPosition()
        })()
    }, [])
    */

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker(coords)
    }

    return (
        <MapView
            style={styles.map}
            region={props.location}
            mapType={props.mapType}
            onLongPress={showMarker}
            >

            {marker && 
            <Marker
        title="My marker"
    coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
    />
    }
</MapView>
)
}




const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
});
