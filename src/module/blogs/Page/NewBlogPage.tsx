/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import Editor from "../components/rich-text/editor";
import TextInput from "../components/Input/text-input";
import TextHelper from "../components/Input/text-helper";
import MouseSocket from "../components/mouse-socket/MouseSocket";
import DropDown from "../components/dropdown/dropdown";
import TextEditor from "../components/Input/TextEditor";

export interface ClientData {
  [index: string]: {
    name: string;
    color: number;
    mousePosition: { x: number; y: number };
  };
}

const NewBlog = () => {

  return (
    <div className="flex gap-4 flex-auto px-6 border">
      <div className="w-full flex flex-col items-center ">
        <div className="w-3/5 flex h-full border relative">
          <MouseSocket>
            <TextEditor />
          </MouseSocket>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
