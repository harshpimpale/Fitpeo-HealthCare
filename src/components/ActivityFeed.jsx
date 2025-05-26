import React from 'react';

const barData = [
  [
    [{ height: 90, color: '#cacad3' }],
    [{ height: 60, color: '#24b0d8' }],
    [{ height: 40, color: '#cacad3' }, { height: 30, color: '#cacad3' }],
    [{ height: 50, color: '#cacad3' }],
    [{ height: 40, color: '#24b0d8' }, { height: 50, color: '#3a3a94' }],
    [{ height: 50, color: '#3a3a94' }],
    [{ height: 15, color: '#cacad3' }, { height: 15, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 70, color: '#cacad3' }],
    [{ height: 30, color: '#24b0d8' }, { height: 20, color: '#3a3a94' }],
    [{ height: 40, color: '#3a3a94' }],
    [{ height: 40, color: '#cacad3' },{ height: 50, color: '#cacad3' }],
    [{ height: 60, color: '#24b0d8' }],
    [{ height: 20, color: '#24b0d8' },{ height: 30, color: '#3a3a94' }],
    [{ height: 40, color: '#cacad3' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 30, color: '#3a3a94' }],
    [{ height: 30, color: '#cacad3' },{ height: 20, color: '#cacad3' }],
    [{ height: 30, color: '#cacad3' }],
    [{ height: 50, color: '#24b0d8' },{ height: 40, color: '#3a3a94' }],
    [{ height: 20, color: '#24b0d8' }],
    [{ height: 40, color: '#cacad3' }, { height: 10, color: '#cacad3' }],
    [{ height: 50, color: '#3a3a94' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 30, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' },{ height: 30, color: '#3a3a94' }],
    [{ height: 30, color: '#3a3a94' }],
    [{ height: 50, color: '#cacad3' },{ height: 40, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' }],
    [{ height: 20, color: '#cacad3' },{ height: 20, color: '#cacad3' }],
    [{ height: 30, color: '#3a3a94' }],
  ],
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ActivityFeed = () => {
  return (
    <div className="bg-white p-5 rounded-2xl mt-5 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className='text-lg font-semibold text-[#1e1e6e]'>Activity</h3>
        <p className='text-sm text-[#888]'>3 appointments on this week</p>
      </div>
      <div className="flex items-end justify-center h-[100px] gap-2 mt-5 flex-nowrap relative">
        {barData[0].map((segments, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <div className="flex flex-col justify-end w-1 h-[100px] mb-2 gap-0.5 ">
              {segments.map((segment, i) => (
                <div
                  key={i}
                  className="w-full rounded"
                  style={{
                    height: `${segment.height}%`,
                    backgroundColor: segment.color,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-between py-2.5">
        {days.map((day, index) => (
          <div key={index} className="w-[calc(80% / 6) text-center font-light text-[#868697] text-sm ">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
