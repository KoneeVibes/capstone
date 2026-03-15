import { Box, Grid, Stack, Typography } from "@mui/material";
import { ComprehensiveSolutionsWrapper } from "./styled";
import { solutions } from "../../config/static";

export const ComprehensiveSolutions = () => {
	return (
		<ComprehensiveSolutionsWrapper>
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
							What We Do
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
				{solutions.map((solution, index) => {
					return (
						<Grid
							key={index}
							overflow={"hidden"}
							size={{ mobile: 12, miniTablet: 6, laptop: 4 }}
						>
							<Stack className="solution-stack">
								<Box component={"div"} className="icon-area">
									<img src={solution.icon} alt={solution.title} />
								</Box>
								<Stack className="text-area">
									<Box>
										<Typography
											variant="subtitle1"
											fontFamily={"Instrument Serif"}
											fontWeight={400}
											fontSize={21.6}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											color={"var(--dark-color-variant-IV)"}
										>
											{solution.title}
										</Typography>
									</Box>
									<Box>
										<Typography
											variant="body1"
											fontFamily={"Inter"}
											fontWeight={400}
											fontSize={13.4}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											color={"var(--dark-color-variant-VI)"}
										>
											{solution.body}
										</Typography>
									</Box>
								</Stack>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</ComprehensiveSolutionsWrapper>
	);
};
