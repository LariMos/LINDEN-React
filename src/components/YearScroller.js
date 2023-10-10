import React, { useState, useEffect } from 'react';

function YearScroller({ onYearSelect, selectedYear }) {
    const [localSelectedYear, setLocalSelectedYear] = useState(selectedYear);
    const startYear = 1908;
    const endYear = 1930;
    const yearRefs = Array.from({ length: endYear - startYear + 1 }, (_, index) => React.createRef());

    useEffect(() => {
        setLocalSelectedYear(selectedYear);
    }, [selectedYear]);

    useEffect(() => {
        function scrollToYear() {
            if (localSelectedYear !== null && yearRefs[localSelectedYear - startYear]?.current) {
                yearRefs[localSelectedYear - startYear].current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }
        scrollToYear();
    }, [localSelectedYear, yearRefs]);

    const handleYearClick = (year) => {
        setLocalSelectedYear(year);
        if (onYearSelect) {
            onYearSelect(year);
        }
    };

    return (
        <div className="scroller bg-white overflow-y-auto h-96 border-4 border-black rounded-lg">
            {Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index).map(year => (
                <div
                    ref={yearRefs[year - startYear]}
                    key={year}
                    className={`hover-target cursor-pointer px-20 py-10 text-center text-5xl border-b ${localSelectedYear === year ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
                    onClick={() => handleYearClick(year)}
                >
                    {year}
                </div>
            ))}
        </div>
    );
}

export default YearScroller;
