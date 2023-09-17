import NotesItem from "./NotesItem";

const NotesList = ({ notes, onDelete, onArchive, createdAt }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 md:mx-24 lg:mx-36 my-10">
      {notes.length === 0 ? (
        <p className="text-center col-span-4">Data tidak ada</p>
      ) : (
        notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            isArchive={note.archived}
            createdAt={createdAt}
            {...note}
          />
        ))
      )}
    </div>
  );
};

export default NotesList;
