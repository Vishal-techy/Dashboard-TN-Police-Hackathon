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
                <div style={{width:'25vw', height:'15vw', backgroundColor:'white', borderRadius:5}} class="d-flex justify-content-center align-items-center">
                    <img width='100%' height='100%' src="http://10.10.30.38:8080/?action=stream" alt="" />
                </div>
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
