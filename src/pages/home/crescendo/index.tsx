import { Typography } from "@mui/material";
import { CrescendoHomeWrapper } from "./styled";
import { Hero } from "../../../containers/hero";
import { Footer } from "../../../containers/footer";
import { Navigation } from "../../../containers/navigation";
import lightVariantOfLogo from "../../../assets/logos/capstone-crescendo-brio-logo-light-color-variant.png";
import primaryVariantOfLogo from "../../../assets/logos/capstone-crescendo-brio-logo-primary-color-variant.png";
import headerThumbnail from "../../../assets/images/capstone-crescendo-home-header-thumbnail.png";
import { BaseMarquee } from "../../../components/marquee";
import { Sectors } from "../../../containers/sectors";
import { useNavigate } from "react-router-dom";
import { IntegratedPartner } from "../../../containers/integratedpartner";
import { ComprehensiveSolutions } from "../../../containers/comprehensivesolutions";
import { Industries } from "../../../containers/industries";
import { Partners } from "../../../containers/partners";
import { ReadyToBuild } from "../../../containers/readytobuild";

export const CrescendoHome = () => {
	const navigate = useNavigate();

	const handleHeaderCTAClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: string,
	) => {
		e.preventDefault();
		switch (id) {
			case "callToActionI":
				navigate("/services");
				break;
			case "callToActionII":
				navigate("/legal-advisory");
				break;
			default:
				return;
		}
	};

	return (
		<CrescendoHomeWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation logo={primaryVariantOfLogo} />
			<Hero
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
						Driving{" "}
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
							Growth.
						</Typography>{" "}
						Delivering Innovation.
					</Typography>
				}
				thumbnail={headerThumbnail}
				callToActionI="Discover More"
				callToActionII="Legal Advisory"
				message="A dynamic, forward-thinking company committed to providing comprehensive, integrated solutions tailored to the modern business landscape — across real estate, energy, advisory, and beyond."
				handleCallToAction={handleHeaderCTAClick}
			/>
			<BaseMarquee background="var(--primary-color)" items={[<Sectors />]} />
			<IntegratedPartner />
			<ComprehensiveSolutions />
			<Industries />
			<Partners />
			<ReadyToBuild />
			<Footer
				logo={lightVariantOfLogo}
				copyright={
					"©2025 Capstone Crescendo Brio Limited. All rights reserved."
				}
				message="A dynamic, forward-thinking company dedicated to fostering growth and delivering innovative solutions across diverse sectors."
			/>
		</CrescendoHomeWrapper>
	);
};
