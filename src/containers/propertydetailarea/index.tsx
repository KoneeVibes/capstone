import { Box, Grid, Stack, Typography } from "@mui/material";
import { PropertyDetailAreaWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import type { PropertyTrackingDetailsPropsType } from "../../types/container.type";
import { formatDate } from "../../helper/formatDateDisplay";
import locationIcon from "../../assets/icons/tracked-case-location.svg";

export const PropertyDetailArea: React.FC<PropertyTrackingDetailsPropsType> = ({
	inquiryForm,
	inquiryDetails,
	handleOpenDrawer,
}) => {
	return (
		<PropertyDetailAreaWrapper>
			<Grid container spacing={"calc(var(--flex-gap)/9)"}>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Stack>
						<Box>
							<Typography
								variant="h3"
								fontFamily={"Noto Sans Lao"}
								fontSize={"25px"}
								fontWeight={700}
								overflow={"hidden"}
								lineHeight={"normal"}
								textOverflow={"ellipsis"}
								color={"var(--dark-color-variant-XXX)"}
							>
								Property Details
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="subtitle1"
								fontFamily={"Inter"}
								fontSize={"18px"}
								fontWeight={400}
								overflow={"hidden"}
								lineHeight={"normal"}
								textOverflow={"ellipsis"}
								color={"var(--dark-color-variant-XXXI)"}
							>
								Search opened.
							</Typography>
						</Box>
					</Stack>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Stack className="location-detail">
						<Box component={"div"} className="icon-area">
							<img src={locationIcon} alt={"Location Icon"} />
						</Box>
						<Stack className="detail-area">
							<Box>
								<Typography
									variant="h4"
									fontFamily={"Inter"}
									fontWeight={600}
									fontSize={24}
									lineHeight={"normal"}
									whiteSpace={"normal"}
									color={"var(--dark-color-variant-XXXII)"}
									textTransform={"capitalize"}
								>
									{inquiryDetails?.propertyAddress}
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									fontFamily={"Inter"}
									fontWeight={400}
									fontSize={15}
									lineHeight={"normal"}
									whiteSpace={"normal"}
									color={"var(--dark-color-variant-XXXIII)"}
								>
									{inquiryForm?.id}
								</Typography>
							</Box>
						</Stack>
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
						{Object.entries(inquiryDetails ?? {})
							.filter(([key]) => !["statusHistory"].includes(key))
							.map(([key, value], index: number) => {
								return (
									<Stack
										key={index}
										className="timeline-item"
										sx={{
											paddingTop: index === 0 ? "0px !important" : undefined,
										}}
									>
										<Box component={"div"} className="title">
											<Typography
												variant={"h5"}
												fontFamily={"Inter"}
												fontWeight={700}
												fontSize={14}
												lineHeight={"normal"}
												whiteSpace={"normal"}
												color={"var(--dark-color-variant-XXVI)"}
											>
												{key
													.replace(/([A-Z])/g, " $1")
													.replace(/^./, (character) =>
														character.toUpperCase(),
													)}
											</Typography>
										</Box>
										<Box component={"div"} className="body">
											<Typography
												variant={"body1"}
												fontFamily={"Inter"}
												fontWeight={500}
												fontSize={14}
												lineHeight={"normal"}
												whiteSpace={"normal"}
												color={"var(--dark-color-variant-XXVI)"}
											>
												{key === "lastUpdated"
													? formatDate(String(value), true)
													: String(value)}
											</Typography>
										</Box>
									</Stack>
								);
							})}
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
								PropertyIntel mobile app to access your case and follow its
								progress.
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
								onClick={(e) => {
									e.preventDefault();
									return handleOpenDrawer(true);
								}}
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
									Track this request
								</Typography>
							</BaseButton>
						</Box>
					</Stack>
				</Grid>
			</Grid>
		</PropertyDetailAreaWrapper>
	);
};
