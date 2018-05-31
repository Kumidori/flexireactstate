import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Icon, Card} from 'semantic-ui-react';




const GET_FILES_BY_HREF = gql`
query Files($href: String) {
    Files(href: $href) {
      href
      title
      size
    }
  }
  
`;


const Folder = (props) => (
    <Query 
    query={GET_FILES_BY_HREF}
    variables={{href: props.location.state.href}}
>
        {({ loading, error, data }) => {
            if (loading) return (
            <div>
                <HeaderBlock title="Kurse"/>
                <SubNavi activeItem="dateien"/>
                <div>
                    Kurse werden geladen...
                </div>
                <TabNaviBottom activeItem="courses"/>
            </div>
            );
            if (error) return <div>Error :(</div>;
                console.log(data);
            return (
                <div>
                    <HeaderBlock title="Dateien"/>
                    <SubNavi activeItem="dateien"/>
                    <div>
                    {data.Files.map((element)=>(
                        <div>
                            
                            {
                                element.size ?
                                <div>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='file outline' className='file'/>
                                    <Card.Header>
                                    <a download href={element.href}>{element.title}</a>
                                    </Card.Header>
                                    <Card.Description>{element.size} Byte</Card.Description>
                                    </Card.Content>
                                </Card>
                                </div>
                                :
                                <Link to={{
                                    pathname:"/Folder",
                                    state:{
                                        href:element.href
                                    }
                                    }}>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='folder outline' className='folder'/>
                                    <Card.Header>{element.title}</Card.Header>
                                    </Card.Content>
                                </Card>
                                </Link>
                            }
                            
                        </div>
                    ))}
                    </div>
                    <TabNaviBottom activeItem="courses"/>
                </div>
            )
        }}
    </Query>
);

export default Folder;