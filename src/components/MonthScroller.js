import React, { useState, useEffect } from 'react';

function MonthScroller({ onMonthSelect, selectedMonthIndex }) {
    const [localSelectedMonth, setLocalSelectedMonth] = useState(selectedMonthIndex);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthRefs = months.map(() => React.createRef());

    // Update local state whenever the prop changes
    useEffect(() => {
        setLocalSelectedMonth(selectedMonthIndex);
    }, [selectedMonthIndex]);

    useEffect(() => {
        if (localSelectedMonth !== null && monthRefs[localSelectedMonth]?.current) {
            monthRefs[localSelectedMonth].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [localSelectedMonth]);
    

    const handleMonthClick = (monthIndex) => {
        setLocalSelectedMonth(monthIndex);
        if (onMonthSelect) {
            onMonthSelect(monthIndex);
        }
    };

    return (
        <div className="scroller bg-white overflow-y-auto h-96 border-4 border-black rounded-lg">
            {months.map((month, index) => (
                <div
                    ref={monthRefs[index]}
                    key={month}
                    className={`flex items-center justify-center hover-target cursor-pointer px-20 py-10 text-center text-5xl border-b ${localSelectedMonth === index ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
                    onClick={() => handleMonthClick(index)}
                >
                    {month}
                </div>
            ))}
        </div>
    );
}

export default MonthScroller;
