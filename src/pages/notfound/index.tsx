import { Box, Stack, Typography } from "@mui/material";
import { Footer } from "../../containers/footer";
import { Navigation } from "../../containers/navigation";
import { NotFoundErrorWrapper } from "./styled";
import notfound from "../../assets/animation/404 Animation.svg";
import primaryVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-primary-color-variant.png";
import lightVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-light-color-variant.png";

export const NotFoundError = () => {
	return (
		<NotFoundErrorWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation logo={primaryVariantOfLogo} />
			<Stack className="not-found-error-body">
				<Box component={"div"} className="animation-area">
					<img src={notfound} alt="404 Animation" />
				</Box>
				<Box>
					<Typography
						variant="h2"
						sx={{
							fontFamily: "Inter",
							fontWeight: 700,
							fontSize: {
								mobile: 25,
								miniTablet: 35,
								tablet: 40,
								laptop: 50,
								desktop: 60,
							},
							textAlign: "center",
							lineHeight: "normal",
							whiteSpace: "normal",
							color: "var(--dark-color)",
						}}
					>
						Ooops, Page Not Found.
					</Typography>
				</Box>
			</Stack>
			<Footer
				logo={lightVariantOfLogo}
				copyright={
					"©2025 Capstone Crescendo Brio Limited. All rights reserved."
				}
				message="A dynamic, forward-thinking company dedicated to fostering growth and delivering innovative solutions across diverse sectors."
			/>
		</NotFoundErrorWrapper>
	);
};
