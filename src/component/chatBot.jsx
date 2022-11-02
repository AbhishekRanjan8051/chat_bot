import ChatBot from "react-simple-chatbot";
import React, { useState } from "react";
import Posts from "./Post";
import chat from "../chat.png";
import { ThemeProvider } from "styled-components";

export default function ChatBotMain() {
  const [val, setVal] = useState(false);
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#1d4696",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#1d4696",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  const steps = [
    {
      id: "1",
      message: "Please Select one Option",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Document ", trigger: "document" },
        { value: 2, label: "Product", trigger: "product" },
        { value: 3, label: "Task", trigger: "task" },
      ],
    },
    {
      id: "document",
      options: [
        { value: 1, label: "Product Generic ", trigger: "product_generic" },
        { value: 2, label: "Branded Generic", trigger: "branded_generic" },
      ],
      // trigger: "3",
    },
    {
      id: "product_generic",
      user: true,
      trigger: "thinkmore",
    },
    {
      id: "branded_generic",
      user: true,
      trigger: "thinkmore",
    },
    {
      id: "product",
      user: true,
      trigger: "thinkmore",
    },
    {
      id: "task",
      user: true,
      trigger: "thinkmore",
    },
    {
      id: "thinkmore",
      options: [
        { value: 1, label: "Go back", trigger: "2" },
        { value: 2, label: "End Chat", trigger: "over" },
      ],
      // trigger: "3",
    },
    { id: "over", component: <Posts />, asMessage: true, end: true },
    // {
    //   id: "over",
    //   // component: <Posts />,
    //   asMessage: true,
    //   options: [{ value: 0, label: "back", trigger: "1cdcd" }],
    //   end: true,
    // },
  ];
  return (
    <>
      <div style={{ position: "fixed", bottom: 0, right: 0, zIndex: 1000 }}>
        {val == true ? (
          <>
            <ThemeProvider theme={theme}>
              <ChatBot steps={steps} />
            </ThemeProvider>
          </>
        ) : null}
        <button
          onClick={() => {
            setVal(!val);
          }}
        >
          <img src={chat} alt="" />
        </button>
      </div>
    </>
  );
}
