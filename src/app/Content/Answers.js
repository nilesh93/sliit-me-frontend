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


const users = [
    { Name: 'SPDC - JUNE INTAKE', Year: '2015', Subject: 'SPDC', Actions: <Button label="Download"/> },
    { Name: 'SEP2 IT DECEMBER', Year: '2016', Subject: 'SEP2', Actions: <Button label="Download"/> }
];

const UserModel = {
    Name: { type: String },
    Subject: { type: String },
    Year: { type: Number },

    Actions: { type: Button,style:{
        backgroundColor : "#000"
    }}
};

class Answers extends React.Component {

    state = { selected: [], source: users };

    handleChange = (row, key, value) => {
        const source = this.state.source;
        source[row][key] = value;
        this.setState({ source });
    };

    handleSelect = (selected) => {
        this.setState({ selected });
    };

    render() {

        return (
            <div style={styles.main}>

                <Card >
                    
                    <Table
                        model={UserModel}

                        onSelect={this.handleSelect}
                        editable = {false}
                        selectable = {false}
                        source={this.state.source}
                        />
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