import { Container, styled } from "@mui/material";

export const LegalHomeWrapper = styled(Container)(() => {
	return {
		overflow: "hidden",
		"& .rfm-marquee-container, & .rfm-marquee": {
			gap: "calc(var(--flex-gap)/3)",
		},
	};
});
