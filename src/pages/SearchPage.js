import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import YearScroller from '../components/YearScroller';
import MonthScroller from '../components/MonthScroller';
const API = 'https://linden-backend-git-verceldeploy-larimos.vercel.app';

function SearchPage() {
    const navigate = useNavigate();
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [yearPrompt, setYearPrompt] = useState(false);

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
            <div className="flex h-full flex-col items-center justify-center mx-20">
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
