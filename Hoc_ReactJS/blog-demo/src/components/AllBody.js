
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from "./Body";
import CardBody1 from './Card1Body/CardBody1';
import TA1 from './AllTranform/TA1';


export default function AllBody() {

    return (
        <div className="container-fluid">
            <Body />
            <Router>
                <Switch>
                    <Route exact path="/Nguyen" component={CardBody1} />
                    <Route path="/Thanh" component={CardBody1} />
                    <Route path="/Truong" component={TA1} />
                </Switch>
            </Router>
        </div>
    );
}