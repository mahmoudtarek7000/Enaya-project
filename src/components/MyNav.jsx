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
  const { user, userType } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [data, setdata] = useState(null);

  useEffect(() => {
    console.log(userType)
    if (userType && user) {
      db.collection(userType)
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            setdata({ ...doc.data(), id: doc.id });
          } else {
            console.log("No such document!");
          }
        });
    }
  }, [userType, user]);

  return (
    <div className="navb">
      <div className="container">
        <Navbar expand="md">
          <Link className="nav-link h4 logo" to="/">
            Enaya
          </Link>
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
                  <Link to="/bookdoc">
                    <DropdownItem>Book A Doctor</DropdownItem>
                  </Link>
                  <Link to="/reserveroom">
                    <DropdownItem>Reserve A Room</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <UncontrolledDropdown nav inNavbar>
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
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
          {user ? (
            <UncontrolledDropdown className="py-1">
              <DropdownToggle nav caret>
                {data?.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  onClick={() => {
                    auth.signOut();
                    localStorage.removeItem("user");
                    localStorage.removeItem("userDoc");
                  }}
                >
                  <Link className="text-dark" to="/">
                    Sign Out
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="text-dark" to = {`/${user.uid}`}>
                    View Profile
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <div className="d-flex">
              <Link className=" ml-3" to="/loghospital">
                Log In
              </Link>
              <Link className="ml-3" to="/signhospital">
                Sign Up
              </Link>
            </div>
          )}
        </Navbar>
      </div>
    </div>
  );
};

export default MyNav;
