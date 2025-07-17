import { projects } from './constants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project, index }) => {
    const { title, description, image, technologies, liveUrl, sourceUrl } = project;
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-10%" });
    
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: index * 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 0.6,
                delay: index * 0.2 + 0.1
            }
        }
    };

    const techVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };
    
    return (
        <motion.div 
            ref={cardRef}
            className="flex sm:flex-col flex-row items-center gap-6 p-6 mt-15"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div 
                className="sm:w-3xl w-auto"
                variants={imageVariants}
            >
                <motion.img
                    src={image}
                    alt={`${title} Screenshot`}
                    className="rounded-lg shadow-lg border border-white-700"
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            <motion.div 
                className="sm:w-3xl w-auto"
                variants={cardVariants}
            >
                <motion.p 
                    className="text-2xl font-bold text-white-700"
                    variants={itemVariants}
                >
                    {title}
                </motion.p>
                <motion.p 
                    className="mt-2 text-white-800"
                    variants={itemVariants}
                >
                    {description}
                </motion.p>

                <motion.div 
                    className="flex flex-wrap gap-2 mt-4"
                    variants={cardVariants}
                >
                    {technologies.map((tech, techIndex) => (
                        <motion.span 
                            key={techIndex} 
                            className="px-3 py-1 bg-gray-800 text-white text-sm rounded-lg"
                            variants={techVariants}
                            whileHover={{ 
                                y: -2,
                                backgroundColor: "rgba(55, 65, 81, 0.8)"
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div 
                    className="relative flex justify-between gap-4 mt-4"
                    variants={cardVariants}
                >
                    <motion.a 
                        href={liveUrl} 
                        className="w-full max-w-[120px] text-center px-1 py-2 bg-gray-200 border border-black rounded-lg"
                        whileHover={{ 
                            y: -2,
                            backgroundColor: "#e5e7eb",
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        Live Site
                    </motion.a>

                    <motion.a 
                        href={sourceUrl} 
                        className="w-full max-w-[120px] text-center px-1 py-2 bg-gray-200 border border-black rounded-lg"
                        whileHover={{ 
                            y: -2,
                            backgroundColor: "#e5e7eb",
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        Source
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Work = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.section 
            className="c-space mt-15" 
            id="works"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.p 
                className="head-text"
                variants={titleVariants}
            >
                My Projects
            </motion.p>
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </motion.section>
    );
};

export default Work;