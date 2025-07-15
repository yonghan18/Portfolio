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
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const techRowVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const techItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    const TechRow = ({ technologies, rowIndex }) => {
        // Calculate drag constraints based on number of technologies
        // Show 4 initially, allow dragging to see the rest
        const visibleWidth = 4 * 136; // 4 items * (120px width + 16px gap)
        const totalWidth = technologies.length * 136; // All items width
        const maxDrag = Math.max(0, totalWidth - visibleWidth);

        return (
            <div className="overflow-hidden w-full">
                <motion.div 
                    className="flex gap-4 cursor-grab active:cursor-grabbing"
                    variants={techRowVariants}
                    drag="x"
                    dragConstraints={{ left: -maxDrag, right: 0 }}
                    dragElastic={0.1}
                    whileDrag={{ scale: 1.02 }}
                    style={{ width: `${totalWidth}px` }}
                >
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <motion.div 
                                key={index} 
                                className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/30 min-w-[120px] flex-shrink-0"
                                variants={techItemVariants}
                                whileHover={{ 
                                    scale: 1.05, 
                                    backgroundColor: "rgba(55, 65, 81, 0.6)",
                                    borderColor: "rgba(156, 163, 175, 0.5)",
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div 
                                    className={`text-4xl ${tech.color} mb-3`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <IconComponent />
                                </motion.div>
                                <motion.span 
                                    className="text-white-700 text-sm font-medium text-center"
                                    whileHover={{ color: "#ffffff" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {tech.name}
                                </motion.span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        );
    };

    return(
        <motion.section 
            className="c-space mt-15" 
            id="about"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="w-full">
                <div>
                    <motion.p 
                        className="head-text"
                        variants={itemVariants}
                    >
                        About Me
                    </motion.p>

                    <motion.div 
                        className="mt-10 max-w-3xl"
                        variants={itemVariants}
                    >
                        <motion.p 
                            className="text-neutral-400 text-xl font-medium"
                            variants={itemVariants}
                        >
                        Hi, I'm Yong Han, a second-year Computer Science student specializing 
                        in Advanced Computer Science at Monash University Malaysia.
                        <br></br><br></br>
                        When I'm not studying, I love exploring new programming languages and frameworks 
                        that aren't covered in class. I enjoy applying what I learn by building projects - this website, 
                        for example, is the result of me learning React and Tailwind CSS.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="mt-12"
                        variants={itemVariants}
                    >
                        <motion.h3 
                            className="text-2xl font-semibold text-white-700 mb-8"
                            variants={itemVariants}
                        >
                            Tech Stack
                        </motion.h3>
                        
                        {/* Horizontally scrollable tech stack - drag to see more */}
                        <motion.div 
                            className="relative"
                            variants={itemVariants}
                        >
                            {/* Background decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-gray-700/10 rounded-2xl blur-3xl"></div>
                            
                            {/* Scrollable container */}
                            <motion.div 
                                className="relative p-8 bg-gray-800/30 rounded-2xl border border-gray-700/20 backdrop-blur-sm"
                                whileHover={{ borderColor: "rgba(156, 163, 175, 0.3)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* 2 rows with horizontal scrolling */}
                                <motion.div 
                                    className="space-y-6"
                                    variants={containerVariants}
                                >
                                    {techRows.map((row, index) => (
                                        <TechRow 
                                            key={index} 
                                            technologies={row} 
                                            rowIndex={index}
                                        />
                                    ))}
                                </motion.div>
                                
                                {/* Drag instruction */}
                                <motion.div 
                                    className="flex justify-center mt-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                >
                                    <span className="text-neutral-500 text-sm flex items-center gap-2">
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            {'\u{2194}'}
                                        </motion.span>
                                        Drag right to see more technologies
                                    </span>
                                </motion.div>
                            </motion.div>
                            
                            {/* Floating accent dots */}
                            <motion.div 
                                className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
                                animate={{ 
                                    opacity: [0.6, 1, 0.6],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div 
                                className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-40"
                                animate={{ 
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            />
                        </motion.div>
                        
                        {/* Stats section */}
                        <motion.div 
                            className="mt-8 grid grid-cols-3 gap-4 text-center"
                            variants={containerVariants}
                        >
                            <motion.div 
                                className="p-4 bg-gray-800/20 rounded-lg border border-gray-700/20"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(55, 65, 81, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div 
                                    className="text-2xl font-bold text-cyan-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                                >
                                    2+
                                </motion.div>
                                <div className="text-neutral-400 text-sm">Years Learning</div>
                            </motion.div>
                            <motion.div 
                                className="p-4 bg-gray-800/20 rounded-lg border border-gray-700/20"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(55, 65, 81, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div 
                                    className="text-2xl font-bold text-blue-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                                >
                                    13
                                </motion.div>
                                <div className="text-neutral-400 text-sm">Technologies</div>
                            </motion.div>
                            <motion.div 
                                className="p-4 bg-gray-800/20 rounded-lg border border-gray-700/20"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(55, 65, 81, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div 
                                    className="text-2xl font-bold text-green-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                                >
                                    10+
                                </motion.div>
                                <div className="text-neutral-400 text-sm">Projects</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;