import React, { useContext, useEffect, useRef, useState } from "react";
import "../../assets/scss/_headerHospitalProfile.scss";
import { AiFillStar } from "react-icons/ai";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { FiEdit } from "react-icons/fi";
import { db, storage } from "../firebase/config";
import { AuthContext } from "../../context/AuthProvider";

const Header = ({ logo, name, coverPhoto, documentId }) => {
  const coverRef = useRef();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [progress, setProgress] = useState(0);

  const logoRef = useRef();
  const [logomodal, setlogoModal] = useState(false);
  const togglelogo = () => setlogoModal(!logomodal);
  const [logoProgress, setLogoProgress] = useState(0);
  const { user } = useContext(AuthContext);

  const changeImg = (e, type, ref) => {
    const file = e.target.files[0];
    const storageRef = storage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        if (type == "logo") {
          setLogoProgress(Math.ceil(percent));
        } else {
          setProgress(Math.ceil(percent));
        }
      },
      (err) => console.log(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        await db
          .collection("hospitals")
          .doc(documentId)
          .update({
            [type]: url,
          });
      }
    );
  };

  useEffect(() => {
    if (progress === 100) {
      setProgress(0);
      coverRef.current.value = "";
      toggle();
    }
    if (logoProgress === 100) {
      setLogoProgress(0);
      logoRef.current.value = "";
      togglelogo();
    }
  }, [progress, logoProgress]);

  return (
    <div
      className="header section-cont"
      style={{ backgroundImage: `url(${coverPhoto})` }}
    >
      <div className="container  d-flex justify-content-center align-items-stretch h-100">

        <div className="logo-name_cont d-flex flex-column align-items-center align-self-end ">
          <div className="profile_logo mr-3 d-flex justify-content-between align-items-start position-relative">
            <img
              src={logo}
              alt="logo"
              className="rounded-circle w-100 shadow-lg rounded"
            />
            {user.uid === documentId && (
              <FiEdit
                className="my-3 position-absolute bttn text-dark h3 ml-3 rounded-circle rounded"
                onClick={togglelogo}
              />
            )}
          </div>
          <div>
            <h3 className="mb-0  rounded">{name}</h3>
          </div>
          <Modal isOpen={logomodal} fade={false} toggle={togglelogo}>
            <ModalHeader toggle={togglelogo}>Add Logo</ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <FormGroup>
                  <Label for="file">File</Label>
                  <Input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => {
                      changeImg(e, "logo", logoRef);
                    }}
                    ref={logoRef}
                  />
                </FormGroup>
              </Form>
              <div className="text-center">{progress}%</div>
              <Progress value={progress} max="100" />
            </ModalBody>
          </Modal>
        </div>
        <div> 
          <div className="w-100 text-right coverBtn">
            {user.uid === documentId && (
              <FiEdit
                className="h3 my-3 ml-auto text-right text-info bttn btn-margin "
                onClick={toggle}
              />
            )}
          </div>


          <Modal isOpen={modal} fade={false} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Photo</ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <FormGroup>
                  <Label for="file">File</Label>
                  <Input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => {
                      changeImg(e, "coverPhoto", coverRef);
                    }}
                    ref={coverRef}
                  />
                </FormGroup>
              </Form>
              <div className="text-center">{progress}%</div>
              <Progress value={progress} max="100" />
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
