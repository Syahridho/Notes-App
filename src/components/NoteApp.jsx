import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "./../utils/index";
import NotesInput from "./NotesInput";
import NotesSearch from "./NotesSearch";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onSearchHandler(event) {
    this.setState({
      search: event.target.value,
    });
  }

  onAddNoteHandler({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  render() {
    const noteSearch = this.state.search
      ? this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(this.state.search.toLowerCase())
        )
      : [...this.state.notes];

    return (
      <div>
        <NotesSearch
          search={this.state.search}
          onSearch={this.onSearchHandler}
        />
        <NotesInput addNotes={this.onAddNoteHandler} />
        <h1 className="text-2xl font-semibold mx-10 md:mx-24 lg:mx-36 mt-24 mb-6">
          Catatan Aktif
        </h1>
        <NotesList
          notes={noteSearch.filter((note) => !note.archived)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h1 className="text-2xl font-semibold mx-10 md:mx-24 lg:mx-36 mt-24 mb-6 after:content-['*'] after:ml-0.5 after:text-red-500">
          Catatan Arsip
        </h1>
        <NotesList
          notes={noteSearch.filter((note) => note.archived)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
