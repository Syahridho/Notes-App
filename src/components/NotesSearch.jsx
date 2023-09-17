const NotesSearch = ({ search, onSearch }) => {
  return (
    <div className="flex justify-between px-10 md:px-24 lg:px-36 py-2 md:py-4 border-b-2 sticky top-0 bg-white shadow">
      <h1 className="font-bold text-3xl">NOTES</h1>
      <input
        className="border w-1/3 p-2 rounded"
        type="text"
        placeholder="Cari catatan..."
        value={search}
        onChange={(event) => onSearch(event)}
      />
    </div>
  );
};

export default NotesSearch;
