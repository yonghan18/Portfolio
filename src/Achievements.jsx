import { achievements } from './constants';

const AchievementCard = ({ achievement }) => {
    const { title, organization, date, description, category } = achievement;
    
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700/30">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white-700">{title}</h3>
                <span className="text-neutral-400 text-sm">{date}</span>
            </div>
            
            <p className="text-blue-400 font-medium mb-3">{organization}</p>
            <p className="text-neutral-400 leading-relaxed mb-4">{description}</p>
            <span className="px-3 py-1 bg-gray-600 text-white text-xs font-semibold rounded-lg inline-block">
                {category}
            </span>
        </div>
    );
};

const Achievements = () => {
    return (
        <section className="c-space mt-15" id="achievements">
            <div className="w-full">
                <p className="head-text mb-10">
                    Achievements & Activities
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* ... */}
                </div>
            </div>
        </section>
    );
};

export default Achievements;