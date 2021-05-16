import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import GlobalStyle from './Theme';
//             <Header  />
function App() {
    return (
                <Router>
            <GlobalStyle />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/survey" exact component={Survey} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
