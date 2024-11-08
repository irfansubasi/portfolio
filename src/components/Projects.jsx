import { useLanguage } from '../contexts/LanguageContext';
import Badge from './Badge';

export default function Projects() {
  const { language, translations } = useLanguage();
  return (
    <section id="projects" className="projects-section container mx-auto px-24">
      <div className="projects-content mb-32">
        <h1 className="font-semibold text-5xl text-mainHeadingColor">
          {translations[language].projects.projectsH}
        </h1>
        <div className="showcase-group flex flex-col lg:flex-row gap-y-12 gap-x-24 mt-12">
          {/* projects map */}
          {translations[language].projects.projectList.map((item, index) => (
            <div
              key={index}
              className={`project-${index} lg:w-1/3 flex flex-col gap-y-6`}
            >
              <div className="w-full h-48">
                <img
                  className="object-cover w-full h-full"
                  src={item.src}
                  alt={`project-${index}-image`}
                />
              </div>

              <h3 className="text-headingColor font-medium text-3xl">
                {item.heading}
              </h3>
              <p className="text-textColor flex-grow">{item.desc}</p>
              <div className="badges flex flex-wrap gap-4">
                {item.badges.map((element, index) => (
                  <Badge key={index} text={element} />
                ))}
              </div>

              <p className="flex justify-between text-headingColor font-medium underline mt-auto">
                <a target="_blank" href={`${item.link}`}>
                  Github
                </a>{' '}
                <a target="_blank" href={`${item.live}`}>
                  {translations[language].projects.view}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
