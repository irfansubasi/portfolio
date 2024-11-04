import { useLanguage } from '../contexts/LanguageContext';
import Divider from './Divider';

export default function Profile() {
  const { language, translations } = useLanguage();

  return (
    <section className="profile-section container mx-auto px-24">
      <div className="profile-content">
        <h1 className="font-semibold text-5xl">
          {translations[language].profile.profileH}
        </h1>
        <div className="info-group flex mt-8 gap-x-16">
          <div className="profile-details w-1/2">
            <h3 className="text-headingColor font-medium text-3xl mb-6">
              {translations[language].profile.profileH}
            </h3>
            <div className="details flex flex-col gap-y-6 font-semibold">
              <p className="flex justify-between">
                {translations[language].profile.birthday}
                <span className="w-1/2 text-textColor font-normal">
                  17.10.1996
                </span>
              </p>
              <p className="flex justify-between">
                {translations[language].profile.city}
                <span className="w-1/2 text-textColor font-normal">Bursa</span>
              </p>
              <p className="flex justify-between">
                {translations[language].profile.edu}
                <span className="w-1/2 text-textColor font-normal">
                  {translations[language].profile.eduDetail1}
                  <br />
                  {translations[language].profile.eduDetail2}
                </span>
              </p>
              <p className="flex justify-between">
                {translations[language].profile.prefer}
                <span className="w-1/2 text-textColor font-normal">
                  Frontend, Backend, Fullstack
                </span>
              </p>
            </div>
          </div>
          <div className="aboutme w-1/2">
            <h3 className="text-headingColor font-medium text-3xl mb-6">
              {translations[language].profile.aboutH}
            </h3>
            <div className="about-details">
              <p className="text-textColor">
                {translations[language].profile.aboutText1}
              </p>
              <br />
              <p className="text-textColor">
                {translations[language].profile.aboutText2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
