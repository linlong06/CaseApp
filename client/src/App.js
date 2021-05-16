import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyle from './Theme';
// bootstrap style sheet
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import Home from './pages/Home';
import Survey from './pages/Survey';
// component
import Header from './components/Header';

//             <Header  />
function App() {
    return (
        <Router>
            <GlobalStyle />
            <main>
                <Header />
                <Switch>
                    <Route path="" exact component={Home} />
                    <Route path="/survey" exact component={Survey} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
