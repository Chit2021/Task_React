import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '550px'
  };
  
function Pics() {
  return (
	<div style={styles}>
    
        {/* <p><strong>USE OF CAROUSAL</strong></p> */}
		<Carousel>
		    <div>
                <img src="./images/light.jpg" alt="No image"/>
				<p className="legend">Jvyaskyla-2022</p>
			</div>
			<div>
                <img src="./images/light1.jpg" alt="No image"/>
				<p className="legend">Lake View</p>
			</div>
			<div>
                <img src="./images/light2.jpg" alt="No image"/>
				<p className="legend">Beautiful Lotus</p>
			</div>
			<div>
                <img src="./images/light3.jpg" alt="No image"/>
				<p className="legend">@University</p>
			</div>
		</Carousel>

	</div>
  );
}

export default Pics;