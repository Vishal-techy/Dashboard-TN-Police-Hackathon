import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
import Head from "next/head";
import ProjectTables from "@/src/components/dashboard/ProjectTable";

const Grid = () => {
  return (
    <div>
      <Head>
        <title>Police Officers - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/***Table ***/}
      <Row>
          <Col lg="12" sm="12">
            <ProjectTables />
          </Col>
        </Row>
    </div>
  );
};

export default Grid;
