import { 
    SiJavascript, 
    SiPython, 
    SiReact, 
    SiNodedotjs, 
    SiHtml5, 
    SiMongodb, 
    SiGit, 
    SiTailwindcss,
    SiTypescript,
    SiKotlin,
    SiHaskell,
    SiPostgresql,
    SiJetpackcompose
} from 'react-icons/si';
import { DiJava } from "react-icons/di";

const About = () => {
    const techStack = [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Python", icon: SiPython, color: "text-blue-400" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
        { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Git", icon: SiGit, color: "text-red-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
        { name: "Java", icon: DiJava, color: "text-red-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Kotlin", icon: SiKotlin, color: "text-purple-500" },
        { name: "Haskell", icon: SiHaskell, color: "text-blue-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "JetpackCom", icon: SiJetpackcompose, color: "text-blue-400" }
    ];

    const techPerRow = techStack.length / 2;

    // Split into 2 rows: first row gets 7 items, second row gets 6 items
    const techRows = [
        techStack.slice(0, techPerRow),    
        techStack.slice(techPerRow, techStack.length)    
    ];
    const TechRow = ({ technologies, rowIndex }) => {
        return (
            <div className="overflow-hidden w-full">
            </div>

    return(
        <section className="c-space mt-15">
            <div className="w-full">

                <div>
                    <p className="head-text">About Me</p>

                    <div className="mt-10 max-w-3xl">
                        <p className="text-neutral-400 text-xl font-medium">
                        Hi, I'm Yong Han, a second-year Computer Science student specializing 
                        in Advanced Computer Science at Monash University Malaysia.
                        <br></br><br></br>
                        When I'm not studying, I love exploring new programming languages and frameworks 
                        that aren't covered in class. I enjoy applying what I learn by building projects—this website, 
                        for example, is the result of me learning React and Tailwind CSS
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default About;