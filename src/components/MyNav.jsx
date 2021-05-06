import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { auth, db } from "./firebase/config";
import { AiOutlineMenu } from "react-icons/ai";
import img4 from "../assets/images/img12.png"
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

const MyNav = () => {
  const { user, userType } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [data, setdata] = useState(null);
  const history = useHistory();
  useEffect(() => {
    console.log(userType);
    if (userType && user) {
      db.collection(userType)
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
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
          <Link className="nav-link logo" to="/">
           <img src={img4} className="img-fluid w-75 " alt="logo"/>
          </Link>
          <NavbarToggler onClick={toggle}>
            <AiOutlineMenu className="text-white" />
          </NavbarToggler>
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
              {user ? (
                <UncontrolledDropdown >
                  <DropdownToggle nav caret>
                    {data?.name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link className="text-dark" to={`/${user.uid}`}>
                        View Profile
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        auth.signOut();
                        localStorage.removeItem("user");
                        localStorage.removeItem("userDoc");
                        history.push("/")
                      }}
                    >
                      <Link className="text-dark" to="/">
                        Sign Out
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <div className="d-flex align-items-center">
                  <Link className=" ml-1 text-decoration-none" to="/loghospital">
                    Log In
                  </Link>
                  <Link className="ml-3 text-decoration-none" to="/signhospital">
                    Sign Up
                  </Link>
                </div>
              )}
            </Nav>
          </Collapse>
          {/* <button onClick={toggle}></button> */}
        </Navbar>
      </div>
    </div>
  );
};

export default MyNav;
