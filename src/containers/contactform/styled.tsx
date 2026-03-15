import { Stack, styled } from "@mui/material";

export const ContactFormWrapper = styled(Stack)(() => {
	return {
		padding:
			"calc(var(--basic-padding)/6) calc(var(--basic-padding)/3) calc(var(--basic-padding)/3)",
		gap: "calc(var(--flex-gap)/3)",
		"& fieldset": {
			display: "flex",
			flexDirection: "column",
			overflow: "hidden",
		},
	};
});
