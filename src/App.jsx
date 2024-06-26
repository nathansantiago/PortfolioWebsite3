import { Routes, Route } from "react-router-dom";
import './App.scss'
import Layout from "./assets/Layout";
import IndexPage from "./pages/IndexPage/IndexPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<IndexPage/>} />
          <Route path={'/about'} element={<AboutPage/>} />
          <Route path={'/portfolio'} element={<PortfolioPage/>}/>
          <Route path={'/contact'} element={<ContactPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
