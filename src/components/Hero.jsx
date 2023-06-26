import { motion } from 'framer-motion';
import { styles } from '../styles';
import { nicole, nairobiSkyline, afya, recording, } from '../assets';
import { Carousel } from "@material-tailwind/react";



const Hero = () => {
  const galleryItems = [ recording, nicole, nairobiSkyline, afya ];
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
      <header
        class="relative flex items-center justify-center h-screen mb-12 overflow-hidden w-screen">
           <Carousel
           autoplay
           transition={{ duration: 0.5 }}
           navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4  flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
           >
            {galleryItems.map((item, i) => (
              <img
                src={item}
                alt={`slide ${i}`}
                className="object-cover w-full h-full backdrop brightness-50"
              />))}
          </Carousel>
      </header>
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto place-content-center
         overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px]
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto place-content-center
          justify-between gap-3 hero-header-text`}>
          {/* <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div> */}

          <div className='align-center'>
            <h1
              className={`${styles.heroHeadText} text-white font-helvetica font-light uppercase text-center`}>
              Cinematoghrapher, Animater & Photographer 
            </h1>
          </div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#projects">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        {/* <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={desktop}
            alt="bafe"
          />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
