import React from 'react';
import { render } from 'react-dom';
import Input from 'react-toolbox/lib/input';

const Search = React.createClass({


    render() {
        return (
            <div style={styles.search}>
                <Input type ='tel' label={this.props.placeholder} name='phone' icon='search'  />
            </div>
        );
    }
});

const styles = {
    search: { width: '50%', }
};

export default Search;