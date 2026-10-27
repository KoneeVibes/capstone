import { TrackWrapper } from "./styled";
import { Navigation } from "../../containers/navigation";
import { PropertyTracker } from "../../containers/propertytracker";
import primaryVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-primary-color-variant.png";

export const Track = () => {
	return (
		<TrackWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation logo={primaryVariantOfLogo} shouldCollapseNavigation={true} />
			<PropertyTracker />
		</TrackWrapper>
	);
};
