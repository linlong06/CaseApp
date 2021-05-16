import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import SurveyBrowsingSection from '../components/SchoolsPage/SurveyBrowsingSection';
// images
import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
// import bg3 from '../assets/images/bg3.jpg';

const HomeDiv = styled.div`
    /* height: calc(100vh - 76px); */
    .carousel-container {
        height: calc(100vh - 87px);
        overflow: hidden;
        .carousel-img-container {
            img {
                width: 100%;
            }
        }

        .caption-welcome {
            top: 5vw;
            .caption-welcome-1 {
                margin: 0 auto;
                width: 500px;
                font-family: 'Lato', sans-serif;
                font-weight: 200;
                font-size: 60px;
            }

            .caption-welcome-2 {
                width: 30vw;
                margin: 0 auto;
                font-family: 'Permanent Marker', cursive;
                font-size: 100px;
            }

            .caption-btn {
                margin: 5vw;
                /* font-family: 'Lato', sans-serif; */
                font-size: 20px;
                color: grey;
                font-weight: 300;
                padding: 10px 15px;
            }
        }
    }
`;
function Home() {
    return (
        <HomeDiv>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <div className="carousel-img-container">
                        <img
                            className="d-block w-100"
                            src={bg1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="caption-welcome">
                        <p className="caption-welcome-1">Welcome To</p>
                        <p className="caption-welcome-2">STATE YOUR CASE</p>
                        <Button className="caption-btn" variant="light">
                            Find Your School
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="caption-welcome">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <SurveyBrowsingSection />
        </HomeDiv>
    );
}

export default Home;
