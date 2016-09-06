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
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';

import Lecturer from './Lecturer';



class Lecturers extends React.Component {

    state = { active: false };

    handleChange = (row, key, value) => {
        const source = this.state.source;
        source[row][key] = value;
        this.setState({ source });
    };

    handleTabChange = (index) => {
        this.setState({ index });
    };
    handleSelect = (selected) => {
        console.log(selected);
        let initial = this.state.selected;

        if (initial.indexOf(selected[0]) == -1) {
            initial.push(selected[0]);
            console.log(initial);

        }
        this.setState({ selected: initial });
    };

    handleToggle = () => {
        this.setState({ active: !this.state.active });
    }

    actions = [


        { label: "Request Delete ", onClick: this.handleToggle, primary: '' },
        { label: "Update ", onClick: this.handleToggle },
        { label: "Cancel", onClick: this.handleToggle },

    ];


    render() {

        return (
            <div style={styles.main}>
                <Lecturer func={this.handleToggle}  style={styles.subjectItem}/>
                <Lecturer style={styles.subjectItem}/>
                <Lecturer style={styles.subjectItem}/>
                <Lecturer style={styles.subjectItem}/>
                <Lecturer style={styles.subjectItem}/>
                <Lecturer style={styles.subjectItem}/>





                <Dialog
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}

                    >
                    <h5>Update Lecturer </h5>
                    <Input type='text' label='Lecturer Name' icon='perm_identity' value={this.state.email} onChange={this.handleChange.bind(this, 'email') } />
                    <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email') } />
                    <Input type='tel' label='Phone Extension' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone') } />

                </Dialog>



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



export default Lecturers;