import { useLanguage } from '../contexts/LanguageContext';
import Divider from './Divider';

export default function Skills() {
  const { language, translations } = useLanguage();

  return (
    <section id="skills" className="skills-section container mx-auto px-24">
      <div className="skills-content  mt-36">
        <h1 className="font-semibold text-5xl text-mainHeadingColor">
          {translations[language].skills.skills}
        </h1>
        <div className="skill-group flex flex-col lg:flex-row gap-x-32 gap-y-12 mt-10">
          <div className="lg:w-1/3">
            <h3 className="text-headingColor text-center lg:text-left font-medium text-3xl mb-8">
              JavaScript
            </h3>
            <p className="text-textColor text-center lg:text-left">
              {translations[language].skills.js}
            </p>
          </div>
          <div className="lg:w-1/3">
            <h3 className="text-headingColor text-center lg:text-left font-medium text-3xl mb-8">
              React.Js
            </h3>
            <p className="text-textColor text-center lg:text-left">
              {translations[language].skills.react}
            </p>
          </div>
          <div className="lg:w-1/3">
            <h3 className="text-headingColor text-center lg:text-left font-medium text-3xl mb-8">
              Node.Js
            </h3>
            <p className="text-textColor text-center lg:text-left">
              {translations[language].skills.nodejs}
            </p>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
