import SideNav from "@/app/ui/dashboard/sidenav";


const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="flex flex-col md:flex-row md:overflow-hidden h-screen">
            <div className="w-full flex-none md:w-64">
                <SideNav></SideNav>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:pt-12">
                {children}
            </div>
        </div> 
    );
};

export default Layout;