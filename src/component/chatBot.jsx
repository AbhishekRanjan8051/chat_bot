import ChatBot from "react-simple-chatbot";
import React,{ useState } from "react";
import Posts from "./Post";
import chat from  "../chat.png";

export default function ChatBotMain() {
  const [val, setVal] = useState(false);
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
      trigger: "over",
    },
    {
      id: "branded_generic",
      user: true,
      trigger: "over",
    },
    {
      id: "product",
      user: true,
      trigger: "over",
    },
    {
      id: "task",
      user: true,
      trigger: "over",
    },
    { id: "over", component: <Posts />, asMessage: true, end: true },
    // {
    //   id: "over",
    //   component: <Posts />,
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
            <ChatBot steps={steps} />
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
