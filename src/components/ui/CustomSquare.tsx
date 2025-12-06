interface CustomSquareProps {
  className?: string;
  children?: React.ReactNode;
  animationDelay?: string
}

export default function CustomSquare({ className = "", children, animationDelay }: CustomSquareProps) {
  return (
    <div className={` rounded-tl-[40px] rounded-tr-none  rounded-bl-[40px] rounded-br-[40px] ${className}`}
      style={{animationDelay}}>
      {children}
    </div>
  );
}
