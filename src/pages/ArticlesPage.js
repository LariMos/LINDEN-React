import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    return { year, month };
}

function ArticlesPage() {
    const location = useLocation();
    const articles = location.state?.articles || [];

    return (
        <div className="articles-page bg-gray-300 min-h-screen relative">
            
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 mb-6 text-center">
                <h1 className="text-[180px] font-archivio bg-gradient-to-r from-bermuda to-amber-200 text-transparent bg-clip-text">
                    {location.state?.year} {location.state?.month}
                </h1>
            </div>

            {articles.length === 0 && (
                <p className="text-red-500 font-poppins-900 font-bold text-3xl mt-20">No articles found for the selected year and month.</p>
            )}

            <div className="flex flex-col pt-32 mb-20 items-center gap-32">
                {articles.map((article, index) => {
                    const { year, month } = formatDate(article.date);

                    return (
                        <div key={index} className="article-wrapper w-full md:max-w-2xl">
                            <div className="article-card p-6 border-4 bg-white border-black rounded-lg shadow-md w-full mb-4">
                                {article.imageURL && (
                                    <img 
                                        src={article.imageURL} 
                                        alt={article.title} 
                                        className="w-full h-56 object-cover rounded mb-4"
                                    />
                                )}

                                <p className="text-xl font-poppins-900 font-bold mb-2">{year} {month}</p>
                                <h3 className="text-2xl lg:text-6xl font-poppins-900 font-bold mb-4">{article.title}</h3>
                                {article.summary && (
                                    <p className="text-xl lg:text-3xl font-poppins-900 font-bold mb-4">{article.summary}</p>
                                )}
                            </div>
                            <a 
                                href={article.webURL} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover-target block border-4 border-black bg-white hover:bg-tahiti-500 text-black font-bold py-4 px-8 rounded text-xl lg:text-3xl w-full text-center"
                            >
                                CLICK TO READ FULL ARTICLE
                            </a>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}

export default ArticlesPage;
