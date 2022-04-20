function input() {
  return (
    <div className="mt-6 flex flex-row">
      <div className="basis-1/2 p-5">
        <h3 className="font-bold">Basic Usage</h3>
        <div className="mb-3 flex flex-col space-y-2">
          <label className="select-none font-medium text-gray-700">Default</label>
          <input
            id="default"
            type="text"
            name="default"
            placeholder="Placeholder"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="mb-3 flex flex-col space-y-2">
          <label className="select-none font-medium text-gray-700">Success</label>
          <input
            id="success"
            type="text"
            name="success"
            placeholder="Placeholder"
            className="rounded-lg border border-green-500 px-4 py-2 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div className="mb-3 flex flex-col space-y-2">
          <label className="select-none font-medium text-gray-700">Warning</label>
          <input
            id="warning"
            type="text"
            name="warning"
            placeholder="Placeholder"
            className="rounded-lg border border-yellow-500 px-4 py-2 text-yellow-600 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-200"
          />
        </div>

        <div className="mb-3 flex flex-col space-y-2">
          <label className="select-none font-medium text-gray-700">Error</label>
          <input
            id="error"
            type="text"
            name="error"
            placeholder="Placeholder"
            className="rounded-lg border border-red-500 px-4 py-2 text-red-600 placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="username-success"
            className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Your name
          </label>
          <input
            type="text"
            id="username-success"
            className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Bonnie Green"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username available!
          </p>
        </div>
        <div>
          <label
            htmlFor="username-error"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Your name
          </label>
          <input
            type="text"
            id="username-error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            placeholder="Bonnie Green"
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
      </div>
      <div className="basis-1/2 p-5">
        <h3 className="mb-2 font-bold">Radio Group</h3>
        <fieldset>
          <legend className="sr-only">Countries</legend>

          <div className="mb-4 flex items-center">
            <input
              id="country-option-1"
              type="radio"
              name="countries"
              value="USA"
              className="h-4 w-4 border-gray-300"
              aria-labelledby="country-option-1"
              aria-describedby="country-option-1"
              checked
            />
            <label className="ml-2 block text-sm font-medium text-gray-900">United States</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="country-option-2"
              type="radio"
              name="countries"
              value="Germany"
              className="h-4 w-4 border-gray-300"
              aria-labelledby="country-option-2"
              aria-describedby="country-option-2"
            />
            <label className="ml-2 block text-sm font-medium text-gray-900">Germany</label>
          </div>
        </fieldset>
        <h3 className="mb-2 font-bold">Checkbox</h3>
        <fieldset>
          <legend className="sr-only">Countries</legend>

          <div className="mb-4 flex items-center">
            <input
              id="country-option-1"
              type="checkbox"
              name="countries"
              value="USA"
              className="h-4 w-4 border-gray-300"
              aria-labelledby="country-option-1"
              aria-describedby="country-option-1"
            />
            <label className="ml-2 block text-sm font-medium text-gray-900">United States</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="country-option-2"
              type="checkbox"
              name="countries"
              value="Germany"
              className="h-4 w-4 border-gray-300"
              aria-labelledby="country-option-2"
              aria-describedby="country-option-2"
            />
            <label className="ml-2 block text-sm font-medium text-gray-900">Germany</label>
          </div>
        </fieldset>
        <h3 className="font-bold">Text Area</h3>
        <textarea
          className="h-24 w-full resize-none overflow-hidden rounded-xl border p-2 text-black ring-1 ring-transparent transition duration-300 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Text Here . . ."
        ></textarea>
      </div>
    </div>
  );
}

export default input;
