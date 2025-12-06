interface ButtonProps {
  label: string;  
  className?: string;         
  onClick?: () => void;    
}

export default function ButtonComponent({label, className = "", onClick}: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className={`rounded-2xl text-[20px] font-medium transition-all duration-300 px-6 py-2 cursor-pointer ${className}`}>
      {label}
    </button>
  );
}
