export default function Button({ text }) {
  return (
    <button className="text-buttonColor border border-buttonColor py-2 px-6 rounded-md hover:bg-buttonColor hover:text-white">
      {text}
    </button>
  );
}
