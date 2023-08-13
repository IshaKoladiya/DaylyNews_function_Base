import React, {useState,useEffect} from "react";
import Newsiteam from "./Newsiteam";
import Header from "./Header";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

// import allNews from "./../SampleOutput.json";

const News = (props) => {
 

  // online API calling
  const [News, setNews] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [totalResults, settotleResults] = useState(0)
  const [pageSize, setpageSize] = useState(15)
  const [loader, setloader] = useState(false)


  const updateNews = async (page) => {
    // hide key
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&page=${page}&pageSize=${pageSize}`;
    props.pg(30);
    let N_news = await fetch(url);
    props.pg(60);
    let parseNews = await N_news.json();
    props.pg(80);
    //  console.log(N_news)
    //  console.log(parseNews);
   
    setloader(false)
    setNews( parseNews.articles)
    setPageNo(page)
    settotleResults(parseNews.totalResults)

    props.pg(100);
  }
  

  useEffect(() => {
    
    setloader(true);

    if(props.category !== "general"){
      document.title= props.category.charAt(0).toUpperCase() + props.category.slice(1) + ' Function Base Top Headline DailyNews, Todays News Headlines, Breaking News and Live ... '
    }
    else{
      document.title = "Function Base Top headline DailyNews, Today's News Headlines, Breaking News and Live ..."
    }
    updateNews(1);
  }, []);

  // infinet scroll 

  const fetchData = async () =>{

    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3012c6c600f64edb9653b0e545e7765a';
    let N_news = await fetch(url);
    let parseNews = await N_news.json();
     
    //  console.log(N_news)
     console.log(parseNews);

    // news concatination
    setloader(false);
    setNews(News.concat(parseNews.articles))
    setPageNo(pageNo+1)
    settotleResults( parseNews.totalResults)
    
    
  }

  
  
    const { mode } = props;
    return (
      <>
      <Header mode={mode} category={props.category} description={`Read today ${props.category} articles`}/>
        <div className="container-fluid" style={mode === "light" ? {background:"black", color:"white"} : {backgroud:"white", color:"black"}}>

        {/* infinet scroll  */}

        <InfiniteScroll
            dataLength={News.length} //This is important field to render the next data
            next={fetchData}
            hasMore={News.length<totalResults}
            loader={<Loader/>}>
          <div className="container"> 
            {/* class base state */}
            {/* <div className="row">
              <h1>Hello,{name}</h1>
              <h1>Hello,{counter}</h1>
              <button type='button' onClick={this.increment}> increment</button>
            </div> */}
            <div className="row">
              {loader && <Loader/>}
              {loader === false &&  News.map((single) => {
                return (
                  <Newsiteam key={single.title} title={single.title} description={single.description} image={single.urlToImage} url={single.url} author={single.author} publishedAt={single.publishedAt} mode={mode}/>
                );
               }
               )
              }
            </div>

            {/* button next previos */}
            {/* <div className="row">
              <div className="col text-end">
                <button type="button"className="btn btn-secondary mx-2" disabled={pageNo<=1} onClick={this.handlePrev}>&#8592; Previous</button>
                <button type="button" className="btn btn-secondary mx-2"  onClick={this.hendalNext}>Next&#8594;</button> */}
                {/* disabled={Math.ceil(totleResults/pageSize) <= pageNo}  */}
              {/* </div>
            </div> */}
          </div>
          </InfiniteScroll>
        </div>
      </>
    )
  
}

export default News;