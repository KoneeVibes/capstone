import React from "react";

export type ContextType = {
	openMenu: boolean;
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
	isContactFormOpen: boolean;
	setIsContactFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ContextProviderPropsType = {
	children: React.ReactNode;
};
