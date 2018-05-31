import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';





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
                    <div className="main">
                    {data.Files.map((element)=>(
                        <div>
                            {
                                element.size ?
                                <a download href={element.href}>{element.title}</a>
                                :
                                <Link to={{
                                    pathname:"/Folder",
                                    state:{
                                        href:element.href
                                    }
                                    }}>
                                <div>{element.title}</div>
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