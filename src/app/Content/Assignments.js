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
    { Name: 'tutorial 1 answers', Upload: '2015-10-10', Uploader: 'IT14001826', Size: '20mb', Subject: 'SPDC', Actions: <Button style={{ maxWidth: '0', padding: 0 }}  primary label="Download"/> },
    { Name: 'tutorial 1 answers', Upload: '2015-10-10', Uploader: 'IT14001826', Size: '20mb', Subject: 'SPDC', Actions: <Button style={{ maxWidth: '0', padding: 0 }}  primary label="Download"/> },
];

const UserModel = {
    Name: { type: String },
    Size: { type: String },
 
    Upload: { type: String },
    Uploader: { type: String },
    Actions: { type: Button },

};

class Assignments extends React.Component {

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



export default Assignments;