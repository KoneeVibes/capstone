import { Box, Stack, Typography } from "@mui/material";
import { PropertyIntelWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { useNavigate } from "react-router-dom";

export const PropertyIntel = () => {
	const navigate = useNavigate();

	const handleNavigate = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		mode: "search" | "track",
	) => {
		e.preventDefault();
		switch (mode) {
			case "search":
				navigate("/property-intel/search");
				break;
			case "track":
				// navigate("/property-intel/track");
				break;
			default:
				return;
		}
	};

	return (
		<PropertyIntelWrapper>
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
							Professional Guidance
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
						color={"var(--dark-color-variant-XVII)"}
					>
						Search for legit{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							property
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
						color={"var(--dark-color-variant-XVIII)"}
					>
						Two ways in. Run a fresh search to check any property for litigation
						and legal red flags before you commit — or enter your tracking ID to
						retrieve the report and documents from a search you've already ran.
					</Typography>
				</Box>
				<Stack className="call-to-action">
					<Box className="call-to-action-item">
						<BaseButton
							fullWidth
							disableElevation
							variant="contained"
							padding="calc(var(--basic-padding)/9) calc(var(--basic-padding)/3)"
							onClick={(e) => handleNavigate(e, "search")}
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
								Search Property
							</Typography>
						</BaseButton>
					</Box>
					<Box className="call-to-action-item">
						<BaseButton
							fullWidth
							disableElevation
							variant="outlined"
							padding="calc(var(--basic-padding)/9) calc(var(--basic-padding)/3)"
							onClick={(e) => handleNavigate(e, "track")}
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
								Track Property Search
							</Typography>
						</BaseButton>
					</Box>
				</Stack>
			</Stack>
		</PropertyIntelWrapper>
	);
};
