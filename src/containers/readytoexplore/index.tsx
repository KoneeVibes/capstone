import { Box, Stack, Typography } from "@mui/material";
import { ReadyToExploreWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { useContext } from "react";
import { AppContext } from "../../context";

export const ReadyToExplore = () => {
	const { setIsContactFormOpen } = useContext(AppContext);

	const handleOpenContactFormModal = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();
		setIsContactFormOpen(true);
	};

	return (
		<ReadyToExploreWrapper>
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
							color={"var(--primary-color-variant-I)"}
						>
							Get Legal Support
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
						Ready to explore{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							what we can do for you?
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
						Let's discuss how our integrated services can drive your next
						breakthrough. Our team is ready to listen, advise, and deliver.
					</Typography>
				</Box>
				<Box className="call-to-action">
					<BaseButton
						disableElevation
						variant="contained"
						padding="calc(var(--basic-padding)/9) calc(var(--basic-padding)/3)"
						onClick={handleOpenContactFormModal}
					>
						<Typography
							color={"inherit"}
							variant={"button"}
							fontSize={"inherit"}
							fontFamily={"inherit"}
							fontWeight={"inherit"}
							lineHeight={"inherit"}
							textTransform={"uppercase"}
						>
							START A CONVERSATION
						</Typography>
					</BaseButton>
				</Box>
			</Stack>
		</ReadyToExploreWrapper>
	);
};
