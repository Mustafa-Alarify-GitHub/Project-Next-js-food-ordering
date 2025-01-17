"use client"
import React from "react";

const GButton = ({ text, onclick }: { text: string; onclick: () => void }) => {
  return (
    <button className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" onClick={onclick}>
      <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
        {text}
      </span>
    </button>
  );
};

export default GButton;
