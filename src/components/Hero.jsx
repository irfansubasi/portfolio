import { useLanguage } from '../contexts/LanguageContext';
import heroImg from '../assets/images/hero.gif';
import Button from './Button';

export default function Hero() {
  const { language, translations } = useLanguage();

  return (
    <section className="hero-section container mx-auto px-24">
      <div className="hero-content">
        <div className="name flex items-center gap-x-4 my-12">
          <div className="w-32 h-0 bg-headingColor border-headingColor border"></div>
          <span className="font-medium text-headingColor">İrfan Subaşı</span>
        </div>
        <div className="columns flex-col-reverse gap-y-6 lg:gap-y-0 lg:flex-row flex my-8">
          <div className="left-side flex-1 items-center lg:items-start lg:basis-3/5 flex flex-col gap-y-8">
            <div className="headings font-bold text-center lg:text-left text-7xl text-mainHeadingColor">
              <h1>{translations[language].welcome.bigHeading1}</h1>
              <h1>{translations[language].welcome.bigHeading2}</h1>
            </div>
            <p className="text-textColor text-lg w-5/6 text-center lg:text-left">
              {translations[language].welcome.text}
            </p>
            <div className="btn-group flex flex-col lg:flex-row gap-y-6 gap-x-4">
              <Button
                link={translations[language].nav.hireLink}
                isSolid={true}
                text={translations[language].nav.hire}
              />
              <Button
                link={translations[language].nav.githubLink}
                icon="github"
                text="Github"
              />
              <Button
                link={translations[language].nav.linkedinLink}
                icon="linkedin"
                text="LinkenIn"
              />
            </div>
          </div>
          <div className="right-side flex-1 lg:basis-2/5">
            <img className="rounded-3xl" src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
