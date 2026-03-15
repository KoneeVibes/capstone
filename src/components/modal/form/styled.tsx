import { Dialog, styled } from "@mui/material";

export const BaseFormModalWrapper = styled(Dialog)(({ theme }) => {
	return {
		"& .MuiDialog-paper": {
			borderRadius: "20px",
			maxWidth: "90vw",
			maxHeight: "80vh",
			width: "-webkit-fill-available",
			overflow: "hidden",
			"& .MuiDialogContent-root": {
				padding: 0,
			},
			"& .MuiDialogTitle-root": {
				padding: 0,
				"& .contact-form-header": {
					flexDirection: "column-reverse",
					gap: "calc(var(--flex-gap)/6)",
					justifyContent: "space-between",
					background: "var(--primary-color)",
					padding: "calc(var(--basic-padding)/3)",
					"& .header-text": {
						flex: 1,
						overflow: "hidden",
						gap: "calc(var(--flex-gap)/9)",
					},
					"& .header-call-to-action": {
						flex: "0 1 2.6rem",
						overflow: "hidden",
					},
				},
			},
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .MuiDialog-paper": {
				"& .MuiDialogTitle-root": {
					"& .contact-form-header": {
						flexDirection: "row",
						gap: "calc(var(--flex-gap)/9)",
						"& .header-text": {
							gap: "calc(var(--flex-gap)/9)",
						},
						"& .header-call-to-action": {},
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			"& .MuiDialog-paper": {
				maxWidth: "70vw",
			},
		},
	};
});
