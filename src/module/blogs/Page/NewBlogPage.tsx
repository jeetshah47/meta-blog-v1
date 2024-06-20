/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect, useContext } from "react";
import Editor from "../components/rich-text/editor";
import TitleInput from "../components/Input/title-input";
import TextHelper from "../components/Input/text-helper";
import { color, MotionValue, useMotionValue } from "framer-motion";
import MouseSocket from "../components/mouse-socket/MouseSocket";

interface Position {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export interface ClientData {
  [index: string]: {
    name: string;
    color: number;
    mousePosition: { x: number; y: number };
  };
}

const NewBlog = () => {
  const [elements, setElements] = useState<string[]>(["text-helper"]);

  // const [position, setPosition] = useState<Position[]>({
  //   x: useMotionValue(0),
  //   y: useMotionValue(0),
  // });
  const generateElement = (element: string, index: number) => {
    const mapElements: { [index: string]: React.ReactNode } = {
      "text-helper": <TextHelper />,
      "text-label": <TitleInput />,
      "text-para": <Editor height={"200px"} />,
      "media-image": (
        <picture>
          <img className="border w-full" alt="sd" src="/imgs/dummer.png" />
        </picture>
      ),
      "section-code": <div></div>,
    };

    return <div key={index}>{mapElements[element]}</div>;
  };

  // useEffect(() => {
  //   console.log(position.x.get(), position.y.get());
  //   socket.emit("receiveUpdates", {
  //     x: clients.get(),
  //     y: position.x.get(),
  //     id: socket.id,
  //   });
  // }, [position, socket]);

  return (
    <div className="flex gap-4 flex-auto px-6 border">
      <div className="w-full flex flex-col items-center ">
        <div className="w-3/5 flex h-full border relative">
          <MouseSocket />
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
