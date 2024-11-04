export default function Button({ text, icon, isSolid, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className={`${
        isSolid
          ? 'bg-buttonColor text-white'
          : 'bg-transparent text-buttonColor'
      } border border-buttonColor py-2 px-6 rounded-md flex gap-x-3 hover:scale-110`}
    >
      {icon && <img className="w-5 h-5" src={icon} alt="icon" />}

      {text}
    </a>
  );
}
