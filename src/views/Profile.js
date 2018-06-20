import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import {Icon, Segment, Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <HeaderBlock title="Profil" headerIcon='user'/>
            <Icon name='user circle outline'size='huge' className='profilIcon'/>
            <div>
                <Segment vertical textAlign='center' style={{marginTop: 10+'%'}}>Maria Mustermann</Segment>
                <Segment vertical textAlign='center'>Studiengang OMB</Segment>
                <Segment vertical textAlign='center'>Semester    5</Segment>
            </div>
            <div>
            <Link to='/'>
                <Segment vertical textAlign='center'><Icon name='sign out'/>Logout</Segment>
            </Link>
            </div>
            <TabNaviBottom activeItem="profile"/>
        </div>
    )
};

export default Courses;