import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { CostSummaryWrapper } from "./styled";
import type {
	PropertyInquiryCostSummaryPropsType,
	PropertyInquiryNavigationPropsType,
} from "../../types/container.type";
import { useQuery } from "@tanstack/react-query";
import { retrieveInvoiceByIdService } from "../../util/invoice/retrieveInvoice";
import { BaseButton } from "../../components/button/styled";
import { useState } from "react";

export const CostSummary: React.FC<
	PropertyInquiryNavigationPropsType & PropertyInquiryCostSummaryPropsType
> = ({ inquiryDetails, handleBack, handleNext }) => {
	const { invoiceId } = inquiryDetails;

	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { data: invoice } = useQuery({
		queryKey: ["invoice", invoiceId],
		queryFn: () => retrieveInvoiceByIdService(invoiceId!),
		enabled: invoiceId !== null,
	});

	const handleEditClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();
		return handleBack();
	};

	const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setError(null);
			setIsLoading(true);
			const response = await { status: "success" };
			if (response.status === "success") {
				setIsLoading(false);
				handleNext();
			} else {
				setIsLoading(false);
				return setError("Cost form failed to submit. Please try again.");
			}
		} catch (error: unknown) {
			setIsLoading(false);
			const message = error instanceof Error ? error.message : "Unknown error";
			setError(`Cost summary form failed to submit. ${message}`);
			console.error("Cost summary form failed to submit:", error);
		}
	};

	return (
		<CostSummaryWrapper onSubmit={handleFormSubmit}>
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
						What this search costs
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
						Priced from what you entered. Nothing is charged until you approve
						it.
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
							Cost breakdown{" "}
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
					<Stack className="cost-breakdown">
						{Array.isArray(invoice?.items ?? []) &&
							invoice?.items.map(
								(
									doc: Record<
										string,
										string | number | Record<string, string | number>[]
									>,
									index: number,
								) => {
									return (
										<Stack
											key={index}
											className="invoice-item"
											sx={{
												paddingTop: index === 0 ? "0px !important" : undefined,
											}}
										>
											<Stack className="description">
												<Box overflow={"hidden"}>
													<Typography
														variant={"subtitle1"}
														fontFamily={"Inter"}
														fontWeight={700}
														fontSize={14}
														lineHeight={"normal"}
														whiteSpace={"normal"}
														color={"var(--dark-color-variant-XXVI)"}
													>
														{String(doc.name)}
													</Typography>
												</Box>
												<Box overflow={"hidden"}>
													<Typography
														variant={"body1"}
														fontFamily={"Inter"}
														fontWeight={400}
														fontSize={11}
														lineHeight={"normal"}
														whiteSpace={"normal"}
														color={"var(--dark-color-variant-XXVII)"}
													>
														{String(doc.description)}
													</Typography>
												</Box>
											</Stack>
											<Box className="total-payabale">
												<Typography
													variant={"subtitle2"}
													fontFamily={"Inter"}
													fontWeight={700}
													fontSize={14}
													lineHeight={"normal"}
													whiteSpace={"normal"}
													color={"var(--dark-color-variant-XXVI)"}
													sx={{ whiteSpace: "nowrap" }}
												>
													{`${invoice?.currency} ${doc.unitPrice}`}
												</Typography>
											</Box>
										</Stack>
									);
								},
							)}
						<Stack className="total-payable">
							<Stack className="description">
								<Box overflow={"hidden"}>
									<Typography
										variant={"subtitle1"}
										fontFamily={"Inter"}
										fontWeight={700}
										fontSize={14}
										lineHeight={"normal"}
										whiteSpace={"normal"}
										color={"var(--dark-color-variant-XXVI)"}
									>
										Total Due
									</Typography>
								</Box>
							</Stack>
							<Box className="total-payabale">
								<Typography
									variant={"subtitle2"}
									fontFamily={"Inter"}
									fontWeight={700}
									fontSize={14}
									lineHeight={"normal"}
									whiteSpace={"normal"}
									color={"var(--dark-color-variant-XXVI)"}
									sx={{ whiteSpace: "nowrap" }}
								>
									{`${invoice?.currency} ${invoice?.totalPayable ?? 0}`}
								</Typography>
							</Box>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			{error && (
				<Box>
					<Typography
						fontFamily={"Inter"}
						fontWeight={"400"}
						fontSize={"12px"}
						lineHeight={"normal"}
						color={"var(--red-color)"}
						whiteSpace={"normal"}
					>
						{error}
					</Typography>
				</Box>
			)}
			<Stack className="call-to-action">
				<Box overflow={"hidden"} flex={1}>
					<BaseButton
						fullWidth
						variant="outlined"
						disableElevation
						radius="8px"
						colour="var(--dark-color-variant-XXVIV)"
						padding="calc(var(--basic-padding)/9)"
						border={"1.5px solid var(--dark-color-variant-XXVIII)"}
						onClick={handleEditClick}
					>
						<Typography
							variant={"button"}
							fontFamily={"inherit"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"inherit"}
							textTransform={"inherit"}
						>
							Edit
						</Typography>
					</BaseButton>
				</Box>
				<Box overflow={"hidden"} flex={1}>
					<BaseButton
						fullWidth
						type="submit"
						variant="contained"
						disableElevation
						radius="8px"
						padding="calc(var(--basic-padding)/9)"
						disabled={!invoice?.totalPayable}
					>
						{isLoading ? (
							<CircularProgress color="inherit" className="loader" />
						) : (
							<Typography
								variant={"button"}
								fontFamily={"inherit"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								textTransform={"inherit"}
								color={"var(--light-color)"}
							>
								Pay {`${invoice?.currency} ${invoice?.totalPayable ?? 0}`}
							</Typography>
						)}
					</BaseButton>
				</Box>
			</Stack>
		</CostSummaryWrapper>
	);
};
