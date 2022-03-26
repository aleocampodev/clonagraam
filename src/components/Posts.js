import React, { useEffect, useState } from "react";
import { Card, Button, CardHeader } from "reactstrap";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../Firebase";
import { useAuth } from "../hooks/UseAuth";
import EditPost from "./EditPost";

function Posts() {
  const [posts, setPosts] = useState([]);

  const { userAuth } = useAuth();

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot, "holah");
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(posts, "holihkask");

  return (
    <div className="flex-grow-1">
      {posts &&
        posts.map((post) => {
          console.log(post.data.image, "hola");
          return (
            <Card color="white" className="w-100 m-3" key={post.id}>
              <CardHeader>
                <p>{post.data.userName}</p>
              </CardHeader>
              <img src={post.data.image} className="w-100" />
              <p>{post.data.description}</p>
              {post.data.userId === userAuth.uid ? (
                <Button onClick={() => handleDelete(post.id)}>Delete</Button>
              ) : null}
              {post.data.userId === userAuth.uid ? (
                <EditPost
                  toEditImage={post.data.image}
                  toEditDescription={post.data.description}
                  id={post.id}
                />
              ) : null}
            </Card>
          );
        })}
    </div>
  );
}

export default Posts;
