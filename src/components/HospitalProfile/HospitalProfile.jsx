import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import About from "./About";
import Gallery from "./Gallery";
import Header from "./Header";
import Rooms from "./Rooms";
import Specialities from "./Specialities";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { useParams } from "react-router";

const HospitalProfile = () => {

  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState(null);
  let { id : documentId } = useParams();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("hospitals")
      .doc(documentId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let document = doc.data();
          setData(document);
        } else {
          console.log("no document");
        }
      });
    return unsubscribe;
  }, []);

  return (
    <div>
      {data && (
        <Header
          logo={data.logo}
          name={data.name}
          coverPhoto={data.coverPhoto}
          documentId={documentId}
        />
      )}
      <div>
        <Nav tabs className="bg-light w-100">
          <NavItem className="btn">
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Gallery
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Specialities And Doctors
            </NavLink>
          </NavItem>
          {/* <NavItem className="btn">
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Rooms
            </NavLink>
          </NavItem> */}
        </Nav>
      </div>
      {data && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <About
              city={data?.address?.city}
              street={data?.address?.streetName}
              building={data?.address?.buildingNumber}
              governorate={data?.address?.governorate}
              phone={data?.phone}
              mobile={data?.mobile}
              documentId={documentId}
              intensiveCares ={data?.intensiveCares}
            />
          </TabPane>
          <TabPane tabId="2">
            <Gallery galleryImgs={data.gallery ? data.gallery : []} documentId={documentId} />
          </TabPane>
          <TabPane tabId="3">
            <Specialities
              specialitiesH={data.specialities ? data.specialities : {}}
              documentId={documentId}
              name={data.name}
            />
          </TabPane>
          <TabPane tabId="4">
            <Rooms rooms={data?.rooms} documentId={documentId} />
          </TabPane>
        </TabContent>
      )}
    </div>
  );
};

export default HospitalProfile;
