import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import { graphqlClient } from "./utils/api";

import App from "./components/App/index";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>
);
