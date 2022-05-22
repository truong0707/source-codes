import './info.css'

export default function AnhNen(props) {
    return (
        <div className='AnhNen'>
            {/* <img className = 'Avatar' alt =''/> */}
            <img className="Avatar"
                src={props.avatar}
                alt=''
            />
            <h1>{props.title}</h1>

            <img className="Background"
                src={props.background}
                alt=''
            />
        </div>
    );
}

