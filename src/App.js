import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { UsersPage } from "./Components/UserPage/UsersPage";
import { PostList } from "./Components/PostList/PostList.jsx";
import { Post } from "./Components/Post/Post";
import DetailPage from "./Components/UserPage/DetailPage/DetailPage";
import UsersPhotosLists from "./Components/UserPage/DetailPage/UserDetailsComponent/UsersPhotosLists";
// import AddPost from "./Components/UserPage/DetailPage/UserDetailsComponent/AddPost";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* NavBar is the parent Component and All the other components are its child Component
      which will render using outlet property
            */}
          <Route path="/postlist" element={<PostList />} />
          <Route exact path="/postlist/:id" element={<Post />} />
          <Route path="/userspage" element={<UsersPage />} />
          <Route exact path="/userspage/:id" element={<DetailPage />} />
          <Route exact path="/usersphotos/:id" element={<UsersPhotosLists />} />
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
