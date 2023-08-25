import {Outlet, Link} from "react-router-dom";

function MainLayout(){
    return(
        <>
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