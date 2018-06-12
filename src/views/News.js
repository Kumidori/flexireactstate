import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SingleNews from '../components/SingleNews'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import { Link } from 'react-router-dom'
import loader from '../loader.gif'

const GET_News = gql`
query{
    News {
    title
    sortDate
    message
    date
    time
  }
}
`;


const News = () => (
    <Query query={GET_News}>
        {({ loading, error, data }) => {
            if (loading) return (
                <div>
                    <HeaderBlock title="News" headerIcon='rss'/>
                    <div className='all-center'>
                    <img width="100" height="100" className="loader" src={loader} alt="loader"/>>
                    </div>
                    <TabNaviBottom activeItem="news"/>
                </div>
            );
            if (error) return (
                <div>
                    <HeaderBlock title="News" headerIcon='rss'/>
                    <div className="main">
                        News konnten nicht geladen werden, haben sie die RSS Feed URL korrekt eingegeben?
                    </div>
                    <Link to={`/`}>zurück zum Login</Link>
                    <TabNaviBottom activeItem="news"/>
                </div>
            );
            return (
                <div>
                    <HeaderBlock title="News" headerIcon='rss'/>
                    <div className="main">
                        {data.News.map((element,index)=>(
                            <SingleNews key={index} title={element.title} message={element.message} date={element.date} time={element.time}/>
                        ))}
                    </div>
                    <TabNaviBottom activeItem="news"/>
                </div>
            )
        }}
    </Query>
);

export default News;