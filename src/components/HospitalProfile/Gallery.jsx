import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { AuthContext } from "../../context/AuthProvider";
import { db, storage } from "../firebase/config";

const Gallery = ({ galleryImgs, documentId }) => {
  const imgRef = useRef();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [progress, setProgress] = useState(0);
  const { user } = useContext(AuthContext);

  const changeImg = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(Math.ceil(percent));
      },
      (err) => console.log(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        await db
          .collection("hospitals")
          .doc(documentId)
          .update({
            gallery: [...galleryImgs, url],
          });
      }
    );
  };

  useEffect(() => {
    if (progress == 100) {
      setProgress(0);
      imgRef.current.value = "";
      toggle();
    }
  }, [progress]);

  const removeImg = (e) => {
    const newGallery = galleryImgs.filter((item) => item != e.target.id);
    db.collection("hospitals").doc(documentId).update({
      gallery: newGallery,
    });
  };

  return (
    <div className="section-cont">
      <div className="container">
        <h2 className="text-center mb-5">Gallery</h2>
        {user.uid === documentId && (
          <div className="text-center">
            <Button className=" my-3 bttn-primary px-4 py-2" onClick={toggle}>
              Add Photo
            </Button>
          </div>
        )}
        <div className="row">
          {galleryImgs &&
            galleryImgs.map((item, index) => {
              return (
                <div key={item + index} className="col-12 col-md-4 p-3">
                  <img src={item} alt="image1" className="w-100 img-gallery" />
                  {user.uid === documentId && (
                    <div className="text-center mt-auto">
                      <Button
                        className=" my-3 bttn-primary px-4 py-2"
                        id={item}
                        onClick={removeImg}
                      >
                        Delete Photo
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
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
                  onChange={changeImg}
                  ref={imgRef}
                />
              </FormGroup>
            </Form>
            <div className="text-center">{progress}%</div>
            <Progress value={progress} max="100" />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
