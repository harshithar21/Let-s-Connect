import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    const { data } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    setPosts(data || []);
  };

  const addPost = async () => {
    const user = supabase.auth.user();
    if (!user) return alert("Login first!");
    await supabase.from("posts").insert({ user_id: user.id, content });
    setContent("");
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h2>Feed</h2>
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="What's on your mind?" />
      <button onClick={addPost}>Post</button>
      <hr />
      {posts.map(post => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <small>{post.created_at}</small>
        </div>
      ))}
    </div>
  );
}
