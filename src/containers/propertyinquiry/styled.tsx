import {
	Box,
	Stack,
	StepConnector,
	stepConnectorClasses,
	styled,
} from "@mui/material";

export const Connector = styled(StepConnector)(() => {
	return {
		[`&.${stepConnectorClasses.active}`]: {
			[`& .${stepConnectorClasses.line}`]: {
				borderColor: "var(--green-color)",
			},
		},
		[`&.${stepConnectorClasses.completed}`]: {
			[`& .${stepConnectorClasses.line}`]: {
				borderColor: "var(--green-color)",
			},
		},
		[`& .${stepConnectorClasses.line}`]: {
			borderLeft: "3px solid var(--light-color-variant-XII)",
		},
	};
});

export const StepIconWrapper = styled(Box)<{
	ownerState: { completed?: boolean; active?: boolean };
}>(() => {
	return {
		userSelect: "none",
		"& .step-icon-completed-tick": {
			borderRadius: "50%",
			color: "var(--light-color)",
			backgroundColor: "var(--green-color)",
		},
		"& .step-icon-circle-icon": {
			borderRadius: "50%",
			padding: "calc(var(--basic-padding)/15)",
			border: "2px solid var(--light-color-variant-XII)",
		},
		variants: [
			{
				props: ({ ownerState }) => ownerState.active,
				style: {
					"& .step-icon-circle-icon": {
						border: "2px solid var(--green-color)",
					},
				},
			},
		],
	};
});

export const PropertyInquiryWrapper = styled(Stack)(({ theme }) => {
	return {
		minHeight: "100vh",
		"& .navigation-area": {
			overflow: "hidden",
			padding: "calc(var(--basic-padding)/6)",
			borderTop: "1.2px solid var(--light-color-variant-XI)",
		},
		"& .form-area": {
			overflow: "hidden",
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/6)",
			borderTop: "1.2px solid var(--light-color-variant-XI)",
		},
		[theme.breakpoints.up("tablet")]: {
			flexDirection: "row",
			"& .navigation-area": {
				flex: 0.25,
				padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
				"& .MuiStepLabel-label": {
					fontFamily: "Noto Sans Lao",
					fontWeight: 700,
					fontSize: "16px",
					lineHeight: "normal",
					whiteSpace: "normal",
					color: "var(--dark-color-variant-XVII)",
				},
				"& .MuiStepContent-root": {
					paddingLeft: "18px",
					borderLeft: "3px solid var(--light-color-variant-XII)",
				},
				"& .MuiStepContent-last": {
					borderLeft: "none",
				},
				"& .MuiTypography-root": {
					fontFamily: "Noto Sans Lao",
					fontWeight: 500,
					fontSize: "14px",
					lineHeight: "normal",
					whiteSpace: "normal",
					color: "var(--dark-color-variant-XXIV)",
				},
			},
			"& .form-area": {
				flex: 0.75,
				borderLeft: "1.2px solid var(--light-color-variant-XI)",
				padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
			},
		},
	};
});
