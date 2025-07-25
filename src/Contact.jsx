import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
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

    const socialVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 200
            }
        }
    };

    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.section 
            className="c-space mt-15" 
            id="contact"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="w-full">
                <motion.p 
                    className="head-text mb-10"
                    variants={titleVariants}
                >
                    Let's Connect
                </motion.p>
                
                <motion.div 
                    className="flex justify-center space-x-8 mb-16"
                    variants={containerVariants}
                >
                    <motion.a 
                        href="https://github.com/yonghan18" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full transition-colors duration-200"
                        variants={socialVariants}
                        whileHover={{ 
                            y: -5,
                            backgroundColor: "rgba(55, 65, 81, 0.8)",
                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaGithub size={32} color="white" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://linkedin.com/in/yonghan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full transition-colors duration-200"
                        variants={socialVariants}
                        whileHover={{ 
                            y: -5,
                            backgroundColor: "rgba(55, 65, 81, 0.8)",
                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaLinkedin size={32} color="white" />
                    </motion.a>
                    
                    <motion.a 
                        href="mailto:yonghan@example.com"
                        className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full transition-colors duration-200"
                        variants={socialVariants}
                        whileHover={{ 
                            y: -5,
                            backgroundColor: "rgba(55, 65, 81, 0.8)",
                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaEnvelope size={32} color="white" />
                    </motion.a>
                </motion.div>
                
                <motion.div 
                    className="text-center border-t border-gray-700 pt-8"
                    variants={footerVariants}
                >
                    <p className="text-neutral-400 text-sm">
                        © 2025 Yong Han. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;