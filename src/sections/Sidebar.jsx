import {
    BarChart3,
    History,
    Calendar,
    Clock,
    Activity,
    MessageCircle,
    HelpCircle,
    Settings
} from "lucide-react"

const Sidebar = () => {

    return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col bg-white border-r border-gray-200 h-screen rounded-t-xl">
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            {/* <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div> */}
            <span className="ml-2 text-xl font-semibold">
              <span className="text-cyan-500">Health</span>
              <span className="text-gray-900">care.</span>
            </span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <nav className="flex-1 px-4 py-6 space-y-1">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">General</div>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg bg-cyan-50 text-cyan-700">
              <BarChart3 className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <History className="w-5 h-5 mr-3" />
              History
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-3" />
              Calendar
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <Clock className="w-5 h-5 mr-3" />
              Appointments
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <Activity className="w-5 h-5 mr-3" />
              Statistics
            </a>
            
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4 mt-8">Tools</div>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <MessageCircle className="w-5 h-5 mr-3" />
              Chat
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <HelpCircle className="w-5 h-5 mr-3" />
              Support
            </a>
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-3" />
              Setting
            </a>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;