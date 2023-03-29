import Image from "next/image";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user4,
    name: "TN 29 AJ 1609",
    email: "Hero Honda - Splendor",
    project: "No Permit",
    status: "holt",
    weeks: "Blue Black",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "21 BH 2345 AA",
    email: "Maruti Suzuki - Ertiga.",
    project: "Military or Government",
    status: "done",
    weeks: "White",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "TN 39 HT 4795",
    email: "KIA - Sonet",
    project: "Wanted",
    status: "pending",
    weeks: "Orange",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "TN 29 F 4714",
    email: "Royal Enfield - Meteor350",
    project: "No Permit",
    status: "holt",
    weeks: "Stellar Black",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "TN 32 AR 0493",
    email: "Skoda - Octavia",
    project: "Wanted",
    status: "pending",
    weeks: "Grey",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "21 BH 3365 AA",
    email: "Maruti Suzuki - Ertiga.",
    project: "Military or Government",
    status: "done",
    weeks: "White",
    // budget: "95K",
  },
];

const NumPlateTable = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Vehicle Details</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Categories of vehicle under the control
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Vehicle Number</th>
                <th>Record</th>

                <th>Status</th>
                <th>Color</th>
                {/* <th>Budget</th> */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      {/* <Image
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      /> */}
                      <div>
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3" />
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3" />
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default NumPlateTable;
