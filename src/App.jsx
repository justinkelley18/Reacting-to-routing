import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Film from "./pages/Films"
import People from "./pages/People"
//Create Three Links that look like buttons "Go Home" "View Films" "View People"
const App = () => {
    return (
        <BrowserRouter>
            <>
                <Link to="/">
                    <button className="btn btn-light btn-outline-dark w-33 mx-auto mt-2 col-4 shadow-sm button-link" type="submit"><b>GO HOME</b></button>
                </Link>
                <Link to="/films">
                    <button className="btn btn-light btn-outline-dark w-33 mx-auto mt-2 col-4 shadow-sm button-link" type="submit"><b>VIEW FILMS</b></button>
                </Link>
                <Link to="/people">
                    <button className="btn btn-light btn-outline-dark w-33 mx-auto mt-2 col-4 shadow-sm button-link" type="submit"><b>VIEW PEOPLE</b></button>
                </Link>
                <Switch>
                    <Route exact path="/">
                        <Home />

                    </Route>
                    <Route exact path="/films">
                        <Film />

                    </Route>
                    <Route exact path="/people">
                        <People />

                    </Route>
                </Switch>

            </>
        </BrowserRouter>
    );
};

export default App;