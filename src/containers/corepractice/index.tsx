import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CorePracticeWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { corePracticeAreas, foundationalPillars } from "../../config/static";

export const CorePractice = () => {
	return (
		<CorePracticeWrapper>
			<Box component={"div"} className="carousel-box">
				<Carousel
					autoPlay={true}
					autoFocus={true}
					interval={10000}
					showIndicators={false}
					showThumbs={false}
					showStatus={false}
					renderArrowPrev={(clickHandler, hasPrev) => {
						return (
							<Box
								component={"div"}
								className="carousel-arrow carousel-arrow-prev"
							>
								<IconButton
									size="large"
									color="inherit"
									sx={{
										color: hasPrev
											? "var(--light-color-variant-VI)"
											: "var(--primary-color)",
										background: hasPrev
											? "var(--primary-color)"
											: "transparent",
										padding: 0,
										"&:hover": {
											background: hasPrev
												? "var(--primary-color)"
												: "transparent",
										},
									}}
									onClick={clickHandler}
								>
									<ArrowBack />
								</IconButton>
							</Box>
						);
					}}
					renderArrowNext={(clickHandler, hasNext) => {
						return (
							<Box
								component={"div"}
								className="carousel-arrow carousel-arrow-next"
							>
								<IconButton
									size="large"
									color="inherit"
									sx={{
										color: hasNext
											? "var(--light-color-variant-VI)"
											: "var(--primary-color)",
										background: hasNext
											? "var(--primary-color)"
											: "transparent",
										padding: 0,
										"&:hover": {
											background: hasNext
												? "var(--primary-color)"
												: "transparent",
										},
									}}
									onClick={clickHandler}
								>
									<ArrowForward />
								</IconButton>
							</Box>
						);
					}}
				>
					{corePracticeAreas.map((area, index) => {
						return (
							<Stack key={index} className="core-practice-areas">
								<Box width={"100%"}>
									<Typography
										variant="h3"
										fontFamily={"Instrument Serif"}
										fontWeight={400}
										fontSize={{
											mobile: "25px",
											tablet: "30px",
											laptop: "33.6px",
										}}
										textAlign={"left"}
										lineHeight={"normal"}
										whiteSpace={"normal"}
										color={"var(--dark-color-variant-VIII)"}
									>
										Our core{" "}
										<Typography
											component={"span"}
											fontFamily={"inherit"}
											fontStyle={"italic"}
											fontWeight={"inherit"}
											fontSize={"inherit"}
											lineHeight={"inherit"}
											color={"var(--primary-color-variant-I)"}
										>
											practice areas.
										</Typography>
									</Typography>
								</Box>
								<Box width={"100%"}>
									<Typography
										variant="subtitle1"
										fontFamily={"Inter"}
										fontWeight={400}
										fontSize={18}
										textAlign={"left"}
										lineHeight={"normal"}
										whiteSpace={"normal"}
										color={"var(--primary-color-variant-I)"}
									>
										{area.count}
									</Typography>
									<Typography
										variant="h2"
										fontFamily={"Instrument Serif"}
										fontWeight={400}
										fontSize={{
											mobile: "30px",
											tablet: "40px",
											laptop: "50px",
										}}
										textAlign={"left"}
										lineHeight={"normal"}
										whiteSpace={"normal"}
										color={"var(--dark-color-variant-I)"}
									>
										{area.title}
									</Typography>
								</Box>
								<Box width={"100%"}>
									<Typography
										variant="body1"
										fontFamily={"Inter"}
										fontWeight={400}
										fontSize={16}
										textAlign={"left"}
										lineHeight={"normal"}
										whiteSpace={"normal"}
										color={"var(--dark-color-variant-IX)"}
									>
										{area.body}
									</Typography>
								</Box>
							</Stack>
						);
					})}
				</Carousel>
			</Box>
			<Stack className="foundational-pillars">
				{foundationalPillars.map((pillar, index) => {
					return (
						<Stack key={index} className="pillar-item">
							<Box>
								<Typography
									variant="subtitle1"
									fontFamily={"Instrument Serif"}
									fontWeight={400}
									fontSize={22.8}
									lineHeight={"normal"}
									whiteSpace={"normal"}
									color={"var(--dark-color-variant-X)"}
								>
									{pillar.main}
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="subtitle2"
									fontFamily={"Inter"}
									fontWeight={400}
									fontSize={12}
									lineHeight={"normal"}
									whiteSpace={"normal"}
									color={"var(--dark-color-variant-XI)"}
								>
									{pillar.sub}
								</Typography>
							</Box>
						</Stack>
					);
				})}
			</Stack>
		</CorePracticeWrapper>
	);
};
