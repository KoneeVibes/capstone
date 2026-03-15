import { Stack, styled } from "@mui/material";

export const SectorsWrapper = styled(Stack)(() => {
	return {
		flexDirection: "row",
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/9) 0",
		"& .item-stack": {
			flexDirection: "row",
			alignItems: "center",
			gap: "calc(var(--flex-gap)/3)",
		},
	};
});
