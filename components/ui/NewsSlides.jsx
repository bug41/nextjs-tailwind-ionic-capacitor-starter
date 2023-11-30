import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';
import { IonButton, IonLabel, IonListHeader } from '@ionic/react';

const NewsSlides = () => {
  return (
        <div className='mx-2 h-[150px] mb-20'>            
            <IonListHeader className='pl-0'>
                <IonLabel className="font-bold text-xl text-gray-800 dark:text-gray-100">
                    새 소식
                </IonLabel>
                <IonButton>전체보기</IonButton>
            </IonListHeader>
            
            <Swiper
                slidesPerView={3.5}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: false,
                }}
                //modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
  )
};

export default NewsSlides;
