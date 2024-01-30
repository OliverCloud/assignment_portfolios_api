"use client"

import { useEffect, useState } from "react";
import styles from './galleryImages.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { register } from 'swiper/element/bundle';
import Image from "next/image";
// register Swiper custom elements
register();


const GalleryImages = ({ gallery }) => {

    const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.
    
    useEffect(() => {

        // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
        const fetchData = async () => {

            // Vi fetcher fra vores endpoint.
            const response = await fetch(`http://localhost:3000/api/images?gallery=${gallery}`);

            // Vi omdanner vores response fra tekst til json.
            const result = await response.json();

            // Vi opdatere data state, ved hjælp af setData() useState hook´en.
            setData(result);

        }

        // Vi kalder fetch data funktionen.
        fetchData();

    }, [gallery]);

    return (
        <div>
            <h1>Gallery Images</h1>

            <Swiper 
              navigation={true} 
              modules={[Navigation]}
              mousewheel={true}
              keyboard={true}
              className="mySwiper">

                {data.map((image, index) => (
                    <SwiperSlide className={styles.slide} key={index}>
                        <Image src={image.path} alt={image.name} width={image.width} height={image.height}/>
                        <div className={styles.nameTag}>{image.author}</div>
                    </SwiperSlide>
                ))}

            </Swiper>   

        </div>
    )
}
export default GalleryImages;