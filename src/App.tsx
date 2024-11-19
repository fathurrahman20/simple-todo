import Routers from "./common/router/router";
import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routers />
    </ThemeProvider>
  );
}

export default App;
