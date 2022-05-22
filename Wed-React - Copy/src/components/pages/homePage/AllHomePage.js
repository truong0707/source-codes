import CardTopBXH from './CardTopBXH';
import CarouselHome from './CarouselHome'
import BodyHome from './BodyHome';
import VideoHome from './VideoHome';
import '../.././AllPage.css'

export default function AllHomePage() {


    return (
        <div className="home">
           {/*  <div className="container-fluid">
            <CarouselHome />
            </div> */}
    

            <div className="container"> 
                <div className="row">

                    <div className="col-md-3">
                        <CardTopBXH />
                    </div>

                    <div className="col-md-9 video">
                        <VideoHome />
                        <h4>Creating Auto Layouts</h4>
                        When using Bootstrap Col-MD classes, you can specify how many columns a grid
                        column should span. However, if you don't, a layout will still be created.
                        In this case, it will be an auto layout.
                        Every column element will automatically be equal, and added up they will take the
                        whole width:
                        Using Only Medium
                        In the example below, we only specify the .col-md-6 class (without .col-sm-*). This means that medium and large devices will split 50%/50% - because the class scales up. However, for small devices,
                        it will stack vertically (100% width):
                        it will stack vertically (100% width):
                        it will stack vertically (100% width):
                        it will stack vertically (100% width):
                        it will stack vertically (100% width):

                    </div>
                </div>
            </div>

            <div className="container">
                <BodyHome />
            </div>
        </div>

    );
}