import React from "react";

const CreatePost = () => {
  const onFileChange = (e) => {
    const file = e.target.files[0];
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} className="display-none" />
        <input type="text" placeholder="description" />
        <input type="submit" value="post" />
      </form>
    </>
  );
};

export default CreatePost;
