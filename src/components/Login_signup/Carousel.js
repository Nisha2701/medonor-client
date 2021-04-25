import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "Carousel.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="public\assests\images\Medicine-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="public\assests\images\Medicine-1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="public\assests\images\Medicine-1.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
;

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;