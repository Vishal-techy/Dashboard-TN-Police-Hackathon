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
    name: "Thiru Shankar Jiwal Ips, Cop",
    email: "cop.chncity@tncctns.gov.in",
    project: "Chennai City",
    status: "pending",
    weeks: "044-23452215",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "Thiru Prem Anand Sinha Ips South",
    email: "acop.losouth@tncctns.gov.in",
    project: "Chennai City",
    status: "done",
    weeks: "044-23452650",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "Thiru P.Mahendran",
    email: "dc.adyar@tncctns.gov.in",
    project: "Adyar",
    status: "holt",
    weeks: "044-23452601",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "Thiru T.S.Anbu, Ips North",
    email: "acop.lonorth@tncctns.gov.in",
    project: "Chennai City",
    status: "pending",
    weeks: "044-23452261",
    // budget: "95K",
  },
  {
    avatar: user4,
    name: "Thiru Kapil Kumar Saratkar Ips	",
    email: "acop.traffic@tncctns.gov.in",
    project: "Chennai City",
    status: "done",
    weeks: "044-23452550",
    // budget: "95K",
  },
];

const ProjectTables = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Police Officers</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Police Officers - Roles and Operations
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Officer Name</th>
                <th>Station</th>

                <th>Status</th>
                <th>Mobile</th>
                {/* <th>Budget</th> */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <Image
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
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

export default ProjectTables;
