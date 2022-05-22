import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Button_Card from "../button/Button_Card";
import CardBody2 from "../Card2Body/CardBody2";


export default function CardBody1(props) {
    return (
        <Router>
            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={props.img} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{props.text}</h5>
                                <p class="cmt_Blog">
                                    <div className="">{props.cmt}</div>
                                </p>

                                <p class="card-text"><small class="text-muted">
                                    <Link to ="/B">  <Button_Card /> </Link>
                                </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    {/*         <Route  exact path="/B" component={CardBody2}/> */}
        </Router>

    );
}


