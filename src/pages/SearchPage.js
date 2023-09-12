import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Assuming you have axios installed
// import lindenImage from '../images/linden.jpeg';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { YearCalendar, MonthCalendar } from '@mui/x-date-pickers';
import MouseAnimation from '../components/MouseAnimation';

const API = 'https://linden-backend-git-verceldeploy-larimos.vercel.app';

function HomePage() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [yearPrompt, setYearPrompt] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchArticles = (year, month) => {
    let url = `${API}/api/articles?year=${year}`;
    if (month) {
      url += `&month=${month}`;
    }

    axios.get(url)
      .then(response => {
        setArticles(response.data);
        navigate(`/articles`, { state: { articles: response.data } });  // Passing articles as state to next page
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
        {/* // <div
        //   className="bg-cover bg-center h-screen text-xl"
        //   style={{ backgroundImage: `url(${lindenImage})` }}
        // > */}
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex space-x-6 p-10">
              <div className="bg-white flex-1 p-4 rounded">
              <YearCalendar
                onChange={(date) => {
                setSelectedYear(date.year());
                setYearPrompt(false);
                }}
              />
              </div>
              <div className="bg-white flex-1 p-4 rounded">
                <MonthCalendar
                  onChange={(date) => setSelectedMonth(date.month() + 1)}  // Month in JS is 0-indexed, but commonly we use 1-12
                />
              </div>
            </div>
            <div className="p-10">
              {yearPrompt && <p className="text-red-500">Please select a year.</p>}
              <button 
                className="hover-target bg-tahiti-500 hover:bg-tahiti-700 text-white font-bold py-2 px-4 mt-4 rounded"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </LocalizationProvider>
        </div>
      );
    }
    
    export default HomePage;