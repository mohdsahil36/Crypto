import DashboardNavbar from "./components/dashboard-navbar";

export default function DashboardLayout({
    children
}:{
    children:React.ReactNode;
}){
    return(
        <div className='h-screen w-3/4 mx-auto py-8'>
            <DashboardNavbar/>
            {children}
        </div>
    )
}