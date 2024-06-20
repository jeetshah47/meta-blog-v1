import { useContext, useEffect, useRef, useState } from "react";
import Cursor from "./Cursor";
import { ClientData } from "./../../Page/NewBlogPage";
import { WebsocketContext } from "../../../common/utils/socket";

const MouseSocket = () => {
  const ref = useRef<HTMLDivElement>(null);
  const socket = useContext(WebsocketContext);
  const [clients, setClients] = useState<ClientData>();

  // const [isInside, setIsInside] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseLeave = () => {
    // setIsInside(false);
  };
  const handleMouseEnter = () => {
    // setIsInside(true);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log(e.clientX, e.clientY);
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      console.log(
        "sending",
        e.clientX - rect.left + scrollX,
        e.clientY - rect.top + scrollY
      );

      // setPosition({
      //   x: e.clientX - rect.left + scrollX,
      //   y: e.clientY - rect.top + scrollY,
      // });
      socket.emit("receiveUpdates", {
        x: e.clientX - rect.left + scrollX,
        y: e.clientY - rect.top + scrollY,
        id: socket.id,
      });
    }
  };

  useEffect(() => {
    socket.on("newConnection", (data) => {
      console.log("client from server", data);
      setClients(data.client);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("sendUpdate", (data) => {
      console.log("receive", data.mousePostion.id);
      if (clients) {
        setClients({
          ...clients,
          [data.mousePostion.id]: {
            ...clients[data.mousePostion.id],
            mousePosition: {
              x: data.mousePostion.x,
              y: data.mousePostion.y,
            },
          },
        });
      }
    });
  }, [clients, socket]);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className="flex-auto mouse-client"
      ref={ref}
    >
      {clients &&
        Object.keys(clients)
          .filter((item) => item !== socket.id)
          .map((key) => (
            <Cursor key={key} position={clients[key].mousePosition} />
          ))}
    </div>
  );
};

export default MouseSocket;
