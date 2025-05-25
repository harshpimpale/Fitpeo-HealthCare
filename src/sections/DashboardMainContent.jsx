import ActivityFeed from "../components/ActivityFeed";
import Anatomy from "../components/AnatomySection";
import CalendarView from "../components/CalendarView";
import HealthStatusCard from "../components/HealthStatusCards";
import UpcomingSchedule from "../components/UpcomingSchedule";


const Dashboard = () => {
    return (
            <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-b-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    
                    {/* Left Column */}
                    <div className="space-y-8">
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
                            <Anatomy />
                            <HealthStatusCard />
                        </div>

                        <ActivityFeed />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <CalendarView />
                        <UpcomingSchedule />
                    </div>

                </div>
            </main>
    );
}

export default Dashboard;