import Multiselect from "multiselect-react-dropdown";
import Datepicker from "@themesberg/tailwind-datepicker/Datepicker";

function select() {
  return (
    <>
      <div className="w-2/4 p-14">
        <div className="w-1/4">
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Select your country
          </label>
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className="mt-5 w-1/4">
          <Multiselect
            displayValue="key"
            groupBy="cat"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={[
              {
                cat: "Group 1",
                key: "Option 1",
              },
              {
                cat: "Group 1",
                key: "Option 2",
              },
              {
                cat: "Group 1",
                key: "Option 3",
              },
              {
                cat: "Group 2",
                key: "Option 4",
              },
              {
                cat: "Group 2",
                key: "Option 5",
              },
              {
                cat: "Group 2",
                key: "Option 6",
              },
              {
                cat: "Group 2",
                key: "Option 7",
              },
            ]}
            showCheckbox
          />
        </div>
        <Datepicker />
      </div>
    </>
  );
}

export default select;
