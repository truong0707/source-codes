import './FooterPage.css'
import CardList from './pages/CardList';
/* import MouseIcon from './pages/MouseIcon'; */


export default function FooterPage() {
    return (
        <div className="container-fluid">
            <div className="AllFooter">
                <div className="FooterBlog">
    {/*                 <MouseIcon /> */}
                    <div className="row">
                        <div className="col">
                            <div className="col boxFooter">
                                <h5>Vegefoods</h5>
                                <p />
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                            </div>
                        </div>
                        <div className="col">
                            <div className="col boxFooter">
                                <CardList />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col boxFooter">
                                <CardList />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col boxFooter">
                                <h5>Have a Questions?</h5>
                                <p />
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                                <p />
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

/// react router