import { activityData } from "../data/ActivityData";


const ActivityFeed = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
            <span className="text-sm text-gray-500">3 appointment on this week</span>
        </div>
        
        <div className="h-48 flex items-end justify-between space-x-3">
            {activityData.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-full flex flex-col justify-end h-40">
                <div 
                    className="w-full bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-t-lg transition-all duration-500 hover:from-cyan-500 hover:to-cyan-400" 
                    style={{height: `${item.height}%`}}
                ></div>
                </div>
                <span className="text-xs text-gray-500 mt-2 font-medium">{item.day}</span>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ActivityFeed;