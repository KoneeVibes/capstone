import { Box, Grid, Stack, Typography } from "@mui/material";
import type {
	CaseStatus,
	PropertyInquiryNavigationPropsType,
	PropertyInquiryReceiptAreaPropsType,
} from "../../types/container.type";
import { ConfirmationAreaWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { useQuery } from "@tanstack/react-query";
import { trackCaseService } from "../../util/case/trackCase";

export const ConfirmationArea: React.FC<
	PropertyInquiryNavigationPropsType & PropertyInquiryReceiptAreaPropsType
> = ({ handleReset, inquiryDetails, inquiryForm }) => {
	const caseStatusMap: Record<
		CaseStatus,
		{ label: string; description: string }
	> = {
		submitted: {
			label: "Case Submitted",
			description: "Your case has been successfully submitted",
		},
		"payment-validated": {
			label: "Payment Confirmed",
			description: "Your payment has been received and confirmed",
		},
		assigned: {
			label: "Professional Assigned",
			description: "A professional has been assigned to your case",
		},
		accepted: {
			label: "Case Accepted",
			description: "Your assigned professional has accepted the case",
		},
		"pending-information": {
			label: "Information Required",
			description: "Additional information is required to proceed",
		},
		"under-review": {
			label: "Under Review",
			description: "Your case is currently being reviewed",
		},
		closed: {
			label: "Case Completed",
			description: "Your case has been completed and closed",
		},
		suspended: {
			label: "Case Suspended",
			description: "Your case has been temporarily suspended",
		},
	};

	const { data: caseTimeline } = useQuery({
		queryKey: ["caseTimeline", inquiryDetails?.trackingId],
		queryFn: () => trackCaseService(inquiryDetails.trackingId!),
		enabled: inquiryDetails?.trackingId !== null,
	});

	const mapCaseStatus = <T,>(
		key: string,
		valueMap: Record<string, T>,
	): T | undefined => {
		return valueMap[key];
	};

	const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		// navigate to url to download mobile app
		handleReset();
	};

	return (
		<ConfirmationAreaWrapper onSubmit={handleFormSubmit}>
			<Stack>
				<Box>
					<Typography
						component={"legend"}
						fontFamily={"Noto Sans Lao"}
						fontWeight={700}
						fontSize={24}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color)"}
					>
						Payment received.
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="subtitle1"
						fontFamily={"Inter"}
						fontWeight={600}
						fontSize={14}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color-variant-XIX)"}
					>
						Search opened.
					</Typography>
				</Box>
			</Stack>
			<Grid container spacing={"calc(var(--flex-gap)/9)"}>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Box>
						<Typography
							variant="subtitle1"
							fontFamily={"Inter"}
							fontSize={"14px"}
							fontWeight={700}
							overflow={"hidden"}
							lineHeight={"normal"}
							textOverflow={"ellipsis"}
							color={"var(--dark-color)"}
						>
							Tracking Information{" "}
							<Typography
								component={"span"}
								fontFamily={"inherit"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								color={"var(--red-color)"}
							>
								*
							</Typography>
						</Typography>
					</Box>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Stack className="tracking-detail">
						<Box>
							<Typography
								variant="subtitle1"
								fontFamily={"Inter"}
								fontWeight={400}
								fontSize={11}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXVII)"}
								textTransform={"uppercase"}
							>
								Tracking ID
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="body1"
								fontFamily={"Inter"}
								fontWeight={700}
								fontSize={25}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXVI)"}
								textTransform={"uppercase"}
							>
								{inquiryDetails?.trackingId ?? "Loading..."}
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="subtitle1"
								fontFamily={"Inter"}
								fontWeight={400}
								fontSize={11}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXVII)"}
							>
								A copy of this receipt is on its way to{" "}
								{inquiryForm?.applicantEmail ?? "Loading..."}. All updates and
								progress on your case will also be communicated to this email.
							</Typography>
						</Box>
					</Stack>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Box>
						<Typography
							variant="subtitle1"
							fontFamily={"Inter"}
							fontSize={"14px"}
							fontWeight={700}
							overflow={"hidden"}
							lineHeight={"normal"}
							textOverflow={"ellipsis"}
							color={"var(--dark-color)"}
						>
							Timeline{" "}
							<Typography
								component={"span"}
								fontFamily={"inherit"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								color={"var(--red-color)"}
							>
								*
							</Typography>
						</Typography>
					</Box>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Stack className="timeline-details">
						{Array.isArray(caseTimeline?.statusHistory ?? []) &&
							caseTimeline?.statusHistory?.map(
								(doc: { status: string; changedAt: string }, index: number) => {
									return (
										<Stack
											key={index}
											className="timeline-item"
											sx={{
												paddingTop: index === 0 ? "0px !important" : undefined,
											}}
										>
											<Stack className="header">
												<Box overflow={"hidden"}>
													<Typography
														variant={"subtitle1"}
														fontFamily={"Inter"}
														fontWeight={400}
														fontSize={11}
														lineHeight={"normal"}
														whiteSpace={"normal"}
														color={"var(--dark-color-variant-XXVII)"}
													>
														{new Date(doc.changedAt).toLocaleString()}
													</Typography>
												</Box>
												<Box overflow={"hidden"}>
													<Typography
														variant={"h5"}
														fontFamily={"Inter"}
														fontWeight={700}
														fontSize={14}
														lineHeight={"normal"}
														whiteSpace={"normal"}
														textTransform={"uppercase"}
														color={"var(--dark-color-variant-XXVI)"}
													>
														{mapCaseStatus(doc.status, caseStatusMap)?.label}
													</Typography>
												</Box>
											</Stack>
											<Box className="body">
												<Typography
													variant={"body1"}
													fontFamily={"Inter"}
													fontWeight={500}
													fontSize={14}
													lineHeight={"normal"}
													whiteSpace={"normal"}
													color={"var(--dark-color-variant-XXVI)"}
												>
													{
														mapCaseStatus(doc.status, caseStatusMap)
															?.description
													}
												</Typography>
											</Box>
										</Stack>
									);
								},
							)}
						<Box component={"div"} className="notice-board">
							<Typography
								variant={"body1"}
								fontFamily={"Inter"}
								fontWeight={600}
								fontSize={14}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXVI)"}
							>
								Want to track your case at your own pace? Sign up on the
								PropertyIntel mobile app using{" "}
								{inquiryForm?.applicantEmail ?? "Loading..."} to access your
								case and follow its progress.
							</Typography>
						</Box>
						<Box
							overflow={"hidden"}
							flex={1}
							component={"div"}
							className="call-to-action"
						>
							<BaseButton
								fullWidth
								type="submit"
								variant="contained"
								disableElevation
								radius="8px"
								colour="var(--light-color)"
								padding="calc(var(--basic-padding)/9)"
							>
								<Typography
									variant={"button"}
									fontFamily={"inherit"}
									fontWeight={"inherit"}
									fontSize={"inherit"}
									lineHeight={"inherit"}
									color={"inherit"}
									textTransform={"uppercase"}
								>
									Download Mobile App
								</Typography>
							</BaseButton>
						</Box>
					</Stack>
				</Grid>
			</Grid>
		</ConfirmationAreaWrapper>
	);
};
