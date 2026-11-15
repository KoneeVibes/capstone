import { PrivacyPolicyWrapper } from "./styled";
import { Hero } from "../../containers/hero";
import { Typography } from "@mui/material";
import lightVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-light-color-variant.png";
import primaryVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-primary-color-variant.png";
import { Footer } from "../../containers/footer";
import { BaseMarquee } from "../../components/marquee";
import { Sectors } from "../../containers/sectors";
import { Navigation } from "../../containers/navigation";
import { PrivacySummary } from "../../containers/privacysummary";
import { AskQuestions } from "../../containers/askquestions";

export const PrivacyPolicy = () => {
	return (
		<PrivacyPolicyWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation logo={primaryVariantOfLogo} />
			<Hero
				tags={[
					"EFFECTIVE NOVEMBER 2026",
					"CAPSTONE PROPERTYINTEL LIMITED",
					"NIGERIA DATA PROTECTION ACT 2023",
				]}
				title={
					<Typography
						variant={"h1"}
						fontFamily={"Instrument Serif"}
						fontWeight={400}
						fontSize={{
							mobile: "50px",
							laptop: "70px",
							desktop: "90px",
							xl: "110px",
						}}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color-variant-IV)"}
					>
						Privacy{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							policy
						</Typography>
					</Typography>
				}
				message="How Capstone PropertyIntel collects, uses, stores and protects your personal data when you use our website, mobile app and property due-diligence services."
			/>
			<BaseMarquee
				background="var(--primary-color-variant-VI)"
				items={[<Sectors />]}
			/>
			<PrivacySummary />
			<AskQuestions />
			<Footer
				logo={lightVariantOfLogo}
				copyright={
					"©2025 Capstone Crescendo Brio Limited. All rights reserved."
				}
				message="A dynamic, forward-thinking company dedicated to fostering growth and delivering innovative solutions across diverse sectors."
			/>
		</PrivacyPolicyWrapper>
	);
};
