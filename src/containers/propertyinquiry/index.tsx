import { Connector, PropertyInquiryWrapper, StepIconWrapper } from "./styled";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { useState } from "react";
import { Box, Stack, Typography, type StepIconProps } from "@mui/material";
import { SearchForm } from "../searchform";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Check } from "@mui/icons-material";
import { CostSummary } from "../costsummary";
import type {
	InquiryDetailsType,
	SearchFormDetailsType,
} from "../../types/container.type";
import { PaymentArea } from "../paymentarea";

export const PropertyInquiry = () => {
	const steps = [
		{
			label: "Particulars",
			description: "Provide the property details",
		},
		{
			label: "Cost Breakdown",
			description: "Review the service fees and cost breakdown",
		},
		{
			label: "Payment",
			description: "Complete your payment",
		},
		{
			label: "Receipt",
			description: "View and download your payment receipt",
		},
	];

	const maxSteps = steps.length;

	const initialSearchDetails: SearchFormDetailsType = {
		applicantName: "",
		applicantEmail: "",
		applicantPhone: "",
		propertyCity: " ",
		propertyState: " ",
		propertyLGA: " ",
		propertyAddress: "",
		propertyType: "",
		inquiryPurpose: [],
		propertyTitleType: [],
		propertySurveyPlan: [],
		propertyTitleDocument: [],
		createAccount: false,
	};

	const initialInquiryDetails: InquiryDetailsType = {
		invoiceId: null,
	};

	const matches = useMediaQuery("(min-width:768px)");

	const [activeStep, setActiveStep] = useState<number>(0);
	const [inquiryForm, setInquiryForm] =
		useState<SearchFormDetailsType>(initialSearchDetails);
	const [inquiryDetails, setInquiryDetails] = useState<InquiryDetailsType>(
		initialInquiryDetails,
	);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setInquiryForm(initialSearchDetails);
		setActiveStep(0);
	};

	const handleInvoiceCreated = (invoiceId: string) => {
		setInquiryDetails((current) => ({ ...current, invoiceId }));
	};

	const handlePaymentSuccess = () => {
		setInquiryDetails(initialInquiryDetails);
		handleReset();
	};

	const renderForm = () => {
		const navigation = {
			handleNext,
			handleBack,
			handleReset,
		};
		switch (activeStep) {
			case 0:
				return (
					<SearchForm
						{...navigation}
						inquiryForm={inquiryForm}
						setInquiryForm={setInquiryForm}
						onInvoiceCreated={handleInvoiceCreated}
					/>
				);
			case 1:
				return <CostSummary {...navigation} inquiryDetails={inquiryDetails} />;
			case 2:
				return (
					<PaymentArea
						{...navigation}
						onPaymentSuccess={handlePaymentSuccess}
					/>
				);
			default:
				return null;
		}
	};

	function StepIcon(props: StepIconProps) {
		const { active, completed, className } = props;
		return (
			<StepIconWrapper ownerState={{ active }} className={className}>
				{completed ? (
					<Check className="step-icon-completed-tick" />
				) : (
					<div className="step-icon-circle-icon" />
				)}
			</StepIconWrapper>
		);
	}

	return (
		<PropertyInquiryWrapper>
			<Box component="div" className="navigation-area">
				{matches ? (
					<Stepper
						activeStep={activeStep}
						connector={<Connector />}
						orientation="vertical"
					>
						{steps.map((step) => (
							<Step key={step.label}>
								<StepLabel slots={{ stepIcon: StepIcon }}>
									{step.label}
								</StepLabel>
								<StepContent>
									<Typography>{step.description}</Typography>
								</StepContent>
							</Step>
						))}
					</Stepper>
				) : (
					<Stack>
						<Box marginBlockEnd={"calc(var(--basic-margin)/9)"}>
							<Typography
								variant={"subtitle2"}
								fontFamily={"Noto Sans Lao"}
								fontWeight={500}
								fontSize={14}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXIV)"}
							>
								{`Step ${activeStep + 1} of ${maxSteps}`}
							</Typography>
						</Box>
						<Box>
							<Typography
								variant={"subtitle1"}
								fontFamily={"Noto Sans Lao"}
								fontWeight={700}
								fontSize={16}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XVII)"}
							>
								{steps[activeStep].label}
							</Typography>
						</Box>
						<Box>
							<Typography
								variant={"subtitle2"}
								fontFamily={"Noto Sans Lao"}
								fontWeight={500}
								fontSize={14}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXIV)"}
							>
								{steps[activeStep].description}
							</Typography>
						</Box>
					</Stack>
				)}
			</Box>
			<Stack className="form-area">{renderForm()}</Stack>
		</PropertyInquiryWrapper>
	);
};
