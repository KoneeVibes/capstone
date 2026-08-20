export type NavigationPropsType = {
	logo: string;
	shouldCollapseNavigation?: boolean;
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

export type SearchFormDetailsType = {
	applicantName: string;
	applicantEmail: string;
	applicantPhone: string;
	propertyCity: string;
	propertyState: string;
	propertyLGA: string;
	propertyAddress: string;
	propertyType: string;
	inquiryPurpose: string[];
	propertyTitleType: string[];
	propertySurveyPlan: File[];
	propertyTitleDocument: File[];
	createAccount: boolean;
};

export type PropertyInquiryNavigationPropsType = {
	handleNext: () => void;
	handleBack: () => void;
	handleReset: () => void;
};

export type PropertyInquiryFormPropsType = {
	inquiryForm: SearchFormDetailsType;
	onInvoiceCreated: (invoiceId: string) => void;
	setInquiryForm: React.Dispatch<React.SetStateAction<SearchFormDetailsType>>;
};

export type InquiryDetailsType = {
	invoiceId: string | null;
};

export type PropertyInquiryCostSummaryPropsType = {
	inquiryDetails: InquiryDetailsType;
};

export type PropertyInquiryPaymentAreaPropsType = {
	onPaymentSuccess: () => void;
};

export type LocationType = {
	state: string;
	lga: string;
	city: string;
	rate: number;
};
