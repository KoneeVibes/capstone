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
	handleNext?: () => void;
	handleBack?: () => void;
	handleReset?: () => void;
};

export type InquiryDetailsType = {
	invoiceId?: string | null;
	trackingId?: string | null;
	lastUpdated?: string | null;
	propertyStatus?: string | null;
	propertyAddress?: string | null;
	statusHistory?:
		| {
				status: string;
				changedAt: Date;
				assigneeId: string;
				assigneeName: string;
				note: string;
		  }[]
		| null;
};

export type PropertyInquiryFormPropsType = {
	inquiryForm: SearchFormDetailsType;
	onInvoiceCreated: ({
		invoiceId,
		trackingId,
	}: {
		invoiceId: NonNullable<InquiryDetailsType["invoiceId"]>;
		trackingId: NonNullable<InquiryDetailsType["trackingId"]>;
	}) => void;
	setInquiryForm: React.Dispatch<React.SetStateAction<SearchFormDetailsType>>;
};

export type PropertyInquiryCostSummaryPropsType = {
	inquiryDetails: InquiryDetailsType;
	onPaymentSuccess: () => void;
};

export type PropertyInquiryReceiptAreaPropsType = Omit<
	PropertyInquiryCostSummaryPropsType,
	"onPaymentSuccess"
> &
	Omit<PropertyInquiryFormPropsType, "onInvoiceCreated" | "setInquiryForm">;

export type LocationType = {
	state: string;
	lga: string;
	city: string;
	rate: number;
};

export type CaseStatus =
	| "submitted"
	| "payment-validated"
	| "assigned"
	| "accepted"
	| "pending-information"
	| "under-review"
	| "closed"
	| "suspended";

export type TrackingFormDetailsType = {
	id: string;
};

export type PropertyTrackingFormPropsType = {
	inquiryForm: TrackingFormDetailsType;
	setInquiryForm: React.Dispatch<React.SetStateAction<TrackingFormDetailsType>>;
	onSubmission: ({
		lastUpdated,
		propertyStatus,
		propertyAddress,
	}: {
		lastUpdated: NonNullable<InquiryDetailsType["lastUpdated"]>;
		propertyStatus: NonNullable<InquiryDetailsType["propertyStatus"]>;
		propertyAddress: NonNullable<InquiryDetailsType["propertyAddress"]>;
		statusHistory: NonNullable<InquiryDetailsType["statusHistory"]>;
	}) => void;
};

export type PropertyTrackingDetailsPropsType = {
	inquiryDetails: InquiryDetailsType;
	inquiryForm: TrackingFormDetailsType;
	handleOpenDrawer: (state: boolean) => void;
};
