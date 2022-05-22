import { Carousel } from "react-bootstrap"
import IconPageHome from "./IconPageHome";
import BodyHomePageA from "./BodyHomePageA";
import './Home.css'

export default function Home() {

    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 IMGHome"
                        src="http://bloggioitre.net/wp-content/uploads/2016/10/meo-chon-trai-cay-ngon-cho-ngay-tet-nguyen-dan-hinh-anh-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="titleHome">100% Fresh & Organic Food</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 IMGHome"
                        src="http://cdn-www.vinid.net/2020/01/Nen-mua-trai-cay-say-kho-o-dau-ngon-va-an-toan-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className="titleHome">100% Fresh & Organic Food</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 IMGHome"
                        src="https://riibeautybox.com/wp-content/uploads/2020/05/bao-quan-trai-cay-5-1536x865.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="titleHome">100% Fresh & Organic Food</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <IconPageHome/>

            <BodyHomePageA/>
        </div>
    );
}