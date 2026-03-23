import { Stack, styled } from "@mui/material";

export const ContactFormWrapper = styled(Stack)(() => {
	return {
		padding: "calc(var(--basic-padding)/6)",
		gap: "calc(var(--flex-gap)/3)",
		"& fieldset": {
			display: "flex",
			flexDirection: "column",
			overflow: "hidden",
		},
		"& .MuiFormLabel-root": {
			marginBlock: 0,
			marginBlockEnd: "calc(var(--basic-margin)/9)",
		},
	};
});
