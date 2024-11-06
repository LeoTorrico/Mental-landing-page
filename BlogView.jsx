// BlogView.js
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const BlogView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const db = getFirestore();
      const postsQuery = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(postsQuery);
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(postsData);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Cargando...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-600 mb-4">
              {new Date(post.createdAt?.seconds * 1000).toLocaleDateString()}
            </p>
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogView;
