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
import Table from 'react-toolbox/lib/table';
import {Tab, Tabs} from 'react-toolbox';


const users = [
    { Name: 'SPDC - JUNE INTAKE', Intake: 'June Intake', Type: 'Final', Year: '2015', Subject: 'SPDC', Actions: <Button style={{ maxWidth: '0', padding: 0 }}  primary label="Download"/> },
];

const UserModel = {
    Name: { type: String },
    Subject: { type: String },

    Year: { type: Number },
    Intake: { type: Number },
    Type: { type: Number },
    Actions: { type: Button },

};

class Answers extends React.Component {

    state = { selected: [], source: users, index: 1 };

    handleChange = (row, key, value) => {
        const source = this.state.source;
        source[row][key] = value;
        this.setState({ source });
    };

    handleSelect = (selected) => {
        this.setState({ selected });
    };


    handleTabChange = (index) => {
        this.setState({ index });
    };
    render() {

        return (
            <div style={styles.main}>

                <Card >



                    <Tabs index={this.state.index} onChange={this.handleTabChange}>
                        <Tab label='Final Answers'>
                            <Table
                                model={UserModel}
                                onSelect={this.handleSelect}
                                editable = {false}
                                selectable = {false}
                                source={this.state.source}
                                />
                        </Tab>
                        <Tab label='Mid Answers'>
                            <Table
                                model={UserModel}
                                onSelect={this.handleSelect}
                                editable = {false}
                                selectable = {false}
                                source={this.state.source}
                                />

                        </Tab>

                    </Tabs>
                </Card>
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



export default Answers;