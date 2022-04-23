import Header from "./components/headers/Header";
import { DataProvider } from "./GlobalState";
import Pages from "./pages/Pages";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Pages />
      </div>
    </DataProvider>
  );
}

export default App;
