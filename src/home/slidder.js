import img0 from '../images/IMG_20200705_183539-01.jpeg';
import img1 from '../images/portait2.jpg';
import img2 from '../images/IMG_20200627_145014.jpg';
import img3 from '../images/IMG_20200714_191259-01.jpeg';
import img4 from '../images/IMG_20200628_184028-02.jpeg';
import img5 from '../images/portait1.jpeg';
import img6 from '../images/portait3.jpeg';
import img7 from '../images/IMG_20200715_191728-01.jpeg';
import React, {Component} from 'react';
import Body from './slider-1';


const source = [img0, img1, img2, img3, img4, img5, img6, img7];
let i=0;
class ImageSource extends Component {

    state = {
        image: source[i]
    }

            render() {

        const prev= ()=> {
            if(i <=0)
            {
                console.log(source[i]);
                this.setState({
                    image: source[i=7]
                });
                
            }
            else {
                console.log(source[i]);
                this.setState({
                    image: source[i--]
                });
                
            }
        }
        const next = ()=> {
                if(i >=7)
                {
                    console.log(source[i]);
                    this.setState({
                        image: source[i=0]
                    });
                    
                }
                else {
                    console.log(source[i]);
                    this.setState({
                        image: source[i++]
                    });
                    
        }
        }

        return (
            <Body img={source[i]} prev={prev} next={next} />
                );
    }

}

export default ImageSource;