import React, { useEffect, useRef } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
 
function Cam() {
  let videoRef = useRef(null);
 
  let photoRef = useRef(null)
 
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
 
  const takePicture = () => {
    const width = 400
    const height = width / (16 / 9)
    
    let video = videoRef.current
 
    let photo = photoRef.current
 
    photo.width = width
 
    photo.height = height
 
    let ctx = photo.getContext('2d')
 
    ctx.drawImage(video, 0, 0, width, height)
    
  }
 
  const clearImage = () => {
    let photo = photoRef.current
 
    let ctx = photo.getContext('2d')
 
    ctx.clearRect(0,0,photo.width,photo.height)
  }
 
  useEffect(() => {
    getVideo();
  }, [videoRef]);
 
  return (
    <div>

    <Card>
      <CardBody>
        <CardTitle tag="h5">CCTV Map View</CardTitle>
        <CardSubtitle className="text-muted" tag="h6" style={{marginBottom:10}}>
          OMR, Chennai
        </CardSubtitle>

        <div>
          <video ref={videoRef} className="container" style={{width:'50vw', height:'40vw'}}></video>
          <button onClick={takePicture} className="btn btn-danger container">Take Picture</button>
          <canvas className="container" ref={photoRef}></canvas>
          <button onClick={clearImage} className="btn btn-primary container">Clear Image</button>
          <br/><br/>
        </div>

      </CardBody>
    </Card>

    </div>
  );
}
 
export default Cam;