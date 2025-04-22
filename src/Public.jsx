import Navbar from "./component/navbar";
import { Outlet } from "react-router-dom";

export default function Public() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}