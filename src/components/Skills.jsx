import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { language, translations } = useLanguage();

  return (
    <section className="skills-section">
      <div className="skills-content container mx-auto px-24 mt-36">
        <h1 className="font-semibold text-5xl">
          {translations[language].skills.skills}
        </h1>
        <div className="skill-group flex gap-x-32 mt-10">
          <div className="w-1/3">
            <h3 className="text-headingColor font-medium text-3xl mb-8">
              JavaScript
            </h3>
            <p className="text-textColor">{translations[language].skills.js}</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-headingColor font-medium text-3xl mb-8">
              React.Js
            </h3>
            <p className="text-textColor">
              {translations[language].skills.react}
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-headingColor font-medium text-3xl mb-8">
              Node.Js
            </h3>
            <p className="text-textColor">
              {translations[language].skills.nodejs}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
