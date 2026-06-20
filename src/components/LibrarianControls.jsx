export default function LibrarianControls() {
  return (
    <div className="mt-10 p-5 border rounded-xl">

      <h3 className="font-bold mb-4">
        Librarian Controls
      </h3>

      <div className="flex gap-3">

        <button className="btn btn-info">
          Edit
        </button>

        <button className="btn btn-warning">
          Unpublish
        </button>

        <button className="btn btn-error">
          Delete
        </button>

      </div>

    </div>
  );
}