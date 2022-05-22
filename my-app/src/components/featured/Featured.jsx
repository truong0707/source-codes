import './featured.scss'
import { PlayArrow } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';

export default function featured({type}) {
    return (
        <div className="featured">
             <video className="img"src="./video/vdTrailer/4.mp4" muted autoPlay preload="none" ></video>
            <div className="info">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea3d1e0c-97e9-4ec3-aff8-ba765a33498a/d8kb1hw-042d15e1-ab29-4587-965a-7fd093ed0ff8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhM2QxZTBjLTk3ZTktNGVjMy1hZmY4LWJhNzY1YTMzNDk4YVwvZDhrYjFody0wNDJkMTVlMS1hYjI5LTQ1ODctOTY1YS03ZmQwOTNlZDBmZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7Ao2CIDqDp_BV3Wvsrzjve2qX7DRFmBBJ4qRZEIaGZE" alt="" />
            
                <span className="decs">
                Thưởng thức trên TV của bạn.
                Xem trên TV thông minh, Playstation, Xbox, Chromecast,
                Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.
                </span>
                <div className="buttons">
                    <a style={{ textDecoration: 'none' }} href = "/watch2">
                            <button className="play">
                                <PlayArrow/>
                                <span >Play</span>
                            </button>
                      
                    </a>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
        
    )
}
