import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';




const App = React.createClass({
  render() {
    return (
      <div>
        <PurpleAppBar />
        <div style={{   }}>
          <section style={styles.section}>
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
});
const styles = {
  section: {
    height: '90vh'
  }
}

export default App;


    //  <SuccessButton label='Success' primary raised />
    //   <Button label='Primary Button' primary />