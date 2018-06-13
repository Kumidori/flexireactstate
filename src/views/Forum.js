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
query Posts($courseKey: String, $courseNodeId: String) {
    Posts(courseKey: $courseKey, courseNodeId: $courseNodeId) {
       key,
       title,
       body,
       author
     }
   }
`;


const Forum = (props) => (
    <Query 
    query={GET_POSTS}
    variables={{courseKey: props.data.Kurs.key,courseNodeId: props.data.Forum.courseNodeId}}
>
        {({ loading, error, data }) => {
            if (loading) return (
                <div className='all-center'>
                <img width="100" height="100" className="loader" src={loader} alt="loader"/>
                </div>
            );
        
            if (error) {
                console.log(props.route.data);
                console.log("test");
            return <div>Forum Error :(</div>;
                
                var str = data.Posts.body;
                console.log(data);
                
                var result = stringDivider(str, 40, "<p>", "</p>");
                
                
                function stringDivider(str, width, prefix, postfix) {
                    if (str.length>width) {
                        var p=width
                        for (;p>0 && !/\s/.test(str[p]); p--) {
                        }
                        if (p>0) {
                            var left = str.substring(0, p);
                            var right = str.substring(p+1);
                            return prefix + left + postfix + stringDivider(right, width, prefix, postfix);
                        }
                    }
                }
            }
            return (
                <div id='forum'>
                    <div>
                    {data.Posts.slice(0).reverse().map((element)=>(
                        
                         <Link to={{
                            pathname:`/courses/${props.data.Kurs.key}/post`,
                            state:{
                                courseKey: props.match.params.id,
                                courseNodeId: props.data.Forum.courseNodeId,
                                key: element.key
                            }
                            }}>
                        <div>
                        <Card className='forum' centered>
                            <Card.Content className='forumHeader'>
                            <Card.Header>{element.title}</Card.Header>
                            </Card.Content>
                            <Card.Content className='forumContent' >
                            <div dangerouslySetInnerHTML={{ __html: element.body }}  style={bodyStyle}/>
                            <Card.Description className='author'>Autor: {element.author}</Card.Description>
                            <Card.Description className='replies'>2 Antworten</Card.Description>
                            </Card.Content>
                        </Card>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
            )
        }}
    </Query>
);

export default Forum;