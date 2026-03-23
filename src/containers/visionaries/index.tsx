import { Box, Stack, Typography } from "@mui/material";
import { VisionariesWrapper } from "./styled";
import { partners } from "../../config/static";

export const Visionaries = () => {
	return (
		<VisionariesWrapper>
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
						color={"var(--light-color)"}
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
			<Stack className="visioners-area">
				{partners.map((visioner, index) => {
					return (
						<Stack key={index} className="visioner-stack">
							<Box component={"div"} className="thumbnail-area">
								<img src={visioner.thumbnail} alt={visioner.name} />
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
					);
				})}
			</Stack>
		</VisionariesWrapper>
	);
};
