// BlogAdmin.js
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Configura tu Firebase (deberás reemplazar esto con tus credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyBStnnNuSIHFD87SPMKZTJ9sY6jTPuJgCE",
  authDomain: "mental-1bd81.firebaseapp.com",
  projectId: "mental-1bd81",
  storageBucket: "mental-1bd81.firebasestorage.app",
  messagingSenderId: "1072363875881",
  appId: "1:1072363875881:web:93172650577e451d6af638",
  measurementId: "G-88FYM77H2X",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const BlogAdmin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Cargar posts existentes
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(postsData);
  };

  // Manejar la subida de la imagen
  const handleImageUpload = async (file) => {
    if (!file) return null;

    const storageRef = ref(storage, `blog-images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progreso de la subida
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Error
          console.error("Error uploading image:", error);
          reject(error);
        },
        async () => {
          // Completado exitosamente
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  // Crear nuevo post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = null;
      if (image) {
        imageUrl = await handleImageUpload(image);
      }

      const postData = {
        title,
        content,
        imageUrl,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "posts"), postData);

      // Limpiar el formulario
      setTitle("");
      setContent("");
      setImage(null);

      // Recargar posts
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }

    setLoading(false);
  };

  // Eliminar post
  const handleDelete = async (postId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este post?")) {
      try {
        await deleteDoc(doc(db, "posts", postId));
        fetchPosts();
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Administrador del Blog</h1>

      {/* Formulario para nuevo post */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block mb-2">Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Contenido:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded h-32"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Publicando..." : "Publicar"}
        </button>
      </form>

      {/* Lista de posts existentes */}
      <div>
        <h2 className="text-xl font-bold mb-4">Posts Publicados</h2>
        {posts.map((post) => (
          <div key={post.id} className="border-b py-4">
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-gray-600 mb-2">
              {new Date(post.createdAt?.seconds * 1000).toLocaleDateString()}
            </p>
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-48 h-48 object-cover mb-2"
              />
            )}
            <p className="mb-2">{post.content}</p>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAdmin;
