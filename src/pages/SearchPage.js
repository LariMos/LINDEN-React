import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { YearCalendar, MonthCalendar } from '@mui/x-date-pickers';
import MouseAnimation from '../components/MouseAnimation';

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
      <MouseAnimation />

      <div className="flex flex-col items-center justify-center mx-20">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="w-full flex justify-center text-20xl mb-4">
          <div className="bg-white p-4 rounded mr-4">
            <YearCalendar
              views={['year']}
              onChange={(date) => {
                setSelectedYear(date.year());
                setYearPrompt(false);
              }}
            />
          </div>
          <div className="bg-white p-4 rounded ml-4">
            <MonthCalendar
              views={['month']}
              onChange={(date) => setSelectedMonth(date.month() + 1)}
            />
          </div>
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
