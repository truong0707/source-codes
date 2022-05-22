import { Link } from "react-router-dom";

export default function Transform() {
    return (
        <div>
        <p>
            <Link to="/">Trang chủ</Link>
        </p>

        <p>
            <Link to="/transform2">Transform2</Link>
        </p>

        <p>
            <Link to="/transform3">Transform3</Link>
        </p>
        </div>
    );
}


