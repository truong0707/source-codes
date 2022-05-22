import './mainpage.css'
import { useHistory } from 'react-router';


export default function TopBarPartner(partner) {
    const history = useHistory();

    const infomation = (e) => {
        console.log(e)
        history.push('/page');
    }
    const chinh = (e) => {
        console.log(e)
        history.push('/page');
    }
    return(
        
        <div className = 'TopBarPartner'>
            <img className ='AvatarPartner' onClick={chinh} src = {partner.imagePartner} alt = ''/>
            <h4 className = 'NamePartner'>{partner.namePartner}</h4>
            <button className = 'info btn btn-info' onClick={infomation} >i</button>
        </div>
    )
}