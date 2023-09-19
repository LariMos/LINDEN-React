import React from 'react';

function MonthScroller({ onMonthSelect }) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleMonthClick = (monthIndex) => {
        if (onMonthSelect) {
            onMonthSelect(monthIndex + 1); // To get the month number (1-12)
        }
    };

    return (
        <div className="overflow-y-auto h-96 w-120 border border-gray-300"> {/* Adjusted dimensions */}
            {months.map((month, index) => (
                <div
                    key={month}
                    className="hover-target cursor-pointer px-20 py-10 hover:bg-gray-200 text-center text-5xl" 
                    onClick={() => handleMonthClick(index)}
                >
                    {month}
                </div>
            ))}
        </div>
    );
}

export default MonthScroller;
