import { useContext, useMemo, useState } from "react";
import { BaseFormModal } from "../../components/modal/form";
import { ContactFormWrapper } from "./styled";
import { AppContext } from "../../context";
import {
	Box,
	CircularProgress,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BaseFieldSet } from "../../components/form/fieldset/styled";
import { BaseLabel } from "../../components/form/label/styled";
import { BaseInput } from "../../components/form/input/styled";
import { BaseButton } from "../../components/button/styled";

export const ContactForm = () => {
	const { isContactFormOpen, setIsContactFormOpen } = useContext(AppContext);

	const initialFormDetails = useMemo(() => {
		return {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			serviceInterest: "",
			message: "",
		};
	}, []);

	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formDetails, setFormDetails] = useState(initialFormDetails);

	const handleCloseContactFormModal = () => {
		setError(null);
		setIsLoading(false);
		setFormDetails(initialFormDetails);
		return setIsContactFormOpen(false);
	};

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>
			| (Event & {}),
	) => {
		const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
		setFormDetails((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleContactFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>,
	) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
	};

	const formHeader = (
		<Stack className="contact-form-header">
			<Stack className="header-text">
				<Box>
					<Typography
						variant="h3"
						fontFamily={"Instrument Serif"}
						fontWeight={400}
						fontSize={{ mobile: 35, tablet: 45, laptop: 60 }}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--light-color)"}
					>
						Get in Touch
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="body1"
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={19.8}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--light-color)"}
					>
						Fill out the form below and our team will get back to you within 24
						hours
					</Typography>
				</Box>
			</Stack>
			<Box component={"div"} className="header-call-to-action">
				<IconButton
					onClick={handleCloseContactFormModal}
					sx={{ border: "1px solid var(--light-color-variant-IX)" }}
				>
					<CloseIcon
						sx={{
							color: "var(--light-color)",
							display: "inline-flex",
						}}
					/>
				</IconButton>
			</Box>
		</Stack>
	);

	return (
		<BaseFormModal
			header={formHeader}
			open={isContactFormOpen}
			handleSubmit={handleContactFormSubmit}
			handleClickOutside={handleCloseContactFormModal}
		>
			<ContactFormWrapper>
				<Grid container spacing={"calc(var(--flex-gap)/9)"}>
					<Grid overflow={"hidden"} size={{ mobile: 12, miniTablet: 6 }}>
						<BaseFieldSet>
							<BaseLabel>First Name</BaseLabel>
							<BaseInput
								required
								name="firstName"
								value={formDetails.firstName}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid overflow={"hidden"} size={{ mobile: 12, miniTablet: 6 }}>
						<BaseFieldSet>
							<BaseLabel>Last Name</BaseLabel>
							<BaseInput
								required
								name="lastName"
								value={formDetails.lastName}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid overflow={"hidden"} size={12}>
						<BaseFieldSet>
							<BaseLabel>Email</BaseLabel>
							<BaseInput
								required
								type="email"
								name="email"
								value={formDetails.email}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid overflow={"hidden"} size={12}>
						<BaseFieldSet>
							<BaseLabel>Phone</BaseLabel>
							<BaseInput
								name="phone"
								type="phone"
								value={formDetails.phone}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid overflow={"hidden"} size={12}>
						<BaseFieldSet>
							<BaseLabel>Service Interest</BaseLabel>
							<BaseInput
								name="serviceInterest"
								value={formDetails.serviceInterest}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid overflow={"hidden"} size={12}>
						<BaseFieldSet>
							<BaseLabel>Message</BaseLabel>
							<BaseInput
								multiline
								minRows={4}
								name="message"
								value={formDetails.message}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
				</Grid>
				{error && (
					<Box>
						<Typography
							fontFamily={"Inter"}
							fontWeight={"400"}
							fontSize={15}
							lineHeight={"normal"}
							color={"var(--red-color)"}
							whiteSpace={"normal"}
							textAlign={"center"}
						>
							{error}
						</Typography>
					</Box>
				)}
				<Box overflow={"hidden"}>
					<BaseButton
						type="submit"
						variant="contained"
						disableElevation
						padding="calc(var(--basic-padding)/9)"
						bgcolor="var(--primary-color-variant-I)"
						sx={{
							width: "100%",
						}}
					>
						{isLoading ? (
							<CircularProgress color="inherit" className="loader" />
						) : (
							<Typography
								variant={"button"}
								fontFamily={"inherit"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								color={"inherit"}
								textTransform={"inherit"}
							>
								SEND MESSAGE
							</Typography>
						)}
					</BaseButton>
				</Box>
			</ContactFormWrapper>
		</BaseFormModal>
	);
};
