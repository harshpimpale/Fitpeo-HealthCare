import {
    Heart,
    Plus
} from "lucide-react"
import Human from "../assets/human.jpg"

const Anatomy = () => {
    return (
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 relative overflow-hidden">
            <div className="relative h-96 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
            {/* Human figure silhouette */}
            <div className="relative">
                

                <img src={Human} alt='Human Muscle Image' />
                
                {/* Heart indicator */}
                <div className="absolute top-28 right-1 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                <Heart className="w-3 h-3 mr-1 fill-current" />
                Healthy Heart
                </div>
            </div>
            
            <button className="absolute bottom-6 left-6 bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500 shadow-lg">
                Healthy Log
            </button>
            
            {/* Zoom Plus Icon */}
            <button className="absolute top-1 right-1 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center transition-all">
                <Plus className="w-4 h-4 text-gray-600 bg-gray-600" />
            </button>
            </div>
        </div>
    );
};

export default Anatomy;