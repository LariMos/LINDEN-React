import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import YearScroller from '../components/YearScroller';
import MonthScroller from '../components/MonthScroller';
import Arrow from '../svg/arrow.svg'; 
const API = 'https://linden-backend-git-verceldeploy-larimos.vercel.app';

function SearchPage() {
    const navigate = useNavigate();
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [yearPrompt, setYearPrompt] = useState(false);

    const targetRef = useRef(null);

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
          <div className="mt-5 lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio bg-gradient-to-r from-bermuda to-amber-200 text-transparent bg-clip-text ">LINDEN</div>
          <div className="text-xl lg:text-3xl md:text-2xl sm:text-xl font-archivio leading-6 lg:leading-8">
          FOR ARTICLES FROM <span className="font-chomsky md:text-4xl lg:text-6xl sm:text-xl">New York Times</span>
          </div>
          <div className='flex flex-row items-center mt-8 p-4'>
        <img src={Arrow} alt="Arrow pointing down" className="hover-target" onClick={scrollToNextDiv} />
        <div className='hover-target font-archivio text-lg animate-bounce ml-8' onClick={scrollToNextDiv}>Scroll Down</div>
        </div>
        </div>
            <div ref={targetRef} className="flex h-full flex-col items-center justify-center mx-20">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="flex space-x-4"> {/* Added flex container */}
                  <YearScroller onYearSelect={setSelectedYear} />
                  <MonthScroller onMonthSelect={setSelectedMonth} />
                </div>
                    <div className="w-full text-center">
                        {yearPrompt && <p className="text-red-500 text-20xl">Please select a year.</p>}
                        <button 
                            className="hover-target bg-tahiti-500 hover:bg-tahiti-700 text-white font-bold py-4 px-8 mt-4 rounded text-20xl"
                            onClick={handleSearch}
                        >
                            GET ARTICLES
                        </button>
                    </div>
                </LocalizationProvider>
            </div>
        </div>
    );
}

export default SearchPage;
