import React from 'react'
import bannerImg from "../../assets/images/bgg.jpg"
import "./Banner.css";
import icon from "../../assets/heart.png";
import etherStatGraph from "../../assets/images/ether-st-graph.PNG";
import logo1 from "../../assets/images/logo1.svg";
import logo2 from "../../assets/images/logo2.svg";
import logo3 from "../../assets/images/logo3.svg";
import logo4 from "../../assets/images/logo4.svg";



const Banner = ()=> {
  return (
    <div className='banner-container'>
    <div>
     
      <img className='photo' src={`https://etherscan.io/images/svg/components/abstract-shapes-20.svg?v=1`} />
    </div>
    <section className='price-stats'>
      <div className='left-stats'>
        <div className='left-main'>
          <div className='submain-1'>
            <div>
              <img src={logo1} style={{height:"50px", width:"50px"}} />
            </div>
            <div>
              <p className="para">
                  ETHER PRICE <br/>
                $1,179.70 @ 0.070688 BTC (-2.01%)
              </p>
            </div>
          </div>
          <div className='submain-1'>
            <div>
              <img src={logo2} style={{height:"50px", width:"50px"}} />
            </div>
            <div>
              <p className="para">
                  ETHER PRICE <br/>
                $1,179.70 @ 0.070688 BTC (-2.01%)
              </p>
            </div>
          </div>
          <div className='submain-1'>
            <div>
              <img src={logo3} style={{height:"50px", width:"50px"}} />
            </div>
            <div>
              <p className="para">
                  ETHER PRICE <br/>
                $1,179.70 @ 0.070688 BTC (-2.01%)
              </p>
            </div>
          </div>
          <div className='submain-1'>
            <div>
              <img src={logo4} style={{height:"50px", width:"50px"}} />
            </div>
            <div>
              <p className="para">
                  ETHER PRICE <br/>
                $1,179.70 @ 0.070688 BTC (-2.01%)
              </p>
            </div>
          </div>
          <div className='submain2'>

          </div>
        </div>
      </div>
      <div className='right-stats'>
        <div>
          <img src={etherStatGraph} style={{height:"150px", width:"100%"}} />
        </div>

      </div>
    </section>
   

    </div>
  )
}
export default Banner;
