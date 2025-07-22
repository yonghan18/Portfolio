import { achievements } from './constants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AchievementCard = ({ achievement, index }) => {
    const { title, organization, date, description, category } = achievement;
    
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1
            }
        }
    };
    
    return (
        <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700/30"
            variants={cardVariants}
            whileHover={{ 
                y: -5,
                backgroundColor: "rgba(55, 65, 81, 0.8)",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(156, 163, 175, 0.5)"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex justify-between items-start mb-4">
                <motion.h3 
                    className="text-xl font-bold text-white-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                >
                    {title}
                </motion.h3>
                <motion.span 
                    className="text-neutral-400 text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                >
                    {date}
                </motion.span>
            </div>
            
            <motion.p 
                className="text-blue-400 font-medium mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
            >
                {organization}
            </motion.p>
            
            <motion.p 
                className="text-neutral-400 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
            >
                {description}
            </motion.p>
            
            <motion.span 
                className="px-3 py-1 bg-gray-600 text-white text-xs font-semibold rounded-lg inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
            >
                {category}
            </motion.span>
        </motion.div>
    );
};

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
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
            id="achievements"
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
                    Achievements & Activities
                </motion.p>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {achievements.map((achievement, index) => (
                        <AchievementCard key={achievement.id} achievement={achievement} index={index} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Achievements; 