import { Box, Stack, Typography } from "@mui/material";
import { SectorsWrapper } from "./styled";
import marqueeDot from "../../assets/icons/marquee-dot.svg";
import { sectorList } from "../../config/static";

export const Sectors = () => {
	return (
		<SectorsWrapper>
			{sectorList.map((item: string, index: number) => {
				return (
					<Stack key={index} className="item-stack">
						<Box>
							<img src={marqueeDot} alt="Marquee Dot" />
						</Box>
						<Box>
							<Typography
								variant="subtitle1"
								fontFamily={"Instrument Serif"}
								fontWeight={400}
								fontSize={"16px"}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								textTransform={"uppercase"}
								color={"var(--light-color-variant-III)"}
							>
								{item}
							</Typography>
						</Box>
					</Stack>
				);
			})}
		</SectorsWrapper>
	);
};
