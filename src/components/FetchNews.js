import axios from 'axios'
import React, { useState } from 'react'

export default function FetchNews() {
    const [news, setNews] = useState([])
    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=817bd84bddbf47abb549aa365ec181e4")
            .then((res) => {
                console.log(res)
                setNews(res.data.articles)
            })
    }
    return (
        <>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col-4'>
                        <button className='btn btn-primary' onClick={fetchNews}> Fetch News</button>

                    </div>

                </div>

            </div>
            <div className='container'>
                <div className='row'>
                    { news.map( (value) =>{
                        return(
                            <div className='col-4'>
                        <div className="card" style={{width:"18rem"}}>
                            <img src={value.urlToImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                                <a href="#" className="btn btn-primary">{value.url}</a>
                            </div>
                        </div>
                    </div>
                        )
                    })
                    }
                </div>

            </div>

        </>
    )
}
