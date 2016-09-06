import React from 'react';

import { render } from 'react-dom';
import { AppBar, Checkbox } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';
import Search from '../Home/Search';
import { Router, Route, Link } from 'react-router';


class Content extends React.Component {


    render() {
        return (
            <Layout>
                <NavDrawer   active={true}
                    pinned={true} permanentAt='xxxl'
                    >
                    <Card style={{ height: '100vh' }}>

                        <CardMedia
                            aspectRatio="wide"
                            image="http://i.imgur.com/58FymG1.jpg"
                            />

                        <CardTitle
                            title="SPDC"
                            subtitle="Software Engineering Design Concepts"
                            >


                        </CardTitle>


                        <List selectable ripple>

                            <Link to={'/papers'}> <ListItem caption='Past Papers' leftIcon='send' />  </Link>
                            <Link to={'/answers'}>  <ListItem caption='Sample Answers' leftIcon='thumb_up' /> </Link>
                            <Link to={'/assignments'}>   <ListItem caption='Tutorials & Assignments' leftIcon='info' /> </Link>
                            <Link to={'/lecturers'} ><ListItem caption='Lecturers In Charge' leftIcon='people' /> </Link>
                            <ListItem caption='Lecture Slides' leftIcon='view_carousel' />
                            <ListItem caption='Videos & Media' leftIcon='play_circle_filled' />

                        </List>

                    </Card>




                </NavDrawer>
                <Panel style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: '#FAFAFA' }}>
                        <Search placeholder = "Search Past Papers"/>
                    </div>
                    <div style={{ flex: 1, height: '100%', padding: 20, backgroundColor: '#F5F5F5' }}>

                        {this.props.children}
                    </div>
                </Panel>
            </Layout>
        );
    }
};

const styles = {
    container: {
        display: 'flex', flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', overflowY: 'auto', padding: '1.8rem', align: 'center'
    },
    subject: {
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    subjectItem: {
        flex: 1,
        margin: '10px'
    },
    drawer: {
        backgroundColor: '#800080'
    }
};
export default Content;