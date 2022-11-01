import logo from "./logo.svg";
import "./App.css";
import ChatBotMain from "./component/chatBot";
import Weather from "./component/weather";

function App() {
  return (
    <div>
    {/* <Weather/> */}
    <h2>Welcome to chat bot page</h2>
      <ChatBotMain />
    </div>
  );
}

export default App;
