import {
    Stethoscope,
    Eye,
    Heart,
    Brain
} from "lucide-react"



const UpcomingSchedule = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">The Upcoming Schedule</h3>
            
            <div className="space-y-6">
                <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">On Thursday</h4>
                <div className="flex items-center sm:items-start sm:justify-start justify-between gap-3">
                    
                    <div className="p-3 bg-[#DDE2F9] text-indigo-900 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Stethoscope className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Health checkup complete</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">11:00 AM</span>
                    </div>
                    
                    <div className=" p-3 bg-[#DDE2F9] text-indigo-900 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Eye className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Ophthalmologist</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">14:00 PM</span>
                    </div>

                </div>
                </div>

                <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">On Saturday</h4>
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#DDE2F9] text-indigo-900 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Heart className="w-5 h-5 text-red-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Cardiologist</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">12:00 AM</span>
                    </div>
                    
                    <div className="p-3 bg-[#DDE2F9] text-indigo-900 rounded-xl">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Brain className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Neurologist</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">16:00 PM</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingSchedule;