import { ThemeProvider } from "@material-tailwind/react";
import AppRouter from "./router/router";

function App() {
  
  return (
    <div className="flex w-screen h-screen justify-center items-start  overflow-x-hidden relative">
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
