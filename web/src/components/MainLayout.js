import {Outlet, Link} from "react-router-dom";
import NavBar from "./NavBar";

function MainLayout(){
    return(
        <>
            <NavBar />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">projects</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default MainLayout;