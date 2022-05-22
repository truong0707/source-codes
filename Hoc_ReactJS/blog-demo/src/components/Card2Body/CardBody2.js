import InputCardBody2 from "./InputCardBody2";
import CardBody2A from "./CardBody2A";
import CardBody2B from "./CardBody2B";


export default function CardBody2(props) {
    return (
        <div className="container">
            <div className="col">

                <div className="InPut">
                    <InputCardBody2 />
                </div>


                <div>
                    <CardBody2A />
                </div>


                <div>
                    <CardBody2B />
                </div>

            </div>
        </div>

    );
}