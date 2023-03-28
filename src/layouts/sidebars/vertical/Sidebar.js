import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Alerts",
    href: "/ui/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Vehicle Tracking",
    href: "/ui/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Geo-Fencing",
    href: "/ui/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Recorded Footages",
    href: "/ui/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Police Officers",
    href: "/ui/grid",
    icon: "bi bi-columns",
  }
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        {/* <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button> */}
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
            <Link
              href={navi.href}
              className={
                location === navi.href
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }>

              <i className={navi.icon}></i>
              <span className="ms-3 d-inline-block">{navi.title}</span>

            </Link>
          </NavItem>
          ))}
          {/* <Button
            color="secondary"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-next-js-free-admin-template/"
          >
            Download Free
          </Button> */}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-5"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Emergency Alert
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
