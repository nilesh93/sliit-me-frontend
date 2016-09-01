import React from 'react';

import { render } from 'react-dom';
import Input from 'react-toolbox/lib/input';
import Search from './Search';
import Subject from './Subject';

const Home = React.createClass({


    render() {
        return (
            <div style={styles.main}>
                <div style={styles.container}>
                    <Search placeholder = "Search Subjects"/>
                </div >
                <div style={styles.subject}>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>
                    <Subject  style={styles.subjectItem}/>

                </div>
            </div>
        );
    }
});

const styles = {
    main: {
        padding: 20,
        backgroundColor: '#F5F5F5'
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
        flex: 1,
        margin: '10px'
    }
};
export default Home;