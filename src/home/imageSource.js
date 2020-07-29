import img0 from '../images/IMG_20200705_183539-01.jpeg';
import img1 from '../images/portait2.jpg';
import img2 from '../images/IMG_20200627_145014.jpg';
import img3 from '../images/IMG_20200714_191259-01.jpeg';
import img4 from '../images/IMG_20200628_184028-02.jpeg';
import img5 from '../images/portait1.jpeg';
import img6 from '../images/portait3.jpeg';
import img7 from '../images/IMG_20200715_191728-01.jpeg';

import Grid from '../gallery-grid/galleryGrid';
import React from 'react';

function gallery() {
   
    return (
    <Grid image={source} />
        );
}
const source = [img0, img1, img2, img3, img4, img5, img6, img7];
export default gallery;