import { Box, Stack, Typography } from "@mui/material";
import { PropertyTrackerWrapper } from "./styled";
import { useState } from "react";
import type {
	InquiryDetailsType,
	TrackingFormDetailsType,
} from "../../types/container.type";
import { TrackingForm } from "../trackingform";
import { PropertyDetailArea } from "../propertydetailarea";
import trackingIcon from "../../assets/icons/case-tracking.svg";

export const PropertyTracker = () => {
	const initialSearchDetails: TrackingFormDetailsType = {
		id: "",
	};

	const initialInquiryDetails: InquiryDetailsType = {
		lastUpdated: null,
		propertyStatus: null,
		propertyAddress: null,
	};

	const [activeStep, setActiveStep] = useState<number>(0);
	const [inquiryForm, setInquiryForm] =
		useState<TrackingFormDetailsType>(initialSearchDetails);
	const [inquiryDetails, setInquiryDetails] = useState<InquiryDetailsType>(
		initialInquiryDetails,
	);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleTrackingSubmission = ({
		lastUpdated,
		propertyStatus,
		propertyAddress,
	}: {
		lastUpdated: NonNullable<InquiryDetailsType["lastUpdated"]>;
		propertyStatus: NonNullable<InquiryDetailsType["propertyStatus"]>;
		propertyAddress: NonNullable<InquiryDetailsType["propertyAddress"]>;
	}) => {
		setInquiryDetails((current) => ({
			...current,
			lastUpdated,
			propertyStatus,
			propertyAddress,
		}));
	};

	const renderForm = () => {
		const navigation = {
			handleNext,
		};
		switch (activeStep) {
			case 0:
				return (
					<TrackingForm
						{...navigation}
						inquiryForm={inquiryForm}
						setInquiryForm={setInquiryForm}
						onSubmission={handleTrackingSubmission}
					/>
				);
			case 1:
				return (
					<PropertyDetailArea
						inquiryForm={inquiryForm}
						inquiryDetails={inquiryDetails}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<PropertyTrackerWrapper>
			<Stack component="div" className="description-area">
				<Stack className="header">
					<Box>
						<Typography
							variant={"h2"}
							fontFamily={"Inter"}
							fontWeight={700}
							fontSize={25}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--dark-color-variant-III)"}
						>
							Ready to search for legit property?
						</Typography>
					</Box>
					<Box>
						<Typography
							variant={"body1"}
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={18}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--dark-color-variant-XXXIII)"}
						>
							Track your inquiry by supplying requested information
						</Typography>
					</Box>
				</Stack>
				<Stack className="offering">
					<Box component={"div"} className="icon-area">
						<img src={trackingIcon} alt={"Tracking Icon"} />
					</Box>
					<Box component={"div"} className="text-area">
						<Typography
							variant={"caption"}
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={18}
							lineHeight={"normal"}
							display={"block"}
							color={"var(--dark-color-variant-XXXIII)"}
						>
							Search Tracking IDs
						</Typography>
					</Box>
				</Stack>
			</Stack>
			<Stack className="form-area">
				<Stack className="header">
					<Box>
						<Typography
							variant={"h3"}
							fontFamily={"Inter"}
							fontWeight={700}
							fontSize={25}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--dark-color-variant-III)"}
						>
							Provide Search tracking ID
						</Typography>
					</Box>
					<Box>
						<Typography
							variant={"body1"}
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={18}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--dark-color-variant-XXXIII)"}
						>
							Enter a valid tracking ID. We check it against known registered
							inquiries on record
						</Typography>
					</Box>
				</Stack>
				{renderForm()}
			</Stack>
		</PropertyTrackerWrapper>
	);
};
