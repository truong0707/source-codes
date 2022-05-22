import "./watch.scss";
import { ArrowBackIosOutlined } from '@material-ui/icons';
import List from './../../list/List';

export default function Watch() {
    return (
        <div className="watchBox">

            <div className="watch">
                    <div className="back">
                        <a className="btnHome" href="/">
                            <ArrowBackIosOutlined/>
                            Home
                        </a>
                    </div>
                    <video className="video" autoPlay  progress controls src="./video/vdTrailer/4.mp4"/>
            </div>
            <List/>
        </div>
        
    )
}
