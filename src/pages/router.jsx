
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Games from "./Games";
import Login from "./login";
import Register from "./register";
import FindAssociations from '../pages/findAssociations'
import FindTournament from '../pages/findTounaments'
import FindFixture from '../pages/findFixture'
import AdminMatches from '../pages/Adminmatches'
import AdminBallbyball from "./adminBallbyball";


const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/layout" element={<Layout />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/games" element={<Games />} />
                <Route exact path="/admin" element={<AdminMatches />} />
                <Route exact path="/associations" element={<FindAssociations />} />
                <Route exact path="/tournaments/:key" element={<FindTournament />} />
                <Route exact path="/fixture/:key" element={<FindFixture />} />
                <Route exact path="/ballbyball/:key" element={<AdminBallbyball />} />
            </Routes>
        </HashRouter>

        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //         <Route path="/contact" element={<Contact />} />
        //     </Routes>
        // </BrowserRouter>
    )
}

export default Router;