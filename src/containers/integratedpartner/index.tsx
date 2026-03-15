import { Box, Stack, Typography } from "@mui/material";
import { IntegratedPartnerWrapper } from "./styled";
import thumbnail from "../../assets/images/integrated-partner-thumbnail.png";

export const IntegratedPartner = () => {
	return (
		<IntegratedPartnerWrapper>
			<Box component={"div"} className="left-flank">
				<img src={thumbnail} alt="Integrated Partner Thumbnail" />
			</Box>
			<Stack className="right-flank">
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
							color={"var(--primary-color-variant-III)"}
						>
							Who We Are
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
							color={"var(--dark-color-variant-I)"}
						>
							Your integrated partner for{" "}
							<Typography
								component={"span"}
								fontFamily={"inherit"}
								fontStyle={"italic"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								color={"var(--primary-color-variant-III)"}
							>
								Success.
							</Typography>
						</Typography>
					</Box>
					<Box component={"div"} className="border-line" />
				</Stack>
				<Box>
					<Typography
						variant="body1"
						fontFamily={"Inter"}
						fontWeight={300}
						fontSize={16.8}
						lineHeight={"29.4px"}
						whiteSpace={"normal"}
						color={"var(--dark-color-variant-V)"}
					>
						Capstone Crescendo Brio Limited is a multidisciplinary company
						dedicated to fostering unparalleled growth and delivering innovative
						solutions across diverse sectors. With strategic offices in Abuja
						FCT and Uyo, Akwa Ibom, we are perfectly positioned to serve both
						local and international markets — deeply understanding the unique
						needs of every client while providing accessible, responsive
						services that drive measurable results.
					</Typography>
				</Box>
			</Stack>
		</IntegratedPartnerWrapper>
	);
};
