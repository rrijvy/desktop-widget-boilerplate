import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/reduxStore.ts";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
