import React, {useState} from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from 'reactstrap';

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://scary-child.pockethost.io');

const VehicleDetails = () => {
  
  pb.autoCancellation(false)
  const [number, setNumber] = useState()
  
  
  const markAsLost = () => {
      alert('Uploading')
      pb.collection('lost').create({"number": number, "status": "lost"}).then(() => {
        alert('Done')
        setNumber('')
      })
    
  }

  const handleChange = (e) => {
    setNumber(e.target.value)
  }
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Add Vehicle</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Enter Vehicle Details
        </CardSubtitle>
        {/* <ListGroup flush className="mt-4">
          {FeedData.map((feed) => (
            <ListGroupItem
              key={feed.id}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button className="rounded-circle me-3" size="sm" color={feed.color}>
                <i className={feed.icon} />
              </Button>
              {feed.title} <br />
              {feed.title1}
              <small className="ms-auto text-muted text-small">{feed.date}</small>
            </ListGroupItem>
          ))}
        </ListGroup> */}


        <div class="input-group mb-3 mt-3">
            <input type="text" class="form-control" placeholder="Vehicle Type" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-3" onChange={handleChange}>
            <input value={number} type="text" class="form-control" placeholder="Vehicle Number*" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Vehicle Color" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Vehicle Model" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Record" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Other marks on Vehicle" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        {/* <div class="input-group mb-3">
            <div class="custom-file">
                <input  type="file" class="custom-file-input" id="inputGroupFile01"/>
            </div>
        </div> */}

        <div class="d-flex justify-content-center align-items-center mt-3 container-fluid">
            <button  onClick={markAsLost} type="button" className="btn btn-dark" style={{paddingLeft:'35px', paddingRight:'35px'}}>Mark as lost</button>
        </div>

      </CardBody>
    </Card>
  );
};

export default VehicleDetails;
