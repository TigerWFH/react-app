import { Component } from 'react';

class LazyCom extends Component {
  constructor(props) {
    super(props);
    console.log('wfh----lazycom---constructor');
  }

  render() {
    return <>this is lazycom</>;
  }
}

export default LazyCom;
