export default function () {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-light mb-3">Join the movement!</h2>
      <div className="flex items-center justify-center">
        <form>
          <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
            <input
              className="py-3 px-4 bg-gray-200 light:bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="py-3 px-4 bg-emerald-700 text-emerald-100  font-semibold uppercase hover:bg-emerald-600">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
