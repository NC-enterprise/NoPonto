import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../../services/carrossel";
const PartnerCarrossel = () => {
    return (
        <div className="bg-colorLightGrey2 flex items-center justify-center flex-col h-[700px] ">
            <h1 className="text-colorDarkGreen mb-20 text-5xl font-bold">Marcas parceiras</h1>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    450:{
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                 
                    700: {
                        slidesPerView: 2.8,
                        spaceBetween: 5,
                    },
                    900: {
                        slidesPerView: 3.5,
                        spaceBetween: 5,
                    },
                    950: {
                        slidesPerView: 3.8,
                        spaceBetween: 5,
                    },
                    1024:{
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1124:{
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                    1224:{
                        slidesPerView: 5.5,
                        spaceBetween: 5,
                    },
                    1553:{
                        slidesPerView: 5.8,
                        spaceBetween: 5,
                    }
                    
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="bg-white flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-2 h-[290px] w-[220px] overflow-hidden cursor-pointer">
                            <div className="logo-image">
                                <img
                                    className="mx-auto w-100% h-auto max-w-[200px] sm:max-w-[120px]"
                                    src={item.logoImage}
                                    alt={item.title}
                                />
                            </div>

                            <h2 className="text-center text-xl lg:text-2xl text-colorBlack">{item.title}</h2>

                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] sm:w-[25px] sm:h-[25px] text-colorAccent group-hover:text-colorAccent group-hover:rotate-45 duration-100" />
                            </a>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default PartnerCarrossel;
