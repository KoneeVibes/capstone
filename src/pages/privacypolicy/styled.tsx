import { Container, styled } from "@mui/material";

export const PrivacyPolicyWrapper = styled(Container)(() => {
	return {
		overflow: "hidden",
		"& .rfm-marquee-container, & .rfm-marquee": {
			gap: "calc(var(--flex-gap)/3)",
		},
	};
});
