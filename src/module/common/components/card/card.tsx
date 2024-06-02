type CardProps = {
  padding?: string;
  children?: React.ReactNode;
  width?: string;
  border?: string;
};

const Card = ({ padding, children, width, border }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-dark-primary rounded-xl ${padding ?? "p-2"} ${
        width ?? "w-full"
      } ${border ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
