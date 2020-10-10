import React, { Component } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div>
        <div className="col-full">
          <Slider {...settings} style={{ marginTop: "20px" }}>
            <div className="customSlick">
              <div className="customSlider">
                <div className="clientProfile">
                  <img
                    src={process.env.PUBLIC_URL + "/avtar.jpg"}
                    alt="Profile-Img"
                  />
                </div>
                <p>
                  Proin volutpat mauris ac pellentesque pharetra. Suspendisse
                  congue elit vel odio suscipit, sit amet tempor nisl imperdiet.
                  Quisque ex justo, faucibus ut mi in, condimentum finibus
                  dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris.
                  Maecenas et ante id ipsum condimentum dictum et vel massa. Ut
                  in imperdiet dolor, vel consectetur dui.
                </p>
                <h4>Mukaddar Ali</h4>
                <p>Partner</p>
              </div>
            </div>
            <div className="customSlick">
              <div className="customSlider">
                <div className="clientProfile">
                  <img
                    src={process.env.PUBLIC_URL + "/avtar.jpg"}
                    alt="Profile-Img"
                  />
                </div>
                <p>
                  Proin volutpat mauris ac pellentesque pharetra. Suspendisse
                  congue elit vel odio suscipit, sit amet tempor nisl imperdiet.
                  Quisque ex justo, faucibus ut mi in, condimentum finibus
                  dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris.
                  Maecenas et ante id ipsum condimentum dictum et vel massa. Ut
                  in imperdiet dolor, vel consectetur dui.
                </p>
                <h4>Mukaddar Ali</h4>
                <p>Partner</p>
              </div>
            </div>
            <div className="customSlick">
              <div className="customSlider">
                <div className="clientProfile">
                  <img
                    src={process.env.PUBLIC_URL + "/avtar.jpg"}
                    alt="Profile-Img"
                  />
                </div>
                <p>
                  Proin volutpat mauris ac pellentesque pharetra. Suspendisse
                  congue elit vel odio suscipit, sit amet tempor nisl imperdiet.
                  Quisque ex justo, faucibus ut mi in, condimentum finibus
                  dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris.
                  Maecenas et ante id ipsum condimentum dictum et vel massa. Ut
                  in imperdiet dolor, vel consectetur dui.
                </p>
                <h4>Mukaddar Ali</h4>
                <p>Partner</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default carousel;
