import { Box, Grid, Stack, Typography } from "@mui/material";
import { WhyChooseUsWrapper } from "./styled";
import { services } from "../../config/static";
import arrowForward from "../../assets/icons/arrow-forward.svg";

export const WhyChooseUs = () => {
	return (
		<WhyChooseUsWrapper>
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
							Why Choose Us
						</Typography>
					</Box>
				</Stack>
				<Stack className="header">
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
							color={"var(--light-color)"}
						>
							Comprehensive solutions,{" "}
							<Typography
								component={"span"}
								fontFamily={"inherit"}
								fontStyle={"italic"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								color={"var(--primary-color-variant-I)"}
							>
								one source.
							</Typography>
						</Typography>
					</Box>
					<Box>
						<Typography
							variant="body1"
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={16}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							textAlign={"center"}
							color={"var(--light-color-variant-IV)"}
						>
							Our multidisciplinary approach ensures a holistic suite of
							services designed to empower clients and partners alike.
						</Typography>
					</Box>
				</Stack>
			</Stack>
			<Grid container spacing={"calc(var(--flex-gap)/6)"}>
				{services.map((solution, index) => {
					return (
						<Grid
							key={index}
							overflow={"hidden"}
							size={{ mobile: 12, miniTablet: 6 }}
						>
							<Stack className="solution-stack">
								<Stack className="header">
									<Box component={"div"} className="icon-area">
										<img src={solution.icon} alt={solution.title} />
									</Box>
									<Stack className="title-area">
										<Box>
											<Typography
												variant="subtitle1"
												fontFamily={"Inter"}
												fontWeight={400}
												fontSize={11.5}
												lineHeight={"normal"}
												whiteSpace={"normal"}
												color={"var(--primary-color-variant-I)"}
											>
												{solution.id}
											</Typography>
										</Box>
										<Box>
											<Typography
												variant="h3"
												fontFamily={"Instrument Serif"}
												fontWeight={400}
												fontSize={31.6}
												lineHeight={"normal"}
												whiteSpace={"normal"}
												color={"var(--dark-color-variant-IV)"}
											>
												{solution.title}
											</Typography>
										</Box>
									</Stack>
								</Stack>
								<Box>
									<Typography
										variant="body1"
										fontFamily={"Inter"}
										fontWeight={400}
										fontSize={12}
										lineHeight={"normal"}
										whiteSpace={"normal"}
										color={"var(--dark-color-variant-VI)"}
									>
										{solution.body}
									</Typography>
								</Box>
								<Box component={"div"} className="separator" />
								<Stack className="tags">
									{solution.tags.map((tag, index) => {
										return (
											<Stack key={index} className="tag-item">
												<Box component={"div"} className="icon-area">
													<img src={arrowForward} alt={"Arrow Forward"} />
												</Box>
												<Box component={"div"} className="text-area">
													<Typography
														variant="subtitle2"
														fontFamily={"Inter"}
														fontWeight={400}
														fontSize={11}
														lineHeight={"normal"}
														whiteSpace={"normal"}
														color={"var(--dark-color-variant-VI)"}
													>
														{tag}
													</Typography>
												</Box>
											</Stack>
										);
									})}
								</Stack>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</WhyChooseUsWrapper>
	);
};
