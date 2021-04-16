import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { auth, db } from "./firebase/config";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { SignalCellularNull } from "@material-ui/icons";

const MyNav = (props) => {
  const { user, userRole } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [date, setdata] = useState(null)

  useEffect(() => {
    if (userRole && user) {
      console.log(user.uid, userRole)
      db.collection(userRole)
      .doc(user.uid)
      .onSnapshot((doc) => {
        console.log("object")
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setdata({...doc.data(), id : doc.id})
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });

    }
  }, [userRole, user]);

  return (
    <div className="navb">
      <div className="container">
        <Navbar expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  How To
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/bookdoctor">
                    <DropdownItem>Book A Doctor</DropdownItem>
                  </Link>
                  <Link to="/reserveroom">
                    <DropdownItem>Reserve A Room</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Search By
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Location</DropdownItem>
                  <DropdownItem>Speciality</DropdownItem>
                  <DropdownItem>Insurance</DropdownItem>
                  <DropdownItem>Hospitals</DropdownItem>
                  <DropdownItem>Available Intensive Care Room</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {user ? (
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  {data && <p>{data.name}</p>}
                </button>
              ) : (
                <div className="d-flex">
                  <NavItem>
                    <Link
                      className="nav-link btn btn-primary ml-2"
                      to="/loghospital"
                    >
                      LOG IN
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link btn btn-primary ml-2"
                      to="/signhospital"
                    >
                      Sign Up
                    </Link>
                  </NavItem>
                </div>
              )}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SIGN UP
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/signhospital"><DropdownItem>HOSPITAL</DropdownItem></Link>
                  <Link to="/signpateint"><DropdownItem>PATIENT</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  LOG IN
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/loghospital"><DropdownItem>HOSPITAL</DropdownItem></Link>
                  <Link to="/logpateint"><DropdownItem>PATIENT</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNav;
