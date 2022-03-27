import React, { useState } from "react";
import {
  doc,
  serverTimestamp,
  updateDoc,
  setDoc,
  collection,
} from "firebase/firestore";
import { ref, uploadBytes, image, getDownloadURL } from "firebase/storage";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import cameraIcon from "../assets/camera.png";
import { db, storage } from "../Firebase";

const EditPost = ({ toEditDescription, toEditImage, id }) => {
  const [editDescription, setEditDescription] = useState(toEditDescription);
  const [editImage, setEditImage] = useState(toEditImage);

  console.log(editImage, "hola imagen");
  const [modal, setModal] = useState(false);

  const onFileChange = async (e) => {
    if (e.target.files[0]) {
      setEditImage(e.target.files[0]);
    }
    /*const file = e.target.files;
    console.log(file, "hello");*/
  };

  const toggle = () => setModal(!modal);

  console.log(id, "hola id");

  const handleUpdate = async (e) => {
    e.preventDefault();
    //const postDocRef = doc(db, "posts", id);
    const upload = ref(storage, `images/${editImage.name}`);
    const uploadPost = await uploadBytes(upload, editImage);

    const url = await getDownloadURL(uploadPost.ref);
    try {
      await updateDoc(doc(db, "posts", id), {
        image: url,
        description: editDescription,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button
        onClick={toggle}
        className="border-0 rounded-circle size-image ms-5"
        color="none"
      >
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="file">
              <img
                src={cameraIcon}
                alt="camera icon"
                className="w-25 pointer"
              />
            </label>
            <input
              type="file"
              onChange={onFileChange}
              id="file"
              className="d-none "
            />
          </div>
          <div>
            <img src={editImage} />
          </div>
          <div>
            <input
              type="text"
              placeholder="description"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Edit" className="bg-primary" />
          </div>
        </form>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditPost;
