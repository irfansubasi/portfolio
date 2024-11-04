export default function Badge({ text }) {
  return (
    <span className="text-buttonColor font-medium py-1 px-3 rounded-md border border-buttonColor">
      {text}
    </span>
  );
}
