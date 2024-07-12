const Button = ({ className = "", onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1e324a] text-white px-[26.5px] py-[12px] text-[16px] rounded-[8px] font-inter ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
