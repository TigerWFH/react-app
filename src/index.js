import { Suspense, Component, lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import { Home } from './home.jsx';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import 'amis/lib/themes/antd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';

const About = lazy(() => import('./about.jsx'));
const Other = lazy(() => import('./other.jsx'));
class MyApp extends Component {
  constructor(props) {
    super(props);
    console.log('wfh---myapp---constructor');
  }
  render() {
    return (
      <>
        <h1>app</h1>
        <br />
        <NavLink to="/">home</NavLink>
        <br />
        <NavLink to="/about">about</NavLink>
        <br />
        <NavLink to="/other">other</NavLink>
        <br />
        {this.props.children}
      </>
    );
  }
}

const elem = (
  // <StrictMode>
  <Router>
    <MyApp>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/other'} element={<Other />}></Route>
        </Routes>
      </Suspense>
    </MyApp>
  </Router>
  // </StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elem);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
