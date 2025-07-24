import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="c-space mt-15" id="contact">
            <div className="w-full">
                <p className="head-text mb-10">
                    Let's Connect
                </p>
                
                {/* Placeholder for social links */}
                <div className="flex justify-center space-x-8 mb-16">
                <a 
                        href="https://github.com/yonghan18" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full transition-colors duration-200"
                    >
                        <FaGithub size={32} color="white" />
                    </a>
                    
                    <a 
                        href="https://linkedin.com/in/yonghan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full transition-colors duration-200"
                    >
                        <FaLinkedin size={32} color="white" />
                    </a>
                    
                    <a 
                        href="mailto:yonghan@example.com"
                        className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full transition-colors duration-200"
                    >
                        <FaEnvelope size={32} color="white" />
                    </a>
                </div>
                
                <div className="text-center border-t border-gray-700 pt-8">
                    <p className="text-neutral-400 text-sm">
                        © 2025 Yong Han. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;