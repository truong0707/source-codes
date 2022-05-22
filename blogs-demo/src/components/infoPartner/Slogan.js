import './info.css'

export default function Slogan(name) {
    return (
        <div className = 'Slogan'> 
            <h1>{name.mainName}</h1>  
            <button type="button" className="btn"><p>Bạn bè</p></button>
            <button type="button" className="btn"><p>Nhắn tin</p></button>
        </div>
    );
}