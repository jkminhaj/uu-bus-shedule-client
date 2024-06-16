import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        // old one 
        // <>
        //     {/* main app */}
        //     <section>

        //         {/* top menubar */}
        //         <div>
        //             <TopMenu />
        //         </div>

        //         <div className="md:flex">

        //             {/* desktop nav : hidden in mobile device */}
        //             <div className="hidden md:block w-3/12">
        //                 <DeskTopNav />
        //             </div>

        //             {/* dynamic pages through outlet */}
        //             <div className="w-full">
        //                 <Outlet />
        //             </div>

        //             {/* mobile nav : hidden in desktop or tablet device */}
        //             <div className="block md:hidden">
        //                 <MobileNav />
        //             </div>
        //         </div>
        //     </section>
        // </>

        // lates one 
        <>
            <section>
                {/* main app */}
                <Dashboard></Dashboard>
            </section>
        </>
    )
}
export default App; 