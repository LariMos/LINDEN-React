import React from 'react';

function MonthScroller() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleMonthClick = (month) => {
        console.log("Selected month:", month);
        // Handle month selection logic here.
    };

    return (
        <div className="overflow-y-auto h-64 w-24 border border-gray-300">
            {months.map(month => (
                <div
                    key={month}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200 text-center"
                    onClick={() => handleMonthClick(month)}
                >
                    {month}
                </div>
            ))}
        </div>
    );
}

export default MonthScroller;
