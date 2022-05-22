import { useCallback, useEffect,  useState } from "react"
import NewsContent from './NewsContent/NewsContent';
import NavInshorts from './NavInshort';
import axios from 'axios';
import apikey from './data/config';
import Footer from './Footer/Footer';

function TinTuc() {
  const [category, setCategory]= useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResulyts, setNewsResults] = useState();

  const newsApi =useCallback(async () => {
    try {

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=sg&apiKey=${apikey}&category=${category}`
        );

        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  useEffect(() => {
    newsApi();
    
  }, [newsResulyts, category, newsApi]);

   return (
    <div className="App">
      <NavInshorts setCategory={setCategory}/>

      <NewsContent newsArray={newsArray} newsResulyts={newsResulyts} />
      <Footer />
    </div>
  );
}

export default TinTuc;
