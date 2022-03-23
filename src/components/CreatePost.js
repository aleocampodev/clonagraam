import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import iconPlus from "../assets/plus.png";
import cameraIcon from "../assets/camera.png";
import { useAuth } from "../hooks/UseAuth";

const CreatePost = () => {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { create } = useAuth();

  const toggle = () => setModal(!modal);

  const onFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const createPost = (e) => {
    e.preventDefault();
    create({ description, image });
    e.target.reset();
  };
  return (
    <div style={{ display: "block" }}>
      <Button
        onClick={toggle}
        className="border-0 rounded-circle size-image ms-5"
        color="none"
      >
        <img src={iconPlus} alt="plus icon" className="iconPlus size-image" />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={createPost}>
          <div>
            <label htmlFor="file">
              <img
                src={cameraIcon}
                alt="camera icon"
                className="w-25 cursor-pointer"
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
