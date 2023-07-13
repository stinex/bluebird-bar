import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import Layout from '@/components/layout/Layout'
import { Container } from '@/components/container/Container'
import { advantages_RU } from '@/assets/data/data.ru'
import Image from 'next/image'

export const Home = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <Layout title="" description="Главная">
      <div className="flex-col md:flex-row  max-w-[1545px] ml-auto flex gap-[50px] lg:gap-[100px] items-center px-[15px] 3xl:px-[0] xl:px-[15px] lg:px-[15px] md:px-[39px] md:pr-[0px] sm:px-[15px]">
        <div>
          <h5 className="text-secondaryColor text-base font-sans tracking-[5px] mb-[14px] leading-4">
            Breakfast
          </h5>
          <h1 className="max-w-[500px] text-secondaryColor font-body font-semibold text-[60px] leading-tight mb-[25px] lg:leading-[110px] lg:text-[100px]">
            Welcome to Bar
          </h1>
          <div className="ml-0 lg:ml-[25px]">
            <p className="text-typeographyColor text-base max-w-[400px] mb-[60px]">
              Donec leo mi ut ac tristique eget elementum vitae ut. In quisque
              justo quis parturient viverra morbi.
            </p>
            <button
              type="button"
              className="py-[20px] px-[30px] bg-mainColor text-sm uppercase hover:bg-blueColor hover:text-mainColor ease-in-out duration-300"
            >
              RESERVATIONS
            </button>
          </div>
        </div>
        <div className="aspect-square max-w-[800px] w-[100%] overflow-hidden ml-auto relative max-h-[calc(100vh-130px)]">
          <Swiper
            className="h-[100%]"
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
          >
            <SwiperSlide className="bg-mainColor">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-mainColor">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-mainColor">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-mainColor">Slide 4</SwiperSlide>
            <div
              ref={navigationPrevRef}
              className="group/edit cursor-pointer absolute w-[100px] h-[100px] bottom-0 left-0 hover:bg-whiteColor z-10 grid place-items-center ease-in-out duration-300"
            >
              <BsChevronLeft
                className="fill-whiteColor group-hover/edit:fill-mainColor"
                size={24}
              />
            </div>
            <div
              ref={navigationNextRef}
              className="group/edit cursor-pointer absolute w-[100px] h-[100px] bottom-0 left-[100px] hover:bg-whiteColor z-10 grid place-items-center ease-in-out duration-300"
            >
              <BsChevronRight
                className="fill-whiteColor group-hover/edit:fill-mainColor"
                size={24}
              />
            </div>
          </Swiper>
        </div>
      </div>

      <div className="bg-complementaryColor ld:py-[130px]  md:py-[100px] py-[80px]">
        <Container>
          <div className="grid gap-[30px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[1170px] m-auto">
            {advantages_RU.map((item) => (
              <div
                key={item.title}
                className="flex md:flex-row flex-col  md:items-start items-center text-center gap-[20px]"
              >
                <Image src={item.img} alt={item.title} />
                <div className="center">
                  <h3 className="text-secondaryColor font-semibold mb-[10px] text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-typeographyColor font-normal text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  )
}
