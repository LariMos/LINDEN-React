import React from 'react';

function YearScroller() {
    const startYear = 1908;
    const endYear = 2023;

    const handleYearClick = (year) => {
        console.log("Selected year:", year);
        // Handle year selection logic here.
    };

    return (
        <div className="overflow-y-auto h-64 w-24 border border-gray-300">
            {Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index).map(year => (
                <div
                    key={year}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200 text-center"
                    onClick={() => handleYearClick(year)}
                >
                    {year}
                </div>
            ))}
        </div>
    );
}

export default YearScroller;
