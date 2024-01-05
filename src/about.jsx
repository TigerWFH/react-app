import { Component } from 'react';
import { render } from 'amis';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('wfh---about---constructor');
  }

  componentWillUnmount() {
    console.log('wfh----unmount-----about');
  }

  render() {
    return (
      <>
        <h1>about</h1>
        {render(
          {
            type: 'page',
            body: 'hello world!'
          },
          {},
          {}
        )}
      </>
    );
  }
}

export default About;
