/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import io from 'socket.io-client';
import { useState, useEffect, useRef } from "react";
import Editor from "../components/rich-text/editor";
import TitleInput from '../components/Input/title-input';
import TextHelper from '../components/Input/text-helper';

const socket = io('http://localhost:3001')

const NewBlog = () => {
  const [elements, setElements] = useState<string[]>([
    "text-helper"
  ]);
  const [coordinates, setCoordinates] = useState({x: 0, y: 0});

  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
//   const [fieldId, setFieldID] = useState("jeet")

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
  
  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
    return () => {
    }
  }, []);

//   const handleAddElement = (name: string) => {
//     const clone = [...elements];
//     clone.push(name);
//     setElements([...clone]);
//     coordinates
//   };

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("windows", window.scrollX)
    if(rect) {
      socket.emit('mouse-event', {x: e.clientX - rect.left, y: e.clientY - rect.top})
    }
  }

  useEffect(() => {
    socket.on("mouse-receive", (message) => {
      if(socket.id !== message.id) {
        console.log("client", message);
        setCoordinates({x: message.coor.x, y: message.coor.y})
      }
    })
  }, [])

  return (
    <div className="flex gap-4 flex-auto px-6 ">
      <div className="w-full flex flex-col items-center ">
        <div className="w-3/5 h-full border relative" ref={ref} onMouseMove={mouseMove}>
        {/* <FollowPointer x={coordinates.x} y={coordinates.y} /> */}
          {/* <FollowerPointerCard title="Me">
          </FollowerPointerCard> */}
          {elements.map((element, index) => generateElement(element, index))}
         
        </div>
      </div>
    </div>
  );
};
 
export default NewBlog;
