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
import Dialog from 'react-toolbox/lib/dialog';
import Table from 'react-toolbox/lib/table';
import {Tab, Tabs} from 'react-toolbox';


const users = [
    { Name: 'Final year 2011 zip', Year: '2010', Intake: 'June Intake' },
    { Name: 'Final year 2011 zip', Year: '2010', Intake: 'Normal Intake' },
    { Name: 'Final year 2011 zip', Year: '2010', Intake: 'June Intake' }
];


const users2 = [
    { Name: 'Mid term 2011 zip', Year: '2010', Intake: 'June Intake' },
    { Name: 'Mid Term 2011 zip', Year: '2010', Intake: 'Normal Intake' },
    { Name: 'Mid Term year 2011 zip', Year: '2010', Intake: 'June Intake' }
];

const UserModel = {
    Name: { type: String },
    Year: { type: String },
    Intake: { type: String }
};

class Papers extends React.Component {
    state = { selected: [], source: users, source2: users2, active: false, index: 1 };

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

          if(initial.indexOf(selected[0]) == -1){
              initial.push(selected[0]);
              console.log(initial);
              
          }
        this.setState({ selected : initial});
    };

    handleToggle = () => {
        this.setState({ active: !this.state.active });
    }

    actions = [

        { label: "Downlaod ", onClick: this.handleToggle },
          { label: "Cancel", onClick: this.handleToggle },

    ];

    render() {

        return (
            <div style={styles.main}>
                <PastPaper func={this.handleToggle} style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>
                <PastPaper style={styles.subjectItem}/>

                <Dialog
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}

                    >
                    <Tabs style={{display:'flex'}} index={this.state.index} onChange={this.handleTabChange}>
                        <Tab style={{flex:1}} label='Finals'>
                            <Table
                                model={UserModel}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                               
                                multiSelectable
                                selected={this.state.selected}
                                source={this.state.source}
                                />

                        </Tab>
                        <Tab style={{flex:1}} label='Mid Term' >

                            <Table
                                editable = {false}
                                model={UserModel}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                                multiSelectable
                                selected={this.state.selected}
                                source={this.state.source2}
                                />
                        </Tab>

                    </Tabs>

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



export default Papers;