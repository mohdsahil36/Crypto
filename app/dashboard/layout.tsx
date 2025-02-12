import DashboardNavbar from "./components/dashboard-navbar";

export default function DashboardLayout({
    children
}:{
    children:React.ReactNode;
}){
    return(
        <div className='h-screen w-5/6 md:w-3/4 mx-auto py-3 md:py-7'>
            <DashboardNavbar/>
            {children}
        </div>
    )
}