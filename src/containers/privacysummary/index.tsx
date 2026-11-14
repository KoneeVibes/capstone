import { Box, Grid, Stack, Typography } from "@mui/material";
import { PrivacySummaryWrapper } from "./styled";
import { privacyPolicy, privacySummary } from "../../config/static";

export const PrivacySummary = () => {
	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<PrivacySummaryWrapper>
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
							Privacy Summary
						</Typography>
					</Box>
				</Stack>
				<Stack className="body">
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
							color={"var(--dark-color-variant-I)"}
						>
							The short version,{" "}
							<Typography
								component={"span"}
								fontFamily={"inherit"}
								fontStyle={"italic"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								color={"var(--primary-color-variant-I)"}
							>
								in plain language.
							</Typography>
						</Typography>
					</Box>
					<Box>
						<Typography
							variant="body1"
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={14}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							textAlign={"center"}
							color={"var(--dark-color-variant-XXXVII)"}
						>
							A quick summary. The full policy below is what applies.
						</Typography>
					</Box>
				</Stack>
			</Stack>
			<Grid container spacing={"calc(var(--flex-gap)/6)"}>
				{privacySummary.map((item, index) => {
					return (
						<Grid
							key={index}
							display={"flex"}
							overflow={"hidden"}
							size={{ mobile: 12, miniTablet: 6, laptop: 3 }}
						>
							<Stack className="summary-item">
								<Box component={"div"} className="icon-area">
									<img src={item.icon} alt={item.title} />
								</Box>
								<Stack className="text-area">
									<Box>
										<Typography
											variant="subtitle1"
											fontFamily={"Instrument Serif"}
											fontWeight={400}
											fontSize={23}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											textAlign={"center"}
											color={"var(--primary-color-variant--XIII)"}
										>
											{item.title}
										</Typography>
									</Box>
									<Box>
										<Typography
											variant="body1"
											fontFamily={"Inter"}
											fontWeight={400}
											fontSize={13.4}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											textAlign={"center"}
											color={"var(--dark-color-variant-XXXVII)"}
										>
											{item.body}
										</Typography>
									</Box>
								</Stack>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
			<Stack className="policy-area">
				<Stack className="navigation">
					<Box overflow={"hidden"}>
						<Typography
							variant="h4"
							fontFamily={"Instrument Serif"}
							fontWeight={400}
							fontSize={{
								mobile: "26px",
								tablet: "34px",
							}}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--primary-color-variant--XIII)"}
						>
							On this page
						</Typography>
					</Box>
					<Stack className="nav-items">
						{Object.entries(privacyPolicy).map(([key, value]) => {
							return (
								<Box key={key} overflow={"hidden"}>
									<Typography
										variant="subtitle1"
										fontFamily={"Inter"}
										fontWeight={400}
										fontSize={"13px"}
										lineHeight={"normal"}
										whiteSpace={"normal"}
										sx={{ cursor: "pointer" }}
										onClick={() => scrollTo(value.title)}
										color={"var(--dark-color-variant-XXXVII)"}
									>
										{`${key}. ${value.title}`}
									</Typography>
								</Box>
							);
						})}
					</Stack>
				</Stack>
				<Stack className="content">
					{Object.entries(privacyPolicy).map(([key, value], index: number) => {
						return (
							<Stack
								key={key}
								id={value.title}
								component={"div"}
								className={`policy-item ${index === Object.keys(privacyPolicy).length - 1 ? "no-border" : ""}`}
							>
								<Stack className="title">
									<Box overflow={"hidden"}>
										<Typography
											variant="subtitle2"
											fontFamily={"Inter"}
											fontWeight={700}
											fontSize={{
												mobile: "12px",
											}}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											textAlign={{ miniTablet: "center" }}
											color={"var(--primary-color-variant--XV)"}
										>
											{Number(key) >= 0 && Number(key) <= 9
												? key.padStart(2, "0")
												: key}
										</Typography>
									</Box>
									<Box overflow={"hidden"}>
										<Typography
											variant="h4"
											fontFamily={"Instrument Serif"}
											fontWeight={400}
											fontSize={{
												mobile: "26px",
												tablet: "34px",
											}}
											lineHeight={"normal"}
											whiteSpace={"normal"}
											color={"var(--primary-color-variant--XIII)"}
										>
											{value.title}
										</Typography>
									</Box>
								</Stack>
								<Stack className="body">
									{Object.entries(value.body).map(([subkey, config]) => {
										const content = config.content.map(
											(
												part:
													| string
													| {
															text: string;
															color?: string;
															highlight?: boolean;
													  },
												index: number,
											) => {
												if (typeof part === "string") {
													return part;
												}
												return (
													<Typography
														key={index}
														component="span"
														fontSize={"inherit"}
														fontFamily={"inherit"}
														lineHeight={"inherit"}
														whiteSpace={"inherit"}
														color={part.color ? part.color : "inherit"}
														fontWeight={part.highlight ? 700 : "inherit"}
														display={
															["List"].includes(config.type)
																? "block"
																: "inline"
														}
													>
														{part.text}
													</Typography>
												);
											},
										);
										if (config.type === "Typography") {
											return (
												<Box key={subkey}>
													<Typography
														variant="body1"
														fontFamily="Inter"
														fontWeight={400}
														fontSize={15}
														lineHeight="normal"
														whiteSpace="normal"
														color="var(--dark-color-variant-XXXVII)"
													>
														{content}
													</Typography>
												</Box>
											);
										}
										if (config.type === "List") {
											return (
												<Box
													key={subkey}
													component="li"
													sx={{
														fontFamily: "Inter",
														fontWeight: 400,
														fontSize: 15,
														lineHeight: "normal",
														whiteSpace: "normal",
														textOverflow: "ellipsis",
														marginLeft: "calc(var(--basic-margin)/9)",
														color: "var(--dark-color-variant-XXXVII)",
														"&::marker": {
															color: "var(--primary-color-variant-I)",
														},
													}}
												>
													{content}
												</Box>
											);
										}
										if (config.type === "Notice") {
											return (
												<Box
													sx={{
														fontFamily: "Inter",
														fontWeight: 400,
														fontSize: 15,
														lineHeight: "normal",
														whiteSpace: "normal",
														textOverflow: "ellipsis",
														overflow: "hidden",
														padding: "calc(var(--basic-padding)/9)",
														color: "var(--dark-color-variant-XXXVII)",
														background: "var(--primary-color-variant--XVI)",
														borderLeft:
															"3px solid var(--primary-color-variant--XVII)",
													}}
												>
													{content}
												</Box>
											);
										}
										return null;
									})}
								</Stack>
							</Stack>
						);
					})}
				</Stack>
			</Stack>
		</PrivacySummaryWrapper>
	);
};
