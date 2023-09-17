import { showFormattedDate } from "../utils";

const NotesBody = ({ title, createdAt, body }) => {
  function capitalizeFirstLetter(text) {
    if (text.length > 1) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    } else {
      return text.toUpperCase();
    }
  }
  return (
    <>
      <div className="px-4 pt-4 pb-1">
        <h1 className="font-semibold text-xl truncate mb-1">
          {capitalizeFirstLetter(title)}
        </h1>
        <p className="text-xs">{showFormattedDate(createdAt)}</p>
      </div>
      <h3 className="px-4 py-2 w-full h-full text-sm leading-2 overflow-auto scrollbar-none">
        {body}
      </h3>
    </>
  );
};

export default NotesBody;
