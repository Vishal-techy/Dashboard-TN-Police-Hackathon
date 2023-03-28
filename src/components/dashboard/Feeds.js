import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from 'reactstrap';

const FeedData = [
  {
    title: 'TN29 AD0000 -',
    title1: 'OMR Main Road',
    icon: 'bi bi-bell',
    color: 'danger',
    date: '6 minute ago',
    id: 1,
  },
  {
    title: 'KL42 RE1324 -',
    title1: 'Crossed Border',
    icon: 'bi bi-bell',
    color: 'dark',
    date: '6 minute ago',
    id: 5,
  },
  {
    title: 'TN31 HY3050 -',
    title1: 'Chennai NH',
    icon: 'bi bi-bell',
    color: 'danger',
    date: '6 minute ago',
    id: 1,
  },
  {
    title: 'TN20 NM1011 -',
    title1: 'OMR Main Road',
    icon: 'bi bi-bell',
    color: 'danger',
    date: '6 minute ago',
    id: 1,
  },
  {
    title: 'KA01 DF9224 -',
    title1: 'Crossed Border',
    icon: 'bi bi-bell',
    color: 'dark',
    date: '6 minute ago',
    id: 5,
  },
];

const Feeds = () => {
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
