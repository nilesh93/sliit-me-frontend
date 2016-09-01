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


class PastPaper extends React.Component {


    render() {

        return (
            <Card style={{    width: '250px',margin: '10px'}}
            showExpandableButton={true}>
                <CardTitle
                    avatar="https://lh3.googleusercontent.com/_Ofe1l5kLKOZPctG4esWo4XYlbhnIQ5Lt34oRxSbsuQR_9Nr98oMdNM590iy9DSNHRsP=w300"
                    title="2010 Bundle"
                    subtitle="Updated on 2016 Mar 12"
                    />
                <CardActions>
                    <Button onClick={this.btnClick} style={styles.button} label="Download" />
                </CardActions>
            </Card>
        );
    }
};


const styles = {
    search: {},
    button: { flex: 1 }
};




export default PastPaper;