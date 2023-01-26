import React from 'react'
import "./Home.css"
import bannerImage from "../../../public/bannerImage.png"
import img1 from "../../../public/img1.png"
import img2 from "../../../public/img2.png"
import img3 from "../../../public/img3.png"


const Home = () => {
    return (
        <div className="home">



            <div className="firstbanner">
                <div>
                    <div>
                        <h1><span>Speed</span> up your content creation</h1>
                        <p>Create content in a matter of minutes not days with Speedy's One-stop digital branding solution for SMB.</p>
                        <button className='meetingButton'>Book Meeting</button>
                    </div>
                    <img src={bannerImage} alt="" />
                </div>
            </div>


            <h1 className='heading'>What we do</h1>

            <div className='features'>
                <div>
                    <img src={img1} alt="" />
                    <div>
                        <h1>Incredibly fast</h1>
                        <p>Drastically reduce the time taken to spin up content, get going in a matter of hours instead of days.</p>
                    </div>
                </div>

                <div>
                    <img src={img2} alt="" />
                    <div>
                        <h1>Zero-prompt</h1>
                        <p>Drastically reduce the time taken to spin up content, get going in a matter of hours instead of days.</p>
                    </div>
                </div>

                <div>
                    <img src={img3} alt="" />
                    <div>
                        <h1>Personalized templates</h1>
                        <p>Drastically reduce the time taken to spin up content, get going in a matter of hours instead of days.</p>
                    </div>
                </div>
            </div>


            <div className='bookingDemoText'>
                <h1>Contact US</h1>
                <p>Book a demo with us</p>
                <button className='meetingButton'>Book Meeting</button>
            </div>



        </div>
    )
}

export default Home