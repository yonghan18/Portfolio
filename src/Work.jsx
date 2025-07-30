import { projects } from './constants';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'; // 1. Ensure useEffect is imported

const ProjectCard = ({ project, index }) => {
    const { title, description, image, video_webm, video_mp4, technologies, liveUrl, sourceUrl } = project;
    const cardRef = useRef(null);
    const videoRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-10%" });
    
    // State for video functionality
    const [isHovered, setIsHovered] = useState(false);
    
    // Check if project has video sources
    const hasVideo = video_webm || video_mp4;

    // 2. Use an effect to control video playback based on hover state
    useEffect(() => {
        if (isHovered && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video autoplay was prevented:", error);
            });
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video to the start
        }
    }, [isHovered]); // This hook runs whenever `isHovered` changes
    
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
                className="sm:w-3xl w-auto relative overflow-hidden rounded-lg"
                variants={imageVariants}
                // 3. Simplified hover handlers
                onMouseEnter={() => { if (hasVideo) setIsHovered(true); }}
                onMouseLeave={() => { if (hasVideo) setIsHovered(false); }}
            >
                {/* Static Image */}
                <motion.img
                    src={image}
                    alt={`${title} Screenshot`}
                    className={`rounded-lg shadow-lg border border-white-700 transition-opacity duration-300 ${
                        isHovered ? 'opacity-0' : 'opacity-100'
                    }`}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Video Preview (only if project has video) */}
                {hasVideo && (
                    <motion.video
                        ref={videoRef}
                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg border border-white-700 transition-opacity duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                        muted
                        loop
                        playsInline
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ pointerEvents: 'none' }}
                    >
                        {/* Browser will automatically pick the best source it supports */}
                        <source src={video_webm} type="video/webm" />
                        <source src={video_mp4} type="video/mp4" />
                    </motion.video>
                )}

                {/* Video indicator (small play icon overlay) */}
                {hasVideo && !isHovered && (
                    <motion.div
                        className="absolute bottom-2 right-2 bg-black/50 rounded-full p-2 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <svg 
                            className="w-4 h-4 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                    </motion.div>
                )}
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