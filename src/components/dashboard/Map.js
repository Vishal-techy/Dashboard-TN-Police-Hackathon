import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { useMemo } from "react";
import React from "react";
import {GoogleMap,MarkerF,useLoadScript} from "@react-google-maps/api";
import styles from '../../../styles/map.module.css'

export default function Map (){

  const {isLoaded}= useLoadScript({googleMapsApiKey:"AIzaSyC8MGNAJmfM9TEm3xYqaaHL0tqU1orzvbc"});
  if(!isLoaded) return <div>Loading...</div>;
  // function map(){
  //   const center = useMemo(() => ({lat:12.8699,lng:80.2184}))  
  // }
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">CCTV Map View</CardTitle>
        <CardSubtitle className="text-muted" tag="h6" style={{marginBottom:10}}>
          OMR, Chennai
        </CardSubtitle>

<<<<<<< HEAD
        <div>
          <GoogleMap zoom={15} center={{lat:12.8699,lng: 80.2107}} mapContainerClassName={styles.map}>
             <MarkerF onClick={()=>console.log("Marker clicked")} position={{lat:12.8699,lng:80.2184}} />
          </GoogleMap>
=======
        <div style={{marginBottom:'60%'}}>
            {/* Add Google Maps Here */}
>>>>>>> 1e2935ff7da6d6bff2c51aa96aa268193b684a5d
        </div>
      </CardBody>
    </Card>
  );
}


