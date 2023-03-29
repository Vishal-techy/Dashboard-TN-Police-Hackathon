import React, {useEffect, useState} from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://scary-child.pockethost.io');
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from 'reactstrap';



// const FeedData = [
//   {
//     title: 'TN29 AD0000 -',
//     title1: 'OMR Main Road',
//     icon: 'bi bi-bell',
//     color: 'danger',
//     date: '6 minute ago',
//     id: 1,
//   },
//   {
//     title: 'KL42 RE1324 -',
//     title1: 'Crossed Border',
//     icon: 'bi bi-bell',
//     color: 'dark',
//     date: '6 minute ago',
//     id: 5,
//   },
//   {
//     title: 'TN31 HY3050 -',
//     title1: 'Chennai NH',
//     icon: 'bi bi-bell',
//     color: 'danger',
//     date: '6 minute ago',
//     id: 1,
//   },
//   {
//     title: 'TN20 NM1011 -',
//     title1: 'OMR Main Road',
//     icon: 'bi bi-bell',
//     color: 'danger',
//     date: '6 minute ago',
//     id: 1,
//   },
//   {
//     title: 'KA01 DF9224 -',
//     title1: 'Crossed Border',
//     icon: 'bi bi-bell',
//     color: 'dark',
//     date: '6 minute ago',
//     id: 5,
//   },
// ];



const Feeds = () => {
  const [FeedData, setFeedData] = useState([]);
  pb.autoCancellation(false)
  useEffect(() => {
    pb.collection('alerts').getFullList({
      sort: '-created',
   }).then((data) => {
    
    data.map((vehicles) => {
      console.log(vehicles);

      pb.collection('lost').getFullList({
        sort: '-created',
      }).then((data) => {
         data.map((data1) => {

           if(vehicles.data.data[0].plate != data1.number){
             if(vehicles.data.plateData.plateStatus == 'Not Found' && vehicles.data.data[0].plate != data1.number){
               setFeedData((FeedData) => [...FeedData, {title: vehicles.data.data[0].plate, title1: 'Spotted by CAM B', icon: 'bi bi-bell', color: 'dark', date: 'Fake number plate'}]);
              }
            }else if(vehicles.data.data[0].plate === data1.number){
              
              setFeedData((FeedData) => [...FeedData, {title: vehicles.data.data[0].plate, title1: 'Spotted by CAM B', icon: 'bi bi-bell', color: 'danger', date: 'Lost Vehicle'}]);
            }
         })
      })

    })
   })
  }, [])
 

  pb.collection('alerts').subscribe('*', function (e) {
    console.log(e.record.data);
   
    setFeedData((FeedData) => [...FeedData, {title: e.record.data.data[0].plate, title1: 'Spotted by CAM B', icon: 'bi bi-bell', color: 'dark',}]);
  });


  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Alerts</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Real-Time Notifications
        </CardSubtitle>
        <ListGroup flush className="mt-4">
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
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
