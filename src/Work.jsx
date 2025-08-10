import { projects } from './constants';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Modal component for unavailable live sites
const UnavailableModal = ({ isOpen, onClose, project }) => {
    const { title, category, technologies } = project;
    
    const getModalContent = () => {
        // Check if this is a source code unavailable case
        if (project.sourceUrl === "#") {
            return {
                icon: "CODE",
                title: "Source Code Unavailable",
                message: "The source code for this project cannot be shared due to policy restrictions or confidentiality agreements.",
                alternatives: [
                    "Watch the demo video above",
                    "View project details and technologies used"
                ]
            };
        }
        
        if (category === "Desktop Application" || technologies.includes("Java Swing")) {
            return {
                icon: "DESKTOP",
                title: "Desktop Application",
                message: "This is a Java desktop application that requires local installation.",
                alternatives: [
                    "Download the JAR file from GitHub",
                    "Watch the demo video above",
                    "View source code and documentation"
                ]
            };
        }
        if (category === "Mobile Application" || technologies.includes("Kotlin")) {
            return {
                icon: "MOBILE",
                title: "Android Mobile App",
                message: "This is a native Android application built with Kotlin and Jetpack Compose.",
                alternatives: [
                    "Download APK file (Android only)",
                    "Watch the demo video above",
                    "View source code on GitHub"
                ]
            };
        }
        return {
            icon: "INFO",
            title: "Live Demo Unavailable",
            message: "This project doesn't have a live web demo available.",
            alternatives: [
                "Watch the demo video above",
                "View source code and documentation",
                "Contact me for more details"
            ]
        };
    };

    const content = getModalContent();

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-gray-900 rounded-xl p-6 max-w-md w-full mx-4 border border-gray-700"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-blue-400 bg-blue-400/20 px-2 py-1 rounded">
                                {content.icon}
                            </span>
                            <h3 className="text-xl font-bold text-white">{content.title}</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                        <p className="text-gray-300 mb-4">{content.message}</p>
                        <div className="space-y-2">
                            <p className="text-sm font-semibold text-gray-400 mb-2">Available Options:</p>
                            {content.alternatives.map((alternative, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="text-blue-400">-</span>
                                    <span>{alternative}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <motion.button
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Got it
                        </motion.button>
                        {project.sourceUrl !== "#" ? (
                            <motion.a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Source
                            </motion.a>
                        ) : (
                            <motion.button
                                onClick={onClose}
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Understood
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ProjectCard = ({ project, index }) => {
    const { title, description, image, video_webm, video_mp4, technologies, liveUrl, sourceUrl } = project;
    const cardRef = useRef(null);
    const videoRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-10%" });
    
    // State for video functionality and modal
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    // Check if project has video sources
    const hasVideo = video_webm || video_mp4;
    
    // Check if live site is available
    const isLiveSiteAvailable = liveUrl;

    // Handle live site click
    const handleLiveSiteClick = () => {
        if (isLiveSiteAvailable && liveUrl !== "#") {
            window.open(liveUrl, '_blank');
        }
        else if (liveUrl === "#") {
            // not changing window, solely scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else {
            setShowModal(true);
        }
    };

    // Handle source code click
    const handleSourceClick = () => {
        if (sourceUrl && sourceUrl !== "#") {
            window.open(sourceUrl, '_blank');
        } else {
            setShowModal(true);
        }
    };

    // Video playback control - runs whenever hover state changes
    useEffect(() => {
        if (isHovered && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video autoplay was prevented:", error);
            });
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video to the start
        }
    }, [isHovered]);
    
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
        <>
            <motion.div 
                ref={cardRef}
                className="flex flex-col sm:flex-col items-center gap-6 p-6 mt-15"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div 
                    className="sm:w-3xl w-auto relative overflow-hidden rounded-lg"
                    variants={imageVariants}
                    // Simple hover handlers - only activate if project has video
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
                            {/* Browser automatically selects the best supported format */}
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
                        <motion.button
                            onClick={handleLiveSiteClick}
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
                        </motion.button>

                        <motion.button
                            onClick={handleSourceClick}
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
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Modal for unavailable live sites */}
            <UnavailableModal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
                project={project} 
            />
        </>
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