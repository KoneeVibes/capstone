import { Box, Stack, Typography } from "@mui/material";
import { AskQuestionsWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { useContext } from "react";
import { AppContext } from "../../context";

export const AskQuestions = () => {
	const { setIsContactFormOpen } = useContext(AppContext);

	const handleOpenContactFormModal = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();
		setIsContactFormOpen(true);
	};

	return (
		<AskQuestionsWrapper>
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
							Get Clarification
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
						Questions about your{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							data?
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
						Contact us to exercise your rights or raise a concern. We respond
						within the timeframe required by law.
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
							Start a conversation
						</Typography>
					</BaseButton>
				</Box>
			</Stack>
		</AskQuestionsWrapper>
	);
};
