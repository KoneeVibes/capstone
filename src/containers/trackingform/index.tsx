import { Box, Grid, Typography } from "@mui/material";
import { TrackingFormWrapper } from "./styled";
import { BaseFieldSet } from "../../components/form/fieldset/styled";
import { BaseLabel } from "../../components/form/label/styled";
import { BaseInput } from "../../components/form/input/styled";
import type {
	PropertyInquiryNavigationPropsType,
	PropertyTrackingFormPropsType,
} from "../../types/container.type";
import { useState } from "react";
import { BaseButton } from "../../components/button/styled";
import { trackCaseService } from "../../util/case/trackCase";
import { Search } from "@mui/icons-material";
import loader from "../../assets/images/search-loader.png";

export const TrackingForm: React.FC<
	PropertyInquiryNavigationPropsType & PropertyTrackingFormPropsType
> = ({ inquiryForm, setInquiryForm, onSubmission, handleNext }) => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>
			| (Event & {}),
	) => {
		const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
		setInquiryForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setError(null);
			setIsLoading(true);
			if (!inquiryForm.id) {
				setIsLoading(false);
				return setError("Please pass in valid ID and try again.");
			}
			const response = await trackCaseService(inquiryForm.id);
			if (response.status === "success") {
				setIsLoading(false);
				onSubmission({
					lastUpdated: response?.data?.updatedAt,
					propertyStatus: response?.data?.status,
					propertyAddress: response?.data?.propertyAddress,
				});
				return handleNext?.();
			} else {
				setIsLoading(false);
				return setError(
					"Tracking failed to submit. Please check your credentials and try again.",
				);
			}
		} catch (error) {
			setIsLoading(false);
			const message = error instanceof Error ? error.message : "Unknown error";
			setError(`Tracking form failed to submit. ${message}`);
			return console.error("Tracking form failed to submit:", error);
		}
	};

	return (
		<TrackingFormWrapper onSubmit={handleFormSubmit}>
			<Grid container spacing={"calc(var(--flex-gap)/9)"}>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Tracking ID{" "}
							<Typography
								component={"span"}
								fontFamily={"inherit"}
								fontWeight={"inherit"}
								fontSize={"inherit"}
								lineHeight={"inherit"}
								color={"var(--red-color)"}
							>
								*
							</Typography>
						</BaseLabel>
						<BaseInput
							required
							name="id"
							radius={"8px"}
							fontsize={"12px"}
							startAdornment={<Search />}
							value={inquiryForm.id}
							onChange={(e) => handleChange(e)}
							placeholder="e.g. COR2243435"
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							padding={"calc(var(--basic-padding)/18)"}
							border={"1px solid var(--border-color-variant-I)"}
						/>
					</BaseFieldSet>
				</Grid>
			</Grid>
			{error && (
				<Box>
					<Typography
						fontFamily={"Inter"}
						fontWeight={"400"}
						fontSize={"12px"}
						lineHeight={"normal"}
						color={"var(--red-color)"}
						whiteSpace={"normal"}
					>
						{error}
					</Typography>
				</Box>
			)}
			{isLoading ? (
				<Box component={"div"} className="loader-image">
					<img src={loader} alt={"Loader Image"} />
				</Box>
			) : (
				<Box overflow={"hidden"}>
					<BaseButton
						type="submit"
						variant="contained"
						disableElevation
						radius="8px"
						padding="calc(var(--basic-padding)/9)"
						sx={{
							width: "100%",
						}}
					>
						<Typography
							variant={"button"}
							fontFamily={"inherit"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							textTransform={"inherit"}
							color={"var(--light-color)"}
						>
							Search Tracking ID
						</Typography>
					</BaseButton>
				</Box>
			)}
		</TrackingFormWrapper>
	);
};
