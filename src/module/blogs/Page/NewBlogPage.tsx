/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import Editor from "../components/rich-text/editor";
import TextInput from "../components/Input/text-input";
import TextHelper from "../components/Input/text-helper";
import MouseSocket from "../components/mouse-socket/MouseSocket";


export interface ClientData {
  [index: string]: {
    name: string;
    color: number;
    mousePosition: { x: number; y: number };
  };
}

const NewBlog = () => {
  const generateElement = (element: string, index: number) => {
    const mapElements: { [index: string]: React.ReactNode } = {
      "text-helper": <TextHelper />,
      "text-label": <TextInput />,
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

  return (
    <div className="flex gap-4 flex-auto px-6 border">
      <div className="w-full flex flex-col items-center ">
        <div className="w-3/5 flex h-full border relative">
          <MouseSocket>
            <TextHelper />
          </MouseSocket>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
