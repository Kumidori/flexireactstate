import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import {Icon, Segment, Checkbox} from 'semantic-ui-react';

const Courses = () => {
    return (
        <div>
            <HeaderBlock title="Profil"/>
            <Icon name='user circle outline'size='huge' className='profilIcon'/>
            <div>
                <Segment vertical textAlign='center' style={{marginTop: 10+'%'}}>Maria Mustermann</Segment>
                <Segment vertical textAlign='center'>Studiengang OMB</Segment>
                <Segment vertical textAlign='center'>Semester    5</Segment>
            </div>
            <div>
                <Segment vertical textAlign='center' style={{marginTop: 60+'%'}}><Checkbox toggle label={{ children: 'Notifications' }} defaultChecked='true'/></Segment>
                <Segment vertical textAlign='center'><Icon name='sign out'/>Logout</Segment>
            </div>
            <TabNaviBottom activeItem="profile"/>
        </div>
    )
};

export default Courses;