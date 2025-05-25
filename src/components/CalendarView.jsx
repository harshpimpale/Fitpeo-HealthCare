import {
    ArrowLeft,
    ArrowRight
} from "lucide-react"
import { weekDays, timeSlots } from "../data/CalendarData";



const CalendarView = () => {
    return (
    <>
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-gray-900">May 2025</span>
                <div className="flex items-center space-x-3">
                {/* <span className="font-semibold text-gray-900">{currentWeek}</span> */}
                <div className="flex space-x-1">
                    <button className="p-1 hover:bg-gray-100 text-gray-600 bg-white rounded">
                    {/* <ChevronLeft className="w-4 h-4 text-gray-600 bg-gray-100" /> */}
                    <ArrowLeft className='w-4 h-4 text-gray-600' />
                    </button>
                    <button className="p-1 hover:bg-gray-100 text-gray-600 bg-white rounded">
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
                </div>
            </div>
            
            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
                {weekDays.map((day, index) => (
                <div key={index} className="text-center">
                    <div className="text-xs text-gray-500 mb-2 font-medium">{day.day}</div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold mx-auto transition-colors
                    ${day.date === '28' ? 'bg-[#3734A9] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                    {day.date}
                    </div>
                </div>
                ))}
            </div>
            
            {/* Time Slots Grid */}
            <div className="space-y-2">
                {timeSlots.map((timeRow, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-7 gap-1 items-center">
                    <div className="text-xs text-gray-500 font-medium text-right pr-2">{timeRow.time}</div>
                    {timeRow.slots.map((slot, colIndex) => (
                    <div key={colIndex} className={`h-6 rounded text-xs flex items-center justify-center font-medium ${
                        slot === '09:00' && colIndex === 1 ? 'bg-[#3734A9] text-white' :
                        slot === '11:00' && colIndex === 3 ? 'bg-purple-400 text-white' :
                        slot === '15:00' && colIndex === 5 ? 'bg-gray-300 text-gray-700' :
                        slot ? 'bg-[#ABAFD4] text-gray-600' : 'bg-white text-gray-600'
                        // 'bg-gray-100 text-gray-600'
                    }`}>
                        {
                        <span className="text-xs">{slot === '' ? "---": slot}</span>
                        } 
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </div>

        {/* <div className=" grid grid-cols-2 max-w-sm gap-6">
            <div className="bg-indigo-600 rounded-2xl p-5 text-white">
                <div className="flex items-start justify-between mb-3">
                <h6 className="font-semibold text-lg mb-1">Dentist</h6>
                <div className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">🦷</div>
                </div>
                
                <p className="text-sm opacity-90 mb-1">09:00-11:00</p>
                <p className="text-xs opacity-75">Dr Cameron Williamson</p>
            </div>

            <div className="bg-orange-400 rounded-2xl p-5 text-white ">
                <div className="flex items-start justify-between mb-3">
                <h6 className="font-semibold text-lg mb-1">Physiotherapy</h6>
                <div className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">📅</div>
                </div>
                
                <p className="text-sm opacity-90 mb-1">11:00-12:00</p>
                <p className="text-xs opacity-75">Dr Kevin Djores</p>
            </div>
        </div> */}
              <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#3734A9] text-white p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-bold">Dentist</h3>
            <div className="text-xl bg-opacity-20 px-2 py-1 rounded">🦷</div>
          </div>
          <p className="text-sm">09:00 - 11:00</p>
          <p className="text-sm">Dr. Cameron Williamson</p>
        </div>

        <div className="bg-[#DDE2F9] text-indigo-900 p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-bold">Physiotherapy Appointment</h3>
            <div className="text-xl bg-opacity-20 px-2 py-1 rounded">💪🏻</div>
          </div>
          <p className="text-sm">11:00 - 12:00</p>
          <p className="text-sm">Dr. Kevin Djones</p>
        </div>
      </div>
    </>

    );
};

export default CalendarView;