import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { useRouter } from 'next/router';
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

  function handleClick() {
    console.log('Marker clicked');
    // Use the router object to navigate to the page
    router.push('/ui/CamViews');
  }

  const router = useRouter();

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">CCTV Map View</CardTitle>
        <CardSubtitle className="text-muted" tag="h6" style={{marginBottom:10}}>
          OMR, Chennai
        </CardSubtitle>

        <div>
          <GoogleMap zoom={15} center={{lat:12.8699,lng: 80.2107}} mapContainerClassName={styles.map}>
             <MarkerF onClick={handleClick} position={{lat:12.8699,lng:80.2184}} />
          </GoogleMap>
        </div>

      </CardBody>
    </Card>
  );
}


