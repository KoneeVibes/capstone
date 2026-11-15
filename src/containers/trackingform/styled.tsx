import { styled } from "@mui/material";

export const TrackingFormWrapper = styled("form")(() => {
	return {
		display: "flex",
		flexDirection: "column",
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
		"& .loader-image": {
			overflow: "hidden",
			"& img": {
				width: "100%",
			},
		},
	};
});
