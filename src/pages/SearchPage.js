import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import YearScroller from '../components/YearScroller';
import MonthScroller from '../components/MonthScroller';
import Arrow from '../svg/arrow.svg';
import Footer from '../components/Footer';

const API = 'https://linden-backend-git-verceldeploy-larimos.vercel.app';

function SearchPage() {
    const navigate = useNavigate();
    const [inputYear, setInputYear] = useState("");
    const [inputMonth, setInputMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [yearPrompt, setYearPrompt] = useState(false);
    const targetRef = useRef(null);
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(null);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const scrollToNextDiv = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fetchArticles = (year, month) => {
        let url = `${API}/api/articles?year=${year}`;
        if (month) {
            url += `&month=${month}`;
        }

        axios.get(url)
            .then(response => {
                navigate(`/articles`, { state: { articles: response.data } });
            })
            .catch(error => {
                console.error("Error fetching articles:", error);
            });
    };

    const handleYearInputChange = (e) => {
        const yearValue = e.target.value;
        setInputYear(yearValue);
        setSelectedYear(yearValue);
    }

    const handleMonthInputChange = (e) => {
        const monthValue = e.target.value.toLowerCase();
        setInputMonth(monthValue);

        const monthIndex = months.findIndex(month => month.toLowerCase() === monthValue);
        if (monthIndex !== -1) {
            setSelectedMonthIndex(monthIndex);
            setSelectedMonth(monthIndex + 1);
            setInputMonth(months[monthIndex]);
        }
    };

    const handleYearChange = (year) => {
        setSelectedYear(year);
        setInputYear(year);
    }

    const handleMonthChange = (monthIndex) => {
        setSelectedMonthIndex(monthIndex);
        setSelectedMonth(monthIndex + 1);
        setInputMonth(months[monthIndex]);
    };

    const handleSearch = () => {
        if (!selectedYear) {
            setYearPrompt(true);
            return;
        }
        fetchArticles(selectedYear, selectedMonth);
    };

    return (
        <div className="relative h-screen">
            <div className="relative h-full z-10 flex flex-col justify-center items-center leading-none mx-3 lg:mt-0 md:mt-0">
                <div className="lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio">START</div>
                <div className="lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio">BROWSING</div>
                <div className="mt-5 lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio bg-gradient-to-r from-bermuda to-amber-200 text-transparent bg-clip-text">LINDEN</div>
                <div className="text-xl lg:text-3xl md:text-2xl sm:text-xl font-archivio leading-6 lg:leading-8">FOR ARTICLES FROM <span className="font-chomsky md:text-4xl lg:text-6xl sm:text-xl">The New York Times</span></div>
                <div className="absolute bottom-40 left-8 flex flex-col items-center font-archivio">
                   <div className="hover-target text-lg mb-2" onClick={scrollToNextDiv}>Slide Down</div>
                   <img src={Arrow} alt="Arrow pointing down" className="hover-target"  onClick={scrollToNextDiv} />
                </div>
            </div>
            <div ref={targetRef} className="flex h-full bg-amber-100 flex-col items-center justify-center">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="text-left mt-12 mb-4 w-1/3 mx-auto font-poppins-900 font-bold text-xl lg:text-3xl leading-loose">*Type the year and month</div>
                    {/* <div className="text-center mb-16 w-1/3 mx-auto font-poppins-900 font-bold text-2xl lg:text-6xl leading-loose">Year and Month</div> */}
                    <div className="flex space-x-4 mb-4">
                        <input 
                            type="text" 
                            placeholder="Year" 
                            value={inputYear} 
                            onChange={handleYearInputChange}
                            className="scroller border-4 border-black rounded-lg p-2 scroller text-center text-5xl"
                        />
                        <input 
                            type="text" 
                            placeholder="Month" 
                            value={inputMonth}
                            onChange={handleMonthInputChange}
                            className="border-4 border-black rounded-lg scroller p-2 text-5xl text-center"
                        />
                    </div>
                    <div className="text-left mt-12 mb-4 w-1/3 mx-auto font-poppins-900 font-bold text-xl lg:text-3xl leading-loose">*Or use the scroll to select them</div>
                    <div className="flex space-x-4">
                    <YearScroller selectedYear={selectedYear} onYearSelect={handleYearChange} />
                    <MonthScroller selectedMonthIndex={selectedMonthIndex} onMonthSelect={handleMonthChange} />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        {yearPrompt && <p className="mt-12 mb-4 text-left text-red text-xl lg:text-3xl">Please select a year and month</p>}
                        <button 
                            className="mt-12 mb-32 hover-target border-4 border-black bg-white hover:bg-tahiti-500 text-black font-bold py-4 px-8 mt-4 rounded text-xl lg:text-3xl w-[615px]"
                            onClick={handleSearch}
                        >
                            CLICK TO GET ARTICLES
                        </button>
                    </div>
                </LocalizationProvider>
            </div>

            <Footer />
        </div>
    );
}

export default SearchPage;
