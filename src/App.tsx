import { Route } from "wouter";
import "./index.css";
import { AuthProvider } from "./AuthContext";
import { Nav } from "./compoennts/Nav";
import { Basic } from "./routes/basic";

function App() {
  return (
    <div className="bg-slate-800 h-screen w-screen">
      <AuthProvider>
        <Nav />
        <Route path="/">
          <Basic />
        </Route>
        <Route path="/tanstack-query"></Route>
      </AuthProvider>
    </div>
  );
}

export default App;
