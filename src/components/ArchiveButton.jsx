const ArchiveButton = ({ id, onArchive, isArchive }) => {
  return (
    <button
      className="bg-yellow-500 text-white w-1/2 py-1 border rounded-sm transition duration-300 hover:bg-yellow-600"
      onClick={() => onArchive(id)}
    >
      {isArchive ? "Pindahkan" : "Arsipkan"}
    </button>
  );
};

export default ArchiveButton;
