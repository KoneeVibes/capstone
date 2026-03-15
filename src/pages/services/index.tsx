import { Navigation } from "../../containers/navigation";
import { ServicesWrapper } from "./styled";
import lightVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-light-color-variant.png";
import primaryVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-primary-color-variant.png";
import { Footer } from "../../containers/footer";
import { BaseMarquee } from "../../components/marquee";
import { Sectors } from "../../containers/sectors";
import { Typography } from "@mui/material";
import { Hero } from "../../containers/hero";
import headerThumbnail from "../../assets/images/services-header-thumbnail.png";
import { WhyChooseUs } from "../../containers/whychooseus";
import { ReadyToExplore } from "../../containers/readytoexplore";

export const Services = () => {
	return (
		<ServicesWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation logo={primaryVariantOfLogo} />
			<Hero
				subtitle={
					<Typography
						variant="subtitle1"
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={18}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--primary-color-variant-I)"}
					>
						Our Expertise
					</Typography>
				}
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
						Comprehensive solutions for{" "}
						<Typography
							component={"span"}
							fontFamily={"inherit"}
							fontStyle={"italic"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							color={"var(--primary-color-variant-I)"}
						>
							{" "}
							every challenge.
						</Typography>
					</Typography>
				}
				thumbnail={headerThumbnail}
				message="From real estate to energy, technology to advisory — we deliver integrated, multidisciplinary expertise designed to accelerate your success."
			/>
			<BaseMarquee
				background="var(--primary-color-variant-VI)"
				items={[<Sectors />]}
			/>
			<WhyChooseUs />
			<ReadyToExplore />
			<Footer
				logo={lightVariantOfLogo}
				copyright={
					"©2025 Capstone Crescendo Brio Limited. All rights reserved."
				}
				message="A dynamic, forward-thinking company dedicated to fostering growth and delivering innovative solutions across diverse sectors."
			/>
		</ServicesWrapper>
	);
};
