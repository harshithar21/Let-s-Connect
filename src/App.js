import { Routes, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/auth">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
