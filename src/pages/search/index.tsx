import { SearchWrapper } from "./styled";
import { Navigation } from "../../containers/navigation";
import { PropertyInquiry } from "../../containers/propertyinquiry";
import primaryVariantOfLogo from "../../assets/logos/capstone-crescendo-brio-logo-primary-color-variant.png";

export const Search = () => {
	return (
		<SearchWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation logo={primaryVariantOfLogo} shouldCollapseNavigation={true} />
			<PropertyInquiry />
		</SearchWrapper>
	);
};
