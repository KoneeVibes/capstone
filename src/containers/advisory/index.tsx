import { Box, Stack, Typography } from "@mui/material";
import { AdvisoryWrapper } from "./styled";

export const Advisory = () => {
	return (
		<AdvisoryWrapper>
			<Box>
				<Typography
					variant="body1"
					fontFamily={"Instrument Serif"}
					fontWeight={400}
					fontSize={{ mobile: 25, tablet: 30, laptop: 35 }}
					lineHeight={"normal"}
					whiteSpace={"normal"}
					color={"var(--dark-color-variant-I)"}
				>
					We believe that legal excellence should be a growth engine, not a
					barrier — where ever entrepreneur deserves institutional-grade
					protection without institutional complexity When businesses thrive
					unburdened by legal friction, they ignite prosperity
				</Typography>
			</Box>
			<Stack className="foot-note">
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
						color={"var(--primary-color-variant-I)"}
					>
						Capstone Legal Advisory
					</Typography>
				</Box>
			</Stack>
		</AdvisoryWrapper>
	);
};
