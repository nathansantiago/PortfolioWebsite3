import { Outlet } from "react-router-dom";
import Menu from "./Menu/Menu";

export default function Layout () {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
}