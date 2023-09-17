const DeleteButton = ({ id, onDelete }) => {
  return (
    <button
      className="bg-red-500 text-white w-1/2 py-1 rounded-sm transition duration-300 hover:bg-red-600"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
