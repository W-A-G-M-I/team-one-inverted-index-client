
import { Route, Routes } from "react-router-dom"
import Authform from "./auth/authform/AuthLayout";
import Signin from "./auth/signin/Signin";
import Signup from "./auth/signup/Signup";
import { Toaster } from "react-hot-toast";


const App = () => {


  return (
    <main>
     <Routes>
       {/* auth route  */}
       <Route element={<Authform />}>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
       </Route>

       {/* page route  */}
       {/* <Route element={<RootLayout />}>
         <Route index element={<Home />} />
         <Route path="/explore" element={<Explore />} />
         <Route path="/saved" element={<Saved />} />
         <Route path="/all-users" element={<AllUsers />} />
         <Route path="/create-post" element={<CreatePost />} />
         <Route path="/update-post/:id" element={<EditPost />} />
         <Route path="/posts/:id" element={<PostDetails />} />
         <Route path="/profile/:id/*" element={<Profile />} />
         <Route path="/update-profile/:id" element={<UpdateProfile />} />
       </Route> */}
     </Routes>
     <Toaster />
    </main>
  )
}

export default App

