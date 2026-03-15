import { useState } from "react";
import { AppContext } from "./index";
import type { ContextProviderPropsType } from "../types/context.type";

export const AppContextProvider: React.FC<ContextProviderPropsType> = ({
	children,
}) => {
	const [openMenu, setOpenMenu] = useState(false);
	const [isContactFormOpen, setIsContactFormOpen] = useState(false);
	return (
		<AppContext.Provider
			value={{
				openMenu,
				setOpenMenu,
				isContactFormOpen,
				setIsContactFormOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
