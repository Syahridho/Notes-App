import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      archived: false,
      limit: 50,
    };

    this.onTitleChangeEventHandle = this.onTitleChangeEventHandle.bind(this);
    this.onBodyChangeEventHandle = this.onBodyChangeEventHandle.bind(this);
    this.onArchivedChangeEventHandle =
      this.onArchivedChangeEventHandle.bind(this);
    this.onSubmitEventHandle = this.onSubmitEventHandle.bind(this);
  }

  onTitleChangeEventHandle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandle(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onArchivedChangeEventHandle(event) {
    this.setState(() => {
      return {
        archived: event.target.checked,
      };
    });
  }

  onSubmitEventHandle(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        archived: false,
      };
    });
  }

  render() {
    return (
      <div className="flex flex-col w-10/12 md:w-2/4 lg:w-2/5 mx-auto my-16">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold my-2">Buat Catatan</h1>
          <p
            className={
              this.state.title.length >= 50 ? "text-red-500" : "text-black"
            }
          >
            Sisa karakter : {this.state.limit - this.state.title.length}
          </p>
        </div>
        <form onSubmit={this.onSubmitEventHandle}>
          <input
            className="w-full border my-1 p-2 rounded"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandle}
            maxLength={50}
            required
          />
          <br />
          <textarea
            className="w-full h-36 border my-1 p-2 rounded"
            type="text"
            placeholder="Tuliskan catatanmu disini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandle}
            required
          />
          <br />
          <label>
            <input
              className="me-2 cursor-pointer"
              type="checkbox"
              value={this.state.archived}
              onChange={this.onArchivedChangeEventHandle}
              checked={this.state.archived}
            />
            Arsipkan
          </label>

          <button
            className="w-full border py-2 rounded bg-slate-800 text-white"
            type="submit"
          >
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
