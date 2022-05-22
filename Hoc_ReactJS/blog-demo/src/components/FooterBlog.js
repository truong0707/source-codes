import ListFooter from "./ListFooter";
import MouseIcon from "./MouseIcon";

export default function FooterBlog() {
    return (
        <div className="container-fluid">
            <div className="AllFooter">
                <div><MouseIcon/></div>
                <div className="FooterBlog">
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
                                <ListFooter />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col boxFooter">
                                <ListFooter />
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