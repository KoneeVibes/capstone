import { Box, Grid, Stack, Typography } from "@mui/material";
import { LeadershipWrapper } from "./styled";
import { frontrunners } from "../../config/static";

export const Leadership = () => {
	return (
		<LeadershipWrapper>
			<Stack className="heading-area">
				<Stack className="title">
					<Box component={"div"} className="border-line" />
					<Box>
						<Typography
							variant="subtitle1"
							fontFamily={"Inter"}
							fontWeight={500}
							fontSize={11.5}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							textTransform={"uppercase"}
							color={"var(--yellow-color)"}
						>
							Leadership
						</Typography>
					</Box>
				</Stack>
				<Box>
					<Typography
						variant="h2"
						fontFamily={"Instrument Serif"}
						fontWeight={400}
						fontSize={{
							mobile: "40px",
							laptop: "50px",
							desktop: "60px",
							xl: "70px",
						}}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						textAlign={"center"}
						color={"var(--dark-color-variant-XII)"}
					>
						Meet the{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							visionaries.
						</Typography>
					</Typography>
				</Box>
			</Stack>
			<Grid
				container
				spacing={{
					mobile: "calc(var(--flex-gap)/6)",
					miniTablet: "calc(var(--flex-gap)/3)",
				}}
			>
				{frontrunners.map((visioner, index) => {
					return (
						<Grid
							key={index}
							overflow={"hidden"}
							size={{ mobile: 12, miniTablet: 6 }}
						>
							<Stack className="visioner-stack">
								<Box component={"div"} className="thumbnail-area">
									<img
										src={visioner.thumbnail}
										alt={visioner.thumbnail ? visioner.name : ""}
									/>
								</Box>
								<Stack className="text-area">
									<Box>
										<Typography
											variant="h3"
											fontFamily={"Instrument Serif"}
											fontWeight={400}
											fontSize={31.6}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											color={"var(--dark-color-variant-XIV)"}
										>
											{visioner.name}
										</Typography>
										<Typography
											variant="subtitle2"
											fontFamily={"Inter"}
											fontWeight={400}
											fontSize={10.9}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											color={"var(--primary-color-variant-I)"}
										>
											{visioner.title}
										</Typography>
									</Box>
									<Box>
										<Typography
											variant="body1"
											fontFamily={"Inter"}
											fontWeight={400}
											fontSize={14}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											color={"var(--dark-color-variant-V)"}
										>
											{visioner.body}
										</Typography>
									</Box>
									<Stack className="qualifications">
										{visioner.qualification.map((qualification, index) => {
											return (
												<Box
													key={index}
													component={"div"}
													className="qualification-item"
												>
													<Typography
														variant="subtitle2"
														fontFamily={"Inter"}
														fontWeight={400}
														fontSize={10.9}
														lineHeight={"normal"}
														whiteSpace={"normal"}
														color={"var(--primary-color-variant-I)"}
													>
														{qualification}
													</Typography>
												</Box>
											);
										})}
									</Stack>
								</Stack>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</LeadershipWrapper>
	);
};
