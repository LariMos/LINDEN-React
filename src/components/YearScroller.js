import React from 'react';

function YearScroller({ onYearSelect }) {
    const startYear = 1908;
    const endYear = 2023;

    const handleYearClick = (year) => {
        if (onYearSelect) {
            onYearSelect(year);
        }
    };

    return (
        <div className="overflow-y-auto h-96 w-120 border border-gray-300"> {/* Adjusted dimensions */}
            {Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index).map(year => (
                <div
                    key={year}
                    className="hover-target cursor-pointer px-20 py-10 hover:bg-gray-200 text-center text-5xl" 
                    onClick={() => handleYearClick(year)}
                >
                    {year}
                </div>
            ))}
        </div>
    );
}

export default YearScroller;
