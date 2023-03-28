import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const Map = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">CCTV Map View</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          OMR, Chennai
        </CardSubtitle>

        <div style={{marginBottom:'60%'}}>
            {/* Add Google Maps Here */}
        </div>

      </CardBody>
    </Card>
  );
};

export default Map;
