import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import iconPlus from "../assets/plus.png";
import cameraIcon from "../assets/camera.png";
import { useAuth } from "../hooks/UseAuth";
import { app, storage, db } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
import {
  setDoc,
  doc,
  serverTimestamp,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";

const CreatePost = () => {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const { userAuth } = useAuth();

  const toggle = () => setModal(!modal);

  const onFileChange = async (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    /*const file = e.target.files;
    console.log(file, "hello");*/
  };

  const createPost = async (e) => {
    e.preventDefault();
    const upload = ref(storage, `images/${image.name}`);
    const uploadPost = await uploadBytes(upload, image);

    const url = await getDownloadURL(uploadPost.ref);

    await addDoc(collection(db, `posts`), {
      userId: userAuth.uid,
      userName: userAuth.userName,
      image: url,
      description: description,
      timestamp: serverTimestamp(),
    });
    setDescription("");
    setImage("");
  };

  return (
    <div style={{ display: "block" }}>
      <Button
        onClick={toggle}
        className="border-0 rounded-circle size-image ms-5"
        color="none"
      >
        <img
          src={iconPlus}
          alt="plus icon"
          className="iconPlus size-image iconPosition"
        />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={createPost}>
          <div>
            <label htmlFor="file" multiple>
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
            <img src={url} alt={userAuth.description} />
          </div>
          <div>
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Create" className="bg-primary" />
          </div>
        </form>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreatePost;
