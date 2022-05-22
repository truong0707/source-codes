import './page.css'

export default function Listinfor(props){
    return(
        <div className="listinfor">
            <h6 className="NameUser">{props.title}</h6>
            <p className = 'title-list'>{props.nameUser}</p>
            <img className ='AvatarUserName' src = {props.imageUser} alt = ''/>
        </div>
    )
}
