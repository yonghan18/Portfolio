
const ProjectCard = ({ project, index }) => {
    const { title, description, image, technologies, liveUrl, sourceUrl } = project;
    return (
        <div className="flex sm:flex-col flex-row items-center gap-6 p-6 mt-15">

            <div className="sm:w-3xl w-auto">
                <img
                    src="/assets/portfolio.png"
                    alt="Project 1 Screenshot"
                    className="rounded-lg shadow-lg border border-white-700"
                />
            </div>

            <div className="sm:w-3xl w-auto">
                <p class="text-2xl font-bold text-white-700">Portfolio Webside</p>
                <p class="mt-2 text-white-800">
                Partner Portal empowers partner merchants to manage and grow their business through a self-serve experience.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-gray-800 text-white text-sm rounded-lg">React</span>
                    <span className="px-3 py-1 bg-gray-800 text-white text-sm rounded-lg">HTML</span>
                    <span className="px-3 py-1 bg-gray-800 text-white text-sm rounded-lg">Tailwind CSS</span>
                </div>

                <div className="relative flex justify-between gap-4 mt-4">
                    <a href="#" className="w-full max-w-[120px] text-center px-1 py-2 bg-gray-200 border border-black rounded-lg hover:bg-gray-300">
                        Source ↗
                    </a>

                    <a href="#" className="w-full max-w-[120px] text-center px-1 py-2 bg-gray-200 border border-black rounded-lg hover:bg-gray-300">
                        Live Site ↗
                    </a>
                </div>
            </div>
        </div>
    )
}

const Work = () => {
    return (
        <section className="c-space mt-15">
            <p className="head-text">My Projects</p>
            <Projects />
        </section>
    );
    }

export default Work;