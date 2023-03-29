import React, { useCallback, useEffect, useRef,useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Webcam from "react-webcam";

import axios from "axios";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://scary-child.pockethost.io');

function Cam() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const hiddenFileInput = useRef(null);

  const [isVideo, setIsVideo] = useState(false);
  const [videoFile, setVideoFile] = useState(null);

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n) {
      u8arr[n - 1] = bstr.charCodeAt(n - 1)
      n -= 1 // to make eslint happy
    }
    return new File([u8arr], filename, { type: mime })
  }

 
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    // console.log(imageSrc);
    // const file = dataURLtoFile(imageSrc)
    // console.log(file);
    // let formData = new FormData();
    // formData.append("file", file);

    const fd = new FormData();
    fetch(imageSrc)
    .then(res => res.blob())
    .then(blob => {
      const file = new File([blob], "filename.jpeg");
      fd.append('file', file)
      console.log(fd);
    }).then(() => {
      axios.post("http://10.10.30.73:5001/upload-image", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((data) => {
        console.log(data);
        pb.collection('alerts').create(data)
      }).catch((err)=> {
        console.log(err);
        alert()
      })

    })
  }, [webcamRef]);

  const handleChange = event => {
    if (event.target.files && event.target.files[0]) {
      setVideoFile(event.target.files[0]);
      const i = event.target.files[0];
      const body = new FormData();
      body.append("file", i);
      setIsVideo(true);
      axios.post("http://10.10.30.73:5001/upload", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((data) => {
        console.log(data);
        pb.collection('alerts').create(data).then(() => {
          setIsVideo(false);
        })
      }).catch((err)=> {
        console.log(err);
        setIsVideo(false);
        alert()
      })

    }
  };

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  
  return (
    <div>

    <Card>
      <CardBody>
        <CardTitle tag="h5">CCTV Map View</CardTitle>
        <CardSubtitle className="text-muted" tag="h6" style={{marginBottom:10}}>
          OMR, Chennai
        </CardSubtitle>

        <div>
          {
            isVideo ? 
            <video autoPlay src={URL.createObjectURL(videoFile)} controls style={{width:'45vw', height:'30vw'}}></video> : 
            <Webcam screenshotFormat="image/jpeg" ref={webcamRef} className="container" style={{width:'45vw', height:'30vw'}}/>
          }
          <div style={{marginLeft:315,marginTop:20}}><button onClick={capture} style={{background:'black',width:150}} className="btn container text-white">Take Picture</button></div>
          <input type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: 'none' }} />
          <div style={{marginLeft:315,marginTop:20}}><button onClick={handleClick} style={{background:'black',width:150}} className="btn container text-white">Upload video</button></div>

        </div>

      </CardBody>
    </Card>

    </div>
  );
}
 
export default Cam; 