import {
	Box,
	Drawer,
	IconButton,
	Stack,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import { PropertyTrackerWrapper } from "./styled";
import { useState } from "react";
import type {
	InquiryDetailsType,
	TrackingFormDetailsType,
} from "../../types/container.type";
import { TrackingForm } from "../trackingform";
import { PropertyDetailArea } from "../propertydetailarea";
import trackingIcon from "../../assets/icons/case-tracking.svg";
import CloseIcon from "@mui/icons-material/Close";
import { formatDate } from "../../helper/formatDateDisplay";
import trackingStatusIcon from "../../assets/icons/tracking-status.svg";
import finalStatusIcon from "../../assets/icons/final-tracking-status.svg";
import penultimateStatusIcon from "../../assets/icons/penultimate-tracking-status.svg";

export const PropertyTracker = () => {
	const statusMapper = (username?: string) => {
		return {
			submitted: "Request received and waiting for payment to be confirmed",
			"payment-validated":
				"Payment confirmed and waiting to be picked up by the team",
			assigned: `Allocated to ${username}, who will begin shortly`,
			accepted: "The search is underway and actively being worked on",
			"pending-information":
				"Additional information is required before the search can proceed",
			"under-review": "The report is in and being checked before it is relased",
			closed: "The search is complete and the documents are ready",
			suspended:
				"The search has been temporarily suspended and is awaiting further action",
			disputed: "The request is under dispute and awaiting resolution",
		};
	};

	const initialSearchDetails: TrackingFormDetailsType = {
		id: "",
	};

	const initialInquiryDetails: InquiryDetailsType = {
		lastUpdated: null,
		propertyStatus: null,
		propertyAddress: null,
		statusHistory: null,
	};

	const [activeStep, setActiveStep] = useState<number>(0);
	const [inquiryForm, setInquiryForm] =
		useState<TrackingFormDetailsType>(initialSearchDetails);
	const [inquiryDetails, setInquiryDetails] = useState<InquiryDetailsType>(
		initialInquiryDetails,
	);
	const [isTrackingDrawerOpen, setIsTrackingDrawerOpen] = useState(false);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleToggleTrackingDrawer = (state: boolean) => {
		return setIsTrackingDrawerOpen(state);
	};

	const handleTrackingSubmission = ({
		lastUpdated,
		propertyStatus,
		propertyAddress,
		statusHistory,
	}: {
		lastUpdated: NonNullable<InquiryDetailsType["lastUpdated"]>;
		propertyStatus: NonNullable<InquiryDetailsType["propertyStatus"]>;
		propertyAddress: NonNullable<InquiryDetailsType["propertyAddress"]>;
		statusHistory: NonNullable<InquiryDetailsType["statusHistory"]>;
	}) => {
		setInquiryDetails((current) => ({
			...current,
			lastUpdated,
			propertyStatus,
			propertyAddress,
			statusHistory,
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
						handleOpenDrawer={handleToggleTrackingDrawer}
					/>
				);
			default:
				return null;
		}
	};

	const steps = inquiryDetails?.statusHistory?.map((record, index) => {
		return (
			<Stack key={index} className="tracking-step">
				<Box>
					<Typography
						variant={"subtitle1"}
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={14}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color-variant-XXXV)"}
					>
						{formatDate(record?.changedAt, true)}
					</Typography>
				</Box>
				<Box>
					<Typography
						variant={"h6"}
						fontFamily={"Inter"}
						fontWeight={700}
						fontSize={17}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						textTransform={"capitalize"}
						color={"var(--dark-color-variant-XXXV)"}
					>
						{record?.status}
					</Typography>
				</Box>
				<Box>
					<Typography
						variant={"body1"}
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={12}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color-variant-XXXV)"}
					>
						{
							statusMapper(record?.assigneeName)[
								record?.status as keyof ReturnType<typeof statusMapper>
							]
						}
					</Typography>
				</Box>
			</Stack>
		);
	});

	const trackingDrawer = (
		<Box
			component={"div"}
			role="presentation"
			className="tracking-drawer-box"
			sx={{ width: "100%", height: "inherit", overflowY: "auto" }}
		>
			<Stack className="header">
				<Box component={"div"} className="call-to-action">
					<IconButton
						onClick={(e) => {
							e.stopPropagation();
							return handleToggleTrackingDrawer(false);
						}}
						sx={{
							borderRadius: "50%",
							backgroundColor: "var(--primary-color-variant--XI)",
							"&:hover": {
								backgroundColor: "var(--primary-color-variant--XI)",
							},
						}}
					>
						<CloseIcon
							sx={{
								display: "inline-flex",
								color: "var(--primary-color-variant--XII)",
							}}
						/>
					</IconButton>
				</Box>
				<Box component={"div"} className="title">
					<Typography
						variant={"h4"}
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={25}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color)"}
					>
						Track Progress
					</Typography>
				</Box>
			</Stack>
			<Box className="body">
				<Stepper
					className="stepper"
					orientation={"vertical"}
					activeStep={steps?.length}
					connector={
						<Box
							height={"34px"}
							marginLeft={"19px"}
							sx={{
								width: "1.3px",
								backgroundColor: "var(--dark-color-variant-XXXVI)",
							}}
							component={"div"}
							className="connector"
						/>
					}
				>
					{steps?.map((label: React.ReactNode, index: number) => {
						return (
							<Step
								key={index}
								className={
									steps.length > 2 &&
									index >= steps.length - 3 &&
									index < steps.length - 1
										? "track"
										: undefined
								}
							>
								<StepLabel
									aria-controls="stepper-content"
									color="inherit"
									slots={{
										stepIcon: () => {
											switch (index) {
												case steps.length - 1:
													return (
														<Box>
															<img
																src={finalStatusIcon}
																alt="Final Tracking Status"
															/>
														</Box>
													);
												case steps.length - 2:
													return (
														<Box>
															<img
																src={penultimateStatusIcon}
																alt="Penultimate Tracking Status"
															/>
														</Box>
													);
												default:
													return (
														<Box>
															<img
																alt="Tracking Status"
																src={trackingStatusIcon}
															/>
														</Box>
													);
											}
										},
									}}
								>
									{label}
								</StepLabel>
							</Step>
						);
					})}
				</Stepper>
			</Box>
		</Box>
	);

	return (
		<PropertyTrackerWrapper>
			<Drawer
				anchor="right"
				variant="temporary"
				open={isTrackingDrawerOpen}
				sx={{
					"& .MuiDrawer-paper": {
						overflow: "hidden",
						boxSizing: "border-box",
						width: "var(--tracking-drawer-width)",
					},
				}}
				onClose={() => handleToggleTrackingDrawer(false)}
			>
				{trackingDrawer}
			</Drawer>
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
