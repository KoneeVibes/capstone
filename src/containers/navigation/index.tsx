import { useContext } from "react";
import { AppContext } from "../../context";
import { NavigationWrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../config/static";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink } from "react-router-hash-link";
import { BaseButton } from "../../components/button/styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import type { NavigationPropsType } from "../../types/container.type";
import { ContactForm } from "../contactform";

export const Navigation: React.FC<NavigationPropsType> = ({ logo }) => {
	const navigate = useNavigate();
	const { openMenu, setOpenMenu, setIsContactFormOpen } =
		useContext(AppContext);

	const handleLogoClick = () => {
		setOpenMenu(false);
		navigate("/");
	};

	const handleOpenContactFormModal = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();
		setIsContactFormOpen(true);
	};

	return (
		<NavigationWrapper>
			<ContactForm />
			<Box component={"div"} className="nav-logo">
				<img src={logo} alt="logo" onClick={handleLogoClick} />
			</Box>
			<Stack className="nav-items">
				{navLinks?.map((navItem, index) => {
					return (
						<Box key={index} className="nav-item">
							<HashLink
								key={index}
								smooth={true}
								to={navItem.url}
								onClick={() => setOpenMenu(false)}
							>
								<Typography
									variant="subtitle1"
									fontFamily={"Inter"}
									fontWeight={400}
									fontSize={13}
									lineHeight={"normal"}
									textTransform={"uppercase"}
									color={"var(--dark-color-variant-II)"}
									sx={{
										cursor: "pointer",
									}}
								>
									{navItem.name}
								</Typography>
							</HashLink>
						</Box>
					);
				})}
				<Box className="nav-item">
					<BaseButton
						disableElevation
						variant="contained"
						sx={{ width: "100%" }}
						padding="calc(var(--basic-padding)/9)"
						onClick={handleOpenContactFormModal}
					>
						<Typography
							color={"inherit"}
							variant={"button"}
							fontSize={"inherit"}
							fontFamily={"inherit"}
							fontWeight={"inherit"}
							lineHeight={"inherit"}
							textTransform={"uppercase"}
						>
							Contact Us
						</Typography>
					</BaseButton>
				</Box>
			</Stack>
			<Box component={"div"} className="nav-menu">
				<IconButton
					size="large"
					color="inherit"
					aria-label="menu"
					sx={{
						color: "var(--primary-color)",
						padding: 0,
					}}
					onClick={() => setOpenMenu(!openMenu)}
				>
					{openMenu ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			</Box>
		</NavigationWrapper>
	);
};
