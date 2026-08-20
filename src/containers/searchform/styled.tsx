import { styled } from "@mui/material";

export const SearchFormWrapper = styled("form")(() => {
	return {
		minHeight: "100vh",
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
		"& .upload-icon-area": {
			overflow: "hidden",
			display: "flex",
			justifyContent: "center",
		},
		"& .upload-title-area, & .upload-body-area": {
			overflow: "hidden",
			display: "flex",
			justifyContent: "center",
		},
	};
});
