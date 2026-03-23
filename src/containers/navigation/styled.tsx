import { useContext, useEffect } from "react";
import { AppContext } from "../../context";
import { Stack, styled } from "@mui/system";

export const NavigationWrapper = styled(Stack)(({ theme }) => {
	const { openMenu, setOpenMenu } = useContext(AppContext);

	useEffect(() => {
		const handleResize = () => {
			setOpenMenu(false);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setOpenMenu]);

	return {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "calc(var(--basic-padding)/6)",
		gap: "calc(var(--flex-gap)/6)",
		boxSizing: "border-box",
		minHeight: "var(--mobile-nav-height)",
		"& .nav-logo": {
			overflow: "hidden",
			"& img": {
				width: "100%",
				height: "auto",
				cursor: "pointer",
			},
		},
		"& .nav-items": {
			display: openMenu ? "flex" : "none",
			position: openMenu ? "fixed" : "static",
			top: "var(--mobile-nav-height)",
			left: 0,
			right: 0,
			background: "var(--light-color)",
			height: "stretch",
			zIndex: 10,
			overflow: "auto",
			gap: "calc(var(--flex-gap)/3)",
			alignItems: "center",
			padding: "calc(var(--basic-padding)/6)",
		},
		"& .nav-menu": {
			overflow: "hidden",
		},
		"& a": {
			textDecoration: "none",
		},
		[theme.breakpoints.up("tablet")]: {
			minHeight: "unset",
			padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
			"& .nav-items": {
				display: "flex",
				flexDirection: "row",
				gap: "calc(var(--flex-gap)/6)",
				padding: 0,
			},
			"& .nav-menu": {
				display: "none",
			},
		},
		[theme.breakpoints.up("laptop")]: {
			"& .nav-items": {
				gap: "calc(var(--flex-gap)/3)",
			},
		},
	};
});
