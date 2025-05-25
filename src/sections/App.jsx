import Dashboard from "./DashboardMainContent";
import Header from "./Header";
import Sidebar from "./Sidebar";


const AppPage = () => {
    return (
            <div className="min-h-screen bg-gray-50 flex rounded-xl">
                <Sidebar />
                <div className=" flex-1 flex flex-col min-h-screen ">
                    <Header />
                    <Dashboard />
                </div>
            </div>
    );
}

export default AppPage;