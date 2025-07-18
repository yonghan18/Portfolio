import { achievements } from './constants';

const AchievementCard = ({ achievement }) => {
    const { title, organization, date, description, category } = achievement;
    
    return (
        <div> 
            <div>
                <h3>{title}</h3>
                <span>{date}</span>
            </div>
            <p>{organization}</p>
            <p>{description}</p>
            <span>{category}</span>
        </div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements">
            <p>Achievements & Activities</p>
            <div>
                {achievements.map((achievement, index) => (
                    <AchievementCard key={achievement.id} achievement={achievement} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Achievements;