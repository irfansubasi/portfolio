import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Button({ text, icon, isSolid, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className={`${
        isSolid
          ? 'bg-buttonColor text-backgroundColor'
          : 'bg-btnBackgroundColor text-buttonColor'
      } border border-buttonColor py-2 px-6 rounded-md flex gap-x-3 hover:scale-110`}
    >
      {icon &&
        (icon === 'github' ? (
          <FaGithub className="w-5 h-5" />
        ) : (
          <FaLinkedinIn className="w-5 h-5" />
        ))}

      {text}
    </a>
  );
}
