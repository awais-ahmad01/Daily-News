
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact";
import PostComponent from "./components/Posts";
import Header from "./components/header";
import MainLayout from "./layout/mainLayout";


const Router = ()=>{

  return(
    <>

      <BrowserRouter>

        <Header/>

        <MainLayout>
          <Routes>

            <Route path="/" element={<Home/>}></Route>

            <Route path="contact" element={<Contact/>}></Route>

            <Route path="article/:id" element={<PostComponent/>}></Route>

          </Routes>
        </MainLayout>

      </BrowserRouter>
    
    </>
  )
}


export default Router;
