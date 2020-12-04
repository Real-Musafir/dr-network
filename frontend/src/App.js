import "./App.css";
import CpHost from "./components/Cphost";
import CpIp from "./components/Cpip";
import Gateway from "./components/Gateway";
import Mac from "./components/Mac";
import PublicIp from "./components/PublicIip";

function App() {
  return (
    <div className="App">
      <Gateway />
      <CpIp />
      <CpHost />
      <PublicIp />
      <Mac/>
    </div>
  );
}

export default App;
