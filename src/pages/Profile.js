import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchProfile = async () => {
    const currentUser = supabase.auth.user();
    if (!currentUser) return;
    setUser(currentUser);
    const { data } = await supabase.from("posts").select("*").eq("user_id", currentUser.id);
    setPosts(data || []);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <p className="container">Login to see your profile</p>;

  return (
    <div className="container">
      <h2>{user.email}'s Profile</h2>
      <h3>Your Posts</h3>
      {posts.map(post => (
        <div key={post.id} className="post">
          {post.content}
        </div>
      ))}
    </div>
  );
}
