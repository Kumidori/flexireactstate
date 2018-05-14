import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SingleNews from '../components/SingleNews'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';

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
                    <HeaderBlock title="News"/>
                    <div className="main">
                        News werden geladen...
                    </div>
                    <TabNaviBottom activeItem="news"/>
                </div>
            );
            if (error) return <div>Error :(</div>;
            return (
                <div>
                    <HeaderBlock title="News"/>
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