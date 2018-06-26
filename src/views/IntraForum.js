import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card} from 'semantic-ui-react';
import loader from '../loader.gif'


var bodyStyle = {
    width: '280px'
};

const GET_POSTS = gql`
query Veranstaltungsnachrichten($id: String) {
    Veranstaltungsnachrichten(id: $id) {
        subject
        id
        count
        author
        date
        content {
            body
            authorB
            dateB
        }
    }
}
`;


const IntraForum = (props) => (
    <Query 
    query={GET_POSTS}
    variables={{id: props.data.Veranstaltungsdetails.id}}
>
        {({ loading, error, data }) => {
            if (loading) return (
                <div className='all-center'>
                <img width="100" height="100" className="loader" src={loader} alt="loader"/>
                </div>
            );
        
            if (error) {
            return <div>Forum Error :(</div>;
            }
            return (
                <div id='forum'>
                    <div className='main'>
                    {data.Veranstaltungsnachrichten.map((element)=>{
                        console.log(element.content)
                        return (
                         <Link key={element.id} to={{
                            pathname:`/intracourses/${props.data.Veranstaltungsdetails.id}/post`,
                            state:{
                                id: props.match.params.id,
                                content: element.content
                            }
                            }}>
                        <div>
                        <Card className='forum' centered>
                            <Card.Content className='forumHeader'>
                            <Card.Header>{element.subject}</Card.Header>
                            </Card.Content>
                            <Card.Content className='forumContent' >
                            <Card.Description className='author'>Autor: {element.author}</Card.Description>
                            <Card.Description className='replies'>{element.count} Antworten</Card.Description>
                            </Card.Content>
                        </Card>
                        </div>
                        </Link>
                    )})}
                    </div>
                </div>
            )
        }}
    </Query>
);

export default IntraForum;