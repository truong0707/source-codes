import React from 'react';
import HomePage from "../HomePage/HomePage";
import HandleLogin from "../HandleLogin/HandleLogin";
import NewsPage from "../NewsPage/NewsPage";
import TodoShow from '../TodoList/TodoShow';
import CharactersPage from '../CharactersPage/CharactersPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function RounterURL() {
    return (
        <Router>
            <Switch>
              <Route path="/" component={HandleLogin} exact></Route>
              <Route path="/home-page" component={HomePage} exact></Route>
              <Route path="/news-page" component={NewsPage} exact></Route>
              <Route path="/todo-list" component={TodoShow} exact></Route>
              <Route path="/characters-page" component={CharactersPage} exact></Route>
            </Switch>
          </Router>
    )
}

export default RounterURL
