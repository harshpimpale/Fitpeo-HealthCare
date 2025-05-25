import {
    Search,
    Bell,
    Plus
} from "lucide-react"
import UserPic from "../assets/user.png"


const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 rounded-r-xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 bg-white" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border bg-white text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-64"
                />
              </div>
              
              <button className="p-2 text-gray-400 hover:text-gray-600 bg-white border-gray-300 border-2 relative">
                <Bell className="w-5 h-5 text-gray-600 bg-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
              </button>
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                {/* <span className="text-white text-sm font-medium">S</span> */}
                <img src={UserPic} alt='User Pic' />
              </div>
              <button className="p-2 bg-[#3435A2] text-white rounded-lg hover:bg-cyan-600">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>
    );
};

export default Header;