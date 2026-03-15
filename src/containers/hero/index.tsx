import { Box, Stack, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import type { HeroPropsType } from "../../types/container.type";
import { BaseButton } from "../../components/button/styled";

export const Hero: React.FC<HeroPropsType> = ({
	title,
	message,
	subtitle,
	thumbnail,
	callToActionI,
	callToActionII,
	handleCallToAction,
}) => {
	return (
		<HeroWrapper>
			<Stack className="left-flank">
				{subtitle && <Box>{subtitle}</Box>}
				<Box>{title}</Box>
				<Box>
					<Typography
						variant="body1"
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={{ mobile: 16, desktop: 20 }}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color-variant-III)"}
					>
						{message}
					</Typography>
				</Box>
				{(callToActionI || callToActionII) && (
					<Stack className="call-to-action">
						{callToActionI && (
							<Box overflow={"hidden"}>
								<BaseButton
									radius="80px"
									disableElevation
									variant="contained"
									sx={{ width: "100%" }}
									padding="calc(var(--basic-padding)/9)"
									onClick={(e) => handleCallToAction?.(e, "callToActionI")}
								>
									<Typography
										variant={"button"}
										fontFamily={"inherit"}
										fontWeight={"inherit"}
										fontSize={"inherit"}
										lineHeight={"inherit"}
										color={"inherit"}
										textTransform={"uppercase"}
									>
										{callToActionI}
									</Typography>
								</BaseButton>
							</Box>
						)}
						{callToActionII && (
							<Box overflow={"hidden"}>
								<BaseButton
									radius="80px"
									disableElevation
									variant="outlined"
									sx={{ width: "100%" }}
									padding="calc(var(--basic-padding)/9)"
									onClick={(e) => handleCallToAction?.(e, "callToActionII")}
								>
									<Typography
										variant={"button"}
										fontFamily={"inherit"}
										fontWeight={"inherit"}
										fontSize={"inherit"}
										lineHeight={"inherit"}
										color={"inherit"}
										textTransform={"uppercase"}
									>
										{callToActionII}
									</Typography>
								</BaseButton>
							</Box>
						)}
					</Stack>
				)}
			</Stack>
			<Box component={"div"} className="right-flank">
				<img src={thumbnail} alt="Hero Thumbnail" />
			</Box>
		</HeroWrapper>
	);
};
