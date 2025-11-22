import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Sidebar } from "./Sidebar";
import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";

export const MainLayout: React.FC = () => {

    const [menuShow , setMenushow] = useState(false);
    const [isMobView, setIsMobView] = useState(window.innerWidth < 786);


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                pauseOnHover
            />
            <section className="w-screen h-screen flex bg-blue-950">
                {((isMobView && !menuShow)) && (
                    <>
                        <div className="mt-2 ml-2 block md:hidden">
                    <NavBar
                        menuClick={() => setMenushow(prev => !prev)}
                    />
                </div>
                    </>
                )}

                <div className={`w-[300px] h-screen bg-white py-4 border-r border-gray-300 ${(isMobView && !menuShow) ? 'hidden' : 'block'}`}>
                    <Sidebar />
                </div>
                
                <div className="flex-grow h-full" onClick={() => setMenushow(false)}>
                    <Outlet />
                </div>
            </section>
        </>
    );
}