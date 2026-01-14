const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-white text-lg tracking-[0.4em] uppercase animate-pulse">
        <img
          src="/stride-logo.png"
          alt="stride scents Logo"
          className="w-45 h-45 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
