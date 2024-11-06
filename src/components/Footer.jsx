import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { language, translations } = useLanguage();

  return (
    <footer className="projects-section bg-footercolor">
      <div className="footer-content flex flex-col gap-y-12 container mx-auto px-24 py-24">
        <div className="slogan">
          <h2 className="font-semibold text-4xl text-mainHeadingColor">
            {translations[language].footer.heading1}
            <br />
            {translations[language].footer.heading2}
          </h2>
        </div>
        <div className="second-part flex flex-col lg:flex-row gap-y-16 justify-between">
          <span>
            👉
            <a
              className="underline font-medium text-[#AF0C48]"
              href="mailto:irfannsubasi@gmail.com"
            >
              irfannsubasi@gmail.com
            </a>
          </span>
          <nav className="flex gap-x-8">
            <a
              className="text-mainHeadingColor font-medium"
              target="_blank"
              href="https://medium.com/@irfansubasi"
            >
              {translations[language].footer.blog}
            </a>
            <a
              className="text-[#00AB6B] font-medium"
              target="_blank"
              href="https://github.com/irfansubasi"
            >
              Github
            </a>
            <a
              className="text-[#0077B5] font-medium"
              target="_blank"
              href="https://www.linkedin.com/in/irfansubasi/"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
