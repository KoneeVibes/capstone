import "./App.css";
import { LegalHome } from "./pages/home/legal";
import { CrescendoHome } from "./pages/home/crescendo";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Services } from "./pages/services";
import { Visionaries } from "./pages/visionaries";
import ScrollToTop from "./ScrollToTop";
import { NotFoundError } from "./pages/notfound";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<CrescendoHome />} />
					<Route path="/legal-advisory" element={<LegalHome />} />
					<Route path="/services" element={<Services />} />
					<Route path="/visionaries" element={<Visionaries />} />
					<Route path="*" element={<NotFoundError />} />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
