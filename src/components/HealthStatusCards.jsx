import {
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { healthMetrics } from "../data/HealthMetricsData";


const HealthStatusCard = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500 font-medium">This Week</span>
            <ChevronLeft className="w-4 h-4 text-gray-400 transform rotate-90" />
            </div>
            {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                <div className="text-2xl">{metric.icon}</div>
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{metric.title}</h3>
                    
                </div>
                </div>
                <p className="text-xs text-gray-500 my-2">{metric.subtitle}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className={`h-2.5 rounded-full ${metric.color} transition-all duration-500`} 
                    style={{width: `${metric.progress}%`}}
                ></div>
                </div>
            </div>
            ))}
            
            <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500 font-medium">Details</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
        </div>
    );
};

export default HealthStatusCard;