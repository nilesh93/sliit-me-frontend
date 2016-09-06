import React from 'react';
import { render } from 'react-dom';
import Input from 'react-toolbox/lib/input';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';
import { browserHistory } from 'react-router'

class Subject extends React.Component{
 
 
    btnClick () {
    browserHistory.push('/content'); 
    }
    render() {
        return (
            <div >
                <Card style={{ width: '350px', margin: '10px' }}>
                    <CardTitle
                        avatar="http://icons.iconarchive.com/icons/dtafalonso/android-l/512/Settings-L-icon.png"
                        title="SETM"
                        subtitle="Software Engineering Terms and Metrics"
                        />
                        
                    <CardActions>
                        <Button onClick={this.btnClick} style={styles.button} label="View" />
                    </CardActions>

                </Card>
            </div>
        );
    }
};

const styles = {
    search: {},
    button: { flex: 1 }
};

export default Subject;