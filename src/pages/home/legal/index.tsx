import { LegalHomeWrapper } from "./styled";
import { Footer } from "../../../containers/footer";
import { Navigation } from "../../../containers/navigation";
import lightVariantOfLogo from "../../../assets/logos/capstone-crescendo-brio-logo-light-color-variant.png";
import primaryVariantOfLogo from "../../../assets/logos/capstone-crescendo-brio-logo-primary-color-variant.png";
import { Hero } from "../../../containers/hero";
import { Typography } from "@mui/material";
import headerThumbnail from "../../../assets/images/capstone-crescendo-home-header-thumbnail.png";
import { BaseMarquee } from "../../../components/marquee";
import { Sectors } from "../../../containers/sectors";
import { useNavigate } from "react-router-dom";
import { Advisory } from "../../../containers/advisory";
import { CorePractice } from "../../../containers/corepractice";
import { Protection } from "../../../containers/protection";
import { LegalSupport } from "../../../containers/legalsupport";

export const LegalHome = () => {
	const navigate = useNavigate();

	const handleHeaderCTAClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: string,
	) => {
		e.preventDefault();
		switch (id) {
			case "callToActionI":
				break;
			case "callToActionII":
				navigate("/");
				break;
			default:
				return;
		}
	};

	return (
		<LegalHomeWrapper
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
						Legal excellence as{" "}
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
							a growth engine.
						</Typography>
					</Typography>
				}
				thumbnail={headerThumbnail}
				callToActionI="Discover More"
				callToActionII="Crescendo Brio"
				message="A trusted, reputable law firm delivering institutional-grade legal protection at startup agility. We transform compliance into competitive advantage for every business, at every stage."
				handleCallToAction={handleHeaderCTAClick}
			/>
			<BaseMarquee background="var(--primary-color)" items={[<Sectors />]} />
			<Advisory />
			<CorePractice />
			<Protection />
			<LegalSupport />
			<Footer
				logo={lightVariantOfLogo}
				copyright={
					"©2025 Capstone Crescendo Brio Limited. All rights reserved."
				}
				message="A dynamic, forward-thinking company dedicated to fostering growth and delivering innovative solutions across diverse sectors."
			/>
		</LegalHomeWrapper>
	);
};
