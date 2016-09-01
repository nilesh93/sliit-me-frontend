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
import PastPaper from './PastPaper';


class Papers extends React.Component {


    render() {

        return (
            <div style={styles.main}>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>

            </div>
        );
    }
};

const styles = {
    search: {},
    button: { flex: 1 },
    main: {
        padding: 20,
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
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
        margin: '10px',
    }
};



export default Papers;