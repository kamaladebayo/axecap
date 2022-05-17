import Asset from './Asset';
import axios from 'axios';
import './Main.css'
import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
const Main = () => {
    const [data, setData] = useState(null)
    const [news, setNews] = useState(null)
    const [searchInput, setSearchInput] = useState('')
    // Make a request for a user with a given ID

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=4&page=1&sparkline=false')
        .then(function (response) {
            console.log(response);
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
    
        });

        // NEWS
        axios.get('https://gnews.io/api/v4/search?q=crypto&lang=en&token=b2fc134108f76f3c59b456a817026239')
        .then(function (response) {
            console.log(response);
            setNews(response.data.articles)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
    
        });
        
    }, [])
    
    
          
        
      
    return ( 
        <div className="main">
            {/* Search */}
            <div className="main__searchContainer">
                <ion-icon name="search-outline"></ion-icon>
                <input type="search" name="assets-search" id="assets-search" placeholder="Search" value={searchInput} onChange={e => {setSearchInput(e.target.value.toLowerCase())}}/>
            </div>
            
            {/* Hi, name */}
            <h1>Hi, Kamal</h1>
            {/* Tray! */}
            <div className="main__assetsTray">
                {/* {data? <Asset /> : <Asset />
                } */}
                {data? (data.map((asset) => (
                    <Asset assetName={asset.name} assetSymbol={asset.symbol} assetPrice={`USD ${asset.current_price.toLocaleString("en-US")}`} key={asset.market_cap_rank}/>
                    ))) : (
                        <div className='assetsTray__skeleton'>
                            <Asset />
                            <Asset />
                            <Asset />
                            <Asset />
                            <Asset />
                            <Asset />
                        </div>
                    )
                }
            </div>
            {/* News */}
            <h2 className='main__newsHeader'>Crypto News</h2>
            <div className="main__newsList">
                {/* <NewsCard />  */}
                {news? (news.map((newsCard) => (
                    <NewsCard 
                    newsTitle={newsCard.title} 
                    newsDescription={newsCard.description} 
                    newsSource={newsCard.source.name} 
                    newsSourceLink={newsCard.source.url}
                    newsLink={newsCard.url}
                    key={`${newsCard.publishedAt}kamal${Math.random()}`}
                    newsImage={newsCard.image}
                    />
                    ))) : (
                        <div className='newsList__skeleton'>
                            <NewsCard /> 
                            <NewsCard /> 
                            <NewsCard /> 
                            <NewsCard /> 
                        </div>
                    )
                }
            </div>
        </div>
     );
}
// newsTitle, newsSource, newsSourceLink, newsDescription, newsLink, newsImage
export default Main;