import { Stack, styled } from "@mui/material";
import corePracticeBg from "../../assets/images/core-practice-bg.jpg";

export const CorePracticeWrapper = styled(Stack)(({ theme }) => {
	return {
		"& .carousel-box": {
			backgroundImage: `url(${corePracticeBg})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			padding: "calc(var(--basic-padding)/6)",
			"& .carousel-root": {
				borderRadius: "28px",
				backgroundColor: "var(--light-color)",
				gap: "calc(var(--flex-gap)/3)",
				"& .core-practice-areas": {
					alignItems: "flex-start",
					gap: "calc(var(--flex-gap)/6)",
					padding: "calc(var(--basic-padding)/6)",
					paddingBottom:
						"calc(calc(var(--basic-padding)/6) + calc(var(--flex-gap)/6) + 3.675rem)",
				},
				"& .carousel-arrow": {
					position: "absolute",
					bottom: "calc(var(--basic-padding)/6)",
					right: "calc(var(--basic-padding)/6)",
					cursor: "pointer",
					zIndex: 1,
					"& button": {
						border: "1px solid var(--primary-color)",
						borderRadius: "50%",
						padding: "calc(var(--basic-padding)/8)",
					},
				},
				"& .carousel-arrow-prev": {
					left: "calc(var(--basic-padding)/6)",
					right: "auto !important",
				},
			},
		},
		"& .foundational-pillars": {
			gap: "calc(var(--flex-gap)/9)",
			padding: "calc(var(--basic-padding)/6)",
			"& .pillar-item": {
				overflow: "hidden",
			},
		},
		[theme.breakpoints.up(280)]: {
			"& .carousel-box": {
				"& .carousel-root": {
					"& .carousel-arrow-prev": {
						left: "auto !important",
						right:
							"calc(calc(var(--basic-padding)/6) + calc(var(--flex-gap)/6) + 3.675rem) !important",
					},
				},
			},
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .foundational-pillars": {
				flexDirection: "row",
				justifyContent: "center",
			},
		},
		[theme.breakpoints.up("tablet")]: {
			"& .carousel-box": {
				padding: "calc(var(--basic-padding)/3)",
				"& .carousel-root": {
					width: "60%",
					"& .core-practice-areas": {
						gap: "calc(var(--flex-gap)/4)",
						padding: "calc(var(--basic-padding)/3)",
						paddingBottom:
							"calc(calc(var(--basic-padding)/3) + calc(var(--flex-gap)/4) + 3.675rem)",
					},
					"& .carousel-arrow": {
						bottom: "calc(var(--basic-padding)/3)",
						right: "calc(var(--basic-padding)/3)",
					},
					"& .carousel-arrow-prev": {
						right:
							"calc(calc(var(--basic-padding)/3) + calc(var(--flex-gap)/6) + 3.675rem) !important",
					},
				},
			},
			"& .foundational-pillars": {
				gap: "calc(var(--flex-gap)/3)",
				padding: "calc(var(--basic-padding)/3)",
			},
		},
		[theme.breakpoints.up("desktop")]: {
			"& .foundational-pillars": {
				gap: "calc(var(--flex-gap))",
			},
		},
	};
});
