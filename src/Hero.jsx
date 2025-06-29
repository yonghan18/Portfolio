
import { MdAccountCircle } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { RiArrowDownDoubleLine } from "react-icons/ri";
const TypeComponent = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
            // Same substring at the start will only be typed out once, initially
            'A CS Student',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
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

const Buttons = () => {
    return (
      <div className="flex gap-4 mt-6">

        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
          Let's talk
        </button>
  
        <button className="border-2 border-transparent bg-transparent text-white px-6 py-3 rounded-full font-semibold shadow-lg transition relative overflow-hidden">
          Download CV
        </button>
      </div>
    );
  };

const Hero = () => {
    return(
        <section className="min-h-screen w-full" id="home">
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