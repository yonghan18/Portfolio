
import { MdAccountCircle } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { RiArrowDownDoubleLine } from "react-icons/ri";
const TypeComponent = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
            'A CS Student',
            1000,
            'A Web Developer',
            1000,
            'A Tech Enthusiast',
            1000,
            'A Passionate Learner',
            1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '4.5rem', display:"inline-block",color: 'white', fontWeight: '800'
            }}
            repeat={Infinity}
        />
    );
}

const FloatingElements = () => {
    const floatingVariants = {
        floating: {
            y: [0, -20, 0],
            rotate: [0, 180, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        floatingMedium: {
            y: [0, -15, 0],
            rotate: [0, 120, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        floatingFast: {
            y: [0, -10, 0],
            rotate: [0, 90, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        pulse: {
            opacity: [1, 0.7, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
            {/* Floating geometric shapes */}
            <motion.div 
                className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                variants={floatingVariants}
                animate="pulse"
            />
            <motion.div 
                className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40"
                variants={floatingVariants}
                animate="floating"
            />
            <motion.div 
                className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full opacity-80"
                variants={floatingVariants}
                animate="pulse"
            />
            <motion.div 
                className="absolute top-60 left-1/4 w-2 h-2 bg-cyan-300 rounded-full opacity-50"
                variants={floatingVariants}
                animate="floatingMedium"
            />
            <motion.div 
                className="absolute bottom-60 right-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-30"
                variants={floatingVariants}
                animate="floatingFast"
            />
            
            {/* Code symbols floating */}
            <motion.div 
                className="absolute top-32 right-40 text-cyan-400 opacity-20 text-2xl"
                variants={floatingVariants}
                animate="floating"
            >
                {'</>'}
            </motion.div>
            <motion.div 
                className="absolute bottom-32 left-40 text-blue-400 opacity-15 text-xl"
                variants={floatingVariants}
                animate="floatingMedium"
            >
                {'{ }'}
            </motion.div>
            <motion.div 
                className="absolute top-1/2 left-16 text-white opacity-10 text-lg"
                variants={floatingVariants}
                animate="floatingFast"
            >
                {'[]'}
            </motion.div>
      </div>
    );
  };

const Hero = () => {
    return(
            <FloatingElements />
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="w-full mx-auto flex flex-col sm:mt-55 mt-20 c-space gap-3 col-span-8 place-self-center">
                    <p className="sm:text-5xl text-xl font-medium text-white font-generalsans">
                    Hi, I am Yong Han <span className="waving-hand">👋</span>
                    </p>
                    <TypeComponent/>
                    <Buttons/>
                </div>
                <div className="relative col-span-4 mt-47">
                    <MdAccountCircle 
                        size="300px"
                        color="white"
                    />
                </div>
            </div>
            <div className="place-self-center mt-35 arrow cursor-pointer">
                <RiArrowDownDoubleLine
                    color="white"
                    size="40px"
                />
            
            </div>
        </section>
    )
}

export default Hero;