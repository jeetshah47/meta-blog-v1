type CursorProps = {
  position: { x: number; y: number };
  colorIndex: number;
};

const Cursor = ({ position, colorIndex }: CursorProps) => {
  const colors = ["cyan", "gray", "rose"];
  return (
    <div className="absolute" style={{
      top: position.y,
      left: position.x,
    }}>
      <img
        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='${colors[colorIndex]}' fill-rule='evenodd' d='M4.38 3.075a1 1 0 0 0-1.305 1.306l7 17a1 1 0 0 0 1.844.013l2.685-6.265a1 1 0 0 1 .525-.525l6.265-2.685a1 1 0 0 0-.013-1.844z' clip-rule='evenodd'/%3E%3C/svg%3E`}
        className={`mouse-server `}
      />
      <p className={`text-[${colors[colorIndex]}] p-2 rounded`}>Client {colorIndex}</p>
    </div>
  );
};

export default Cursor;
