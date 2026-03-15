import { FooterWrapper } from "./styled";
import type { FooterPropsType } from "../../types/container.type";
import { Box, Stack, Typography } from "@mui/material";
import { comms, quickLinks, sectors } from "../../config/static";
import { useContext } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const Footer: React.FC<FooterPropsType> = ({
	logo,
	message,
	copyright,
}) => {
	const navigate = useNavigate();
	const { setIsContactFormOpen } = useContext(AppContext);

	const handleNavigate = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		link: {
			name: string;
			url: string;
		},
	) => {
		e.stopPropagation();
		if (link.name === "Contact") {
			setIsContactFormOpen(true);
			return;
		}
		return navigate(link.url);
	};
	return (
		<FooterWrapper>
			<Stack className="top-flank">
				<Stack className="general-information">
					<Box component={"div"} className="logo-area">
						<img src={logo} alt="logo" />
					</Box>
					<Box component={"div"} className="message-area">
						<Typography
							variant="body1"
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={11.5}
							lineHeight={"normal"}
							color={"var(--light-color-variant-I)"}
							whiteSpace={"normal"}
							sx={{ maxWidth: { laptop: "21rem" } }}
						>
							{message}
						</Typography>
					</Box>
				</Stack>
				<Stack className="quick-links">
					<Box component={"div"} className="header-area">
						<Typography
							variant="subtitle1"
							fontFamily={"Instrument Serif"}
							fontWeight={400}
							fontSize={16}
							lineHeight={"normal"}
							color={"var(--light-color)"}
						>
							Quick Links
						</Typography>
					</Box>
					<Stack className="links-area">
						{quickLinks?.map((link, index) => {
							return (
								<Box
									key={index}
									component={"div"}
									onClick={(e) => handleNavigate(e, link)}
								>
									<Typography
										variant="body1"
										fontFamily={"Inter"}
										fontWeight={400}
										fontSize={11.5}
										lineHeight={"normal"}
										color={"var(--light-color-variant-I)"}
										sx={{
											cursor: "pointer",
										}}
									>
										{link.name}
									</Typography>
								</Box>
							);
						})}
					</Stack>
				</Stack>
				<Stack className="sectors">
					<Box component={"div"} className="header-area">
						<Typography
							variant="subtitle1"
							fontFamily={"Instrument Serif"}
							fontWeight={400}
							fontSize={16}
							lineHeight={"normal"}
							color={"var(--light-color)"}
						>
							Sectors
						</Typography>
					</Box>
					<Stack className="sectors-area">
						{sectors?.map((sector, index) => {
							return (
								<Box key={index}>
									<Typography
										variant="body1"
										fontFamily={"Inter"}
										fontWeight={400}
										fontSize={11.5}
										lineHeight={"normal"}
										color={"var(--light-color-variant-I)"}
										sx={{
											cursor: "text",
										}}
									>
										{sector}
									</Typography>
								</Box>
							);
						})}
					</Stack>
				</Stack>
				<Stack className="contact-information">
					<Box component={"div"} className="header-area">
						<Typography
							variant="subtitle1"
							fontFamily={"Instrument Serif"}
							fontWeight={400}
							fontSize={16}
							lineHeight={"normal"}
							color={"var(--light-color)"}
						>
							Contact Us
						</Typography>
					</Box>
					<Stack className="comms-area">
						{comms?.map((comm, index) => {
							return (
								<Stack
									key={index}
									direction={"row"}
									alignItems={"center"}
									gap={"calc(var(--flex-gap)/12)"}
								>
									<Box component={"div"} className="comms-icon">
										<img src={comm.icon} alt={comm.name} />
									</Box>
									<Box flexShrink={5} overflow={"hidden"}>
										<Typography
											variant="body1"
											fontFamily={"Inter"}
											fontWeight={400}
											fontSize={11.5}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											color={"var(--light-color-variant-I)"}
											sx={{
												cursor: "text",
											}}
										>
											{comm.value}
										</Typography>
									</Box>
								</Stack>
							);
						})}
					</Stack>
				</Stack>
			</Stack>
			<Box
				marginTop={"calc(var(--basic-margin)/6)"}
				marginBottom={"calc(var(--basic-margin)/6)"}
				border={"0.89px solid var(--light-color-variant-II)"}
			/>
			<Stack className="bottom-flank">
				<Box component={"div"} className="left-area">
					<Typography
						variant="subtitle2"
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={11.5}
						lineHeight={"normal"}
						color={"var(--light-color-variant-I)"}
					>
						{copyright}
					</Typography>
				</Box>
				<Box component={"div"} className="right-area">
					<Typography
						variant="subtitle2"
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={11.5}
						lineHeight={"normal"}
						color={"var(--light-color-variant-I)"}
					>
						Driven by competence. Designed for excellence.
					</Typography>
				</Box>
			</Stack>
		</FooterWrapper>
	);
};
