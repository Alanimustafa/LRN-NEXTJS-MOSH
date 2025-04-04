const Spinner = () => {
    return (
      <div className="flex justify-center items-center h-20 ">
        <div className="w-18 h-18 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
        <div className="ml-4 text-xl text-orange-700">Please wait. Loading...</div>
      </div>
    );
  };
  
  export default Spinner;
  