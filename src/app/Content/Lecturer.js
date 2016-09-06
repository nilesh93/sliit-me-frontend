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


class Lecturer extends React.Component {


    render() {

        return (
            <Card style={{ width: '350px', margin: '10px' }}>
                <CardTitle
                    avatar="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png"
                    title="Tharindu Dilshan Perera"
                    subtitle="tharindu@sliit.lk"
                    style={{ paddingBottom: 0 }}
                    />



                <CardActions style={{ paddingLeft: 20 }}>
                    <div  style={{ flex: 3 }}>
                        Senior Lecturer  -
                        Ext - 453
                    </div>
                    <Button onClick={this.props.func}  primary style={styles.button} label="Edit" />
                </CardActions>
            </Card>
        );
    }
};


const styles = {
    search: {},
    button: { flex: 1 }
};




export default Lecturer;