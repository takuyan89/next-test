const PrPage = () => {
  return (
    <div className="flex justify-between items-center">
      <div>test</div>
      <div className="flex gap-10">
        <div className="bg-slate-100">test2</div>
        <div className="bg-slate-300">test3</div>
        <div className="bg-slate-700">test4</div>
      </div>
      <h1 className="text-4xl text-green-700 text-center font-semibold">
        hello
      </h1>
      <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded transform hover:scale-110 hover:bg-red-700 duration-1000">
        button
      </button>
    </div>
  );
};

export default PrPage;
