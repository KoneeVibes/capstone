import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { AppContextProvider } from "./context/provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppContextProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</AppContextProvider>
	</StrictMode>,
);
