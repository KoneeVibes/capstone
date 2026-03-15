import { Box, Stack, Typography } from "@mui/material";
import { ReadyToBuildWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { useContext } from "react";
import { AppContext } from "../../context";

export const ReadyToBuild = () => {
	const { setIsContactFormOpen } = useContext(AppContext);

	const handleOpenContactFormModal = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();
		setIsContactFormOpen(true);
	};

	return (
		<ReadyToBuildWrapper>
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
							Get Started
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
						Ready to build something{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							extraordinary?
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
						Let us be the integrated partner behind your next milestone. Our
						dedicated team is ready to provide the expertise and support you
						need.
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
							Get In Touch
						</Typography>
					</BaseButton>
				</Box>
			</Stack>
		</ReadyToBuildWrapper>
	);
};
