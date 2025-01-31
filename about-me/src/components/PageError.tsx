function PageError() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center bg-gray-800 p-6 rounded-lg">
        <h1 className="text-9xl font-bold text-lime-500">404</h1>
        <p className="mt-4 text-3xl font-bold text-gray-300">Page Not Found</p>
        <button className="mt-4 py-2 px-4 bg-lime-500 hover:bg-lime-700 text-white rounded-lg">
          <a href="/">Go Home</a>
        </button>
      </div>
    </div>
  );
}

export default PageError;
