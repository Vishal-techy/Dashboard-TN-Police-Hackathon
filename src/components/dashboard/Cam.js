import React, { useEffect, useRef,useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

// const [photo,setPhoto] = useState()
 
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

    console.log('====================================');
    console.log(photoRef.current);
    console.log('====================================');
 
    ctx.drawImage(video, 0, 0, width, height)
    
  }
 
  const clearImage = () => {
    let photo = photoRef.current
    let ctx = photo.getContext('2d')
    ctx.clearRect(0,0,photo.width,photo.height)
  }

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "/api/upload/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.photoRef)
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
          <video ref={videoRef} className="container" style={{width:'50vw', height:'30vw'}}></video>
          <div style={{marginLeft:315,marginTop:20}}><button onClick={takePicture} style={{background:'black',width:150}} className="btn container text-white">Take Picture</button></div>
          <canvas className="container" style={{display: 'none'}} ref={photoRef}></canvas>
          <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Take Picture" />
    </form>
          <br/><br/>
        </div>

      </CardBody>
    </Card>

    </div>
  );
}
 
export default Cam; 