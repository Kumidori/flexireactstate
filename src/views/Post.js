import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card, Icon} from 'semantic-ui-react';
import loader from '../loader.gif'


const GET_SINGLE_POST = gql`
query Post($courseKey: String, $courseNodeId: String, $key: String) {
    Postings(courseKey: $courseKey, courseNodeId: $courseNodeId, key: $key) {
        key
        title
        body
        author
      }
   }
`;
var contentStyle = {
    borderLeft: '2px solid #3e3e3e',
  };
  var replyStyle = {
      paddingLeft: '8%'
  };
  var headline = {
      fontWeight: 500
  };

const Post = (props) => (
    <Query 
    query={GET_SINGLE_POST}
    variables={{
        courseKey: props.location.state.courseKey,
        courseNodeId: props.location.state.courseNodeId,
        key: props.location.state.key
    }}
>
        {({ loading, error, data }) => {
            if (loading) return (
                <div className='all-center'>
                <img width="100" height="100" className="loader" src={loader} alt="loader"/>
                </div>
            );
            if (error) return <div>Error :(</div>;
                console.log(data);
                
            return (
                    <div id='postings'>
                    {data.Postings.map((element, counter=0)=>(
                        <div>
                          
                          {
                              counter<1 ?
                              <div>
                            <Card className='post' centered>
                              <Card.Content style={contentStyle}>
                              <Icon name='comment outline' className='comment'/>
                              <Card.Header>{element.title}</Card.Header>
                              <div dangerouslySetInnerHTML={{ __html: element.body }} />
                              <Card.Description>Autor: {element.author}</Card.Description>
                              </Card.Content>
                            </Card>
                            </div>
                          :
                          <div>
                            <Card className='post' centered counter={counter++}>
                                <Card.Content style={replyStyle}>
                                <Icon name='comments outline' className='comment'/>
                                <Card.Header style={headline}>{element.title}</Card.Header>
                                <div dangerouslySetInnerHTML={{ __html: element.body }} />
                                <Card.Description>Autor: {element.author}</Card.Description>
                                </Card.Content>
                            </Card>
         
                            
                          
                        </div>
                        
                          }
                        
                         
                        </div>
                    ))}
                    </div>
            )
        }}
    </Query>
);

export default Post;