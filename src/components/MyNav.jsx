import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
              <UncontrolledDropdown nav inNavbar>
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
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNav;
