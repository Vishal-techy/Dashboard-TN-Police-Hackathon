import { Badge, Button, Card, CardBody, CardTitle, Row, Col, CardSubtitle } from "reactstrap";
import Feeds from "../../src/components/dashboard/Feeds";
import Map from "@/src/components/dashboard/Map";
import CamFeed from "@/src/components/CamFeed";

const CamViews = () => {
  return (
    <div>
        <CardTitle tag="h5">Chennai, Tamil Nadu</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        Semmancheri
        </CardSubtitle>

        {/* CCTV Cam Feeds */}

        <div class="container align-items-center justify-content-center mt-4">
            <div class="row gap-4">
                <CamFeed/>
                <CamFeed/>
                <CamFeed/>
                <CamFeed/>
                <CamFeed/>
                <CamFeed/>

            </div>
        </div>
        
    </div>
  );
};

export default CamViews;
