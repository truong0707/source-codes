import ListFriendsOnline from './ListFriendsOnline';
import CardNewsletter from './CardNewsletter';
import NewsHome from './NewsHome';
import ListProductBodyHome from './ListProductBodyHome';
import BoxCommentHomePage from './BoxCommenHomePage';


export default function BodyHomePage() {
    return (
        <div className="row bodyHomePage">
            <div className="col-xl-3">
                {/* <ListProductBodyHome /> */}
            </div>
            <div className="col-xl-6">
                <div className='left'>
                    <ul>
                        <CardNewsletter />
                        <BoxCommentHomePage />
                        <NewsHome />
                    </ul>
                </div>



            </div>
            <div className="col-xl-3">
                Người Liên Hệ
                <ListFriendsOnline />

            </div>
        </div>
    );
}