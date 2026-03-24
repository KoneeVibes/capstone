import { Box, Grid, Stack, Typography } from "@mui/material";
import { IndustriesWrapper } from "./styled";
import { industries } from "../../config/static";

export const Industries = () => {
	return (
		<IndustriesWrapper>
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
							Sectors Served
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
						color={"var(--dark-color-variant-I)"}
					>
						Industries we{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							impact.
						</Typography>
					</Typography>
				</Box>
			</Stack>
			<Grid container spacing={"calc(var(--flex-gap)/6)"}>
				{industries.map((industry, index) => {
					return (
						<Grid
							key={index}
							display={"flex"}
							overflow={"hidden"}
							size={{ mobile: 12, miniTablet: 6, laptop: 3 }}
						>
							<Stack className="industry-stack">
								<Box component={"div"} className="thumbnail-area">
									<img src={industry.thumbnail} alt={industry.title} />
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
											{industry.title}
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
											{industry.body}
										</Typography>
									</Box>
								</Stack>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</IndustriesWrapper>
	);
};
