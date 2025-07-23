const Contact = () => {
    return (
        <section className="c-space mt-15" id="contact">
            <div className="w-full">
                <p className="head-text mb-10">
                    Let's Connect
                </p>
                
                {/* Placeholder for social links */}
                <div className="flex justify-center space-x-8 mb-16">
                    <p>GitHub</p>
                    <p>LinkedIn</p>
                    <p>Email</p>
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