import NotesBody from "./NotesBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

const NotesItem = ({
  id,
  title,
  createdAt,
  body,
  onDelete,
  onArchive,
  isArchive,
}) => {
  return (
    <div className="flex flex-col border rounded shadow">
      <NotesBody title={title} createdAt={createdAt} body={body} />
      <div className="place-items-end">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
      </div>
    </div>
  );
};

export default NotesItem;
