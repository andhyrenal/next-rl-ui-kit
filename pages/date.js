import "react-datepicker/dist/react-datepicker.css";

function date() {
  return (
    <div className="text-center mt-5">
      <input
        id="default"
        type="date"
        className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}

export default date;
