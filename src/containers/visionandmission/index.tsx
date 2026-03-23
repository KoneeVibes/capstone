import { Box, Stack, Typography } from "@mui/material";
import { VisionAndMissionWrapper } from "./styled";
import thumbnail from "../../assets/images/vision-mission-thumbnail.png";
import { mission } from "../../config/static";

export const VisionAndMission = () => {
	return (
		<VisionAndMissionWrapper>
			<Box component={"div"} className="left-flank">
				<img src={thumbnail} alt="Vision and Mission Thumbnail" />
			</Box>
			<Stack className="right-flank">
				<Box component={"div"} className="vision">
					<Stack className="content-stack">
						<Box>
							<Typography
								variant="subtitle1"
								fontFamily={"Instrument Serif"}
								fontWeight={400}
								fontSize={31.6}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-IV)"}
							>
								Our Vision
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="h4"
								fontFamily={"Inter"}
								fontWeight={700}
								fontSize={15}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								textTransform={"uppercase"}
								color={"var(--light-color)"}
							>
								TO LEAD WITH PURPOSE AND INSPIRE PROGRESS THROUGH EXCELLENT &
								COMPETENT REPRESENTATION
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="body1"
								fontFamily={"Inter"}
								fontWeight={400}
								fontSize={12}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--light-color)"}
							>
								To become the operational legal backbone of businesses,
								transforming compliance and contracts from business obstacles
								into competitive advantages, where every business accesses
								institutional-grade protection at startup agility, powered by
								expert knowledge of the law and deep local expertise.
							</Typography>
						</Box>
					</Stack>
				</Box>
				<Box component={"div"} className="mission">
					<Stack className="content-stack">
						<Box>
							<Typography
								variant="subtitle1"
								fontFamily={"Instrument Serif"}
								fontWeight={400}
								fontSize={31.6}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-IV)"}
							>
								Our Mission
							</Typography>
						</Box>
						<Stack className="mission-items">
							{mission.map((item, index) => {
								return (
									<Stack key={index} className="bullet-point">
										<Box
											component={"div"}
											className="marker"
											bgcolor={
												index % 2 === 0
													? "var(--primary-color-variant-I)"
													: "var(--dark-color-variant-XVI)"
											}
										/>
										<Box component={"div"} className="body">
											<Typography
												variant="body1"
												fontFamily={"Inter"}
												fontWeight={600}
												fontSize={17}
												lineHeight={"normal"}
												whiteSpace={"normal"}
												color={"var(--dark-color-variant-XV)"}
											>
												{item}
											</Typography>
										</Box>
									</Stack>
								);
							})}
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</VisionAndMissionWrapper>
	);
};
