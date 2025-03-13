import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';

// images
import book from "../assets/images/book.png";
import pay from "../assets/images/pay.png";
import play from "../assets/images/play.png";
import court1 from "../assets/images/outdoor-court.jpg";
import court2 from "../assets/images/indoor-court.jpg";
import court3 from "../assets/images/private-court.jpg";

export const Home = () => {
  return (
    <>
      <div className="bg-pic">
        <div className="welcome-text">
          <p className="reserve">RESERVE YOUR SLOT</p>
          <p className="now">NOW! <br /> <Link to="/bookcourt"><Button variant="outline-danger" className="butt">Make Reservation Now!</Button></Link></p>
          
        </div>
      </div>

      <div className="choose">
        <h2 className="title1">Why choose</h2>
        <h2 className="title2">ParrasmashPH?</h2>
      </div>
      <p className="title-desc">
        Parrasmash promotes wellness and we do love our clients! Find us at the
        heart of a busy <br />
        metropolis. Take time to release your inner stress and smash some
        shuttlecock with us!
      </p>

      <div className="diff-card">
        <Card style={{ height: "25rem", width: "20rem" }} className="box">
          <Card.Img variant="top" src={book} />
          <Card.Body>
            <Card.Title className="cardTitle">Book</Card.Title>
            <Card.Text className="cardDesc">
              Experience our new 3-minute Booking System and be amazed!
            </Card.Text>
            <Link to="/bookcourt">
              <Button variant="danger" className="click">
                BOOK NOW!
              </Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ height: "25rem", width: "20rem" }} className="box">
          <Card.Img variant="top" src={pay} />
          <Card.Body>
            <Card.Title className="cardTitle">Pay</Card.Title>
            <Card.Text className="cardDesc">
              Pay anytime, anywhere with your GCash or e-wallet.
            </Card.Text>
            <Link to="/bookcourt">
              <Button variant="danger" className="click">
                BOOK NOW!
              </Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ height: "25rem", width: "20rem" }} className="box">
          <Card.Img variant="top" src={play} />
          <Card.Body>
            <Card.Title className="cardTitle">Play</Card.Title>
            <Card.Text className="cardDesc">
              Play with your friends in our clean and well-maintained courts!
            </Card.Text>
            <Link to="/bookcourt">
              <Button variant="danger" className="click">
                BOOK NOW!
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="court-type">
        <h2 className="check-our">Check our Different</h2>
        <h2 className="check-our-1">Courts!</h2>
      <div/>
        <div className="carousel">
        <Carousel>
          <Carousel.Item className="court-item">
            <img src={court1}  alt="outdoor-court" className="court-picture"/>
            <Carousel.Caption>
              <h3 className="court-title">OUTDOOR COURT</h3>
              <p className="court-desc">Experience the thrill of badminton in the fresh air with our well-maintained outdoor court. Perfect for casual games or competitive matches, this court provides a lively setting for players of all levels.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="court-item">
            <img src={court2} alt="indoor-court" className="court-picture" />
            <Carousel.Caption>
              <h3 className="court-title">INDOOR COURT</h3>
              <p className="court-desc">Enjoy the game in comfort and any weather with our premium indoor court. Designed with professional standards, it ensures the perfect environment for focus and top-notch performance.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="court-item">
            <img src={court3} alt="private-court" className="court-picture"/>
            <Carousel.Caption>
              <h3 className="court-title">PRIVATE COURT</h3>
              <p className="court-desc">Enjoy an exclusive badminton experience with our private court. Perfect for training sessions, group games, or special events, this court offers privacy and a personalized environment for uninterrupted play.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        
      </div>


      <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3 className="footer-title">PARRASMASH PH</h3>
                    <p className="footer-desc">
                        A dedicated platform for badminton enthusiasts, offering court rentals and professional training sessions. Open daily from 6 AM to 11 PM, we provide a seamless online booking facility to reserve your court easily. Whether you're here to play, train, or improve your game, Parrasmash PH is here to serve you. Thank you for choosing us!
                    </p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Coming Soon!</h3>
                    <div className="socialmedia">
                        {/* Facebook */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>

                        {/* Instagram */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        
                        {/* Twitter */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>

                    </div>
                    
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Location</h3>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q= HP Badminton 3580 National Hi-way, Biñan, 4024 Laguna&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-below">
                    @{new Date().getFullYear()} Parrasmash.  All Rights Reserved
                </p>
            </div>
        </footer>
    </>
  );
};
