import React, {useState, useEffect} from 'react'
import "./Banner.scss"
import Carousel from 'react-bootstrap/Carousel';
import mainImage from "../../assets/image/main-image.png"
import { apiClient } from '../../axios/apiClient';

function Banner() {
    const [list, setList] = useState([])

    async function getCategory() {
        try {
            const res = await apiClient.get('/products/category-list')
            setList(res.data)

            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div className='banner container'>
            <div className='sidebar'>
                <ul>
                   {
                    list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                   }
                </ul>
            </div>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={mainImage} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img src={mainImage} alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src={mainImage} alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}

export default Banner
