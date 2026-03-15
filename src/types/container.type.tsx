export type NavigationPropsType = {
	logo: string;
};

export type FooterPropsType = {
	logo: string;
	message: string;
	copyright: string;
};

export type HeroPropsType = {
	message: string;
	thumbnail: string;
	title: React.ReactNode;
	callToActionI?: string;
	callToActionII?: string;
	subtitle?: React.ReactNode;
	handleCallToAction?: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: string,
	) => void;
};
