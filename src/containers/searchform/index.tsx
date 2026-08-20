import { SearchFormWrapper } from "./styled";
import { useRef, useState } from "react";
import {
	Box,
	Chip,
	CircularProgress,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { BaseFieldSet } from "../../components/form/fieldset/styled";
import { BaseLabel } from "../../components/form/label/styled";
import { BaseInput } from "../../components/form/input/styled";
import Book from "../../assets/icons/book.svg?react";
import Mail from "../../assets/icons/mail.svg?react";
import Phone from "../../assets/icons/phone-II.svg?react";
import CityIconI from "../../assets/icons/city.svg?react";
import CityIconII from "../../assets/icons/city-II.svg?react";
import { BaseSelect } from "../../components/form/select/styled";
import { BaseOption } from "../../components/form/option/styled";
import uploadIcon from "../../assets/icons/upload.svg";
import { BaseButton } from "../../components/button/styled";
import type {
	SearchFormDetailsType,
	PropertyInquiryFormPropsType,
	PropertyInquiryNavigationPropsType,
	LocationType,
} from "../../types/container.type";
import { addCaseService } from "../../util/case/addCase";
import { retrieveAllLocationService } from "../../util/misc/retrieveAllLocation";
import { useQuery } from "@tanstack/react-query";

export const SearchForm: React.FC<
	PropertyInquiryNavigationPropsType & PropertyInquiryFormPropsType
> = ({ handleNext, onInvoiceCreated, inquiryForm, setInquiryForm }) => {
	const propertyTypes = [
		{ title: "Land", body: "Undeveloped" },
		{ title: "Building", body: "Residential" },
		{ title: "Commercial", body: "Office, Retail" },
	];

	const propertyTitleTypes = [
		"Certificate of Occupancy",
		"Right of Occupancy",
		"Deed of Assignment",
		"Power of Attorney",
		"Not sure / seller hasn't said",
	];
	const NOT_SURE = "Not sure / seller hasn't said";

	const inquiryPurposes = [
		{
			title: "Due Diligence",
			body: "Verify ownership and property documents",
		},
		{
			title: "Physical Inspection",
			body: "Verify the property's physical condition and details",
		},
	];

	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const { data: locations = [] } = useQuery<LocationType[]>({
		queryKey: ["locations"],
		queryFn: retrieveAllLocationService,
	});
	const states = [
		...new Set(locations.map((location) => location.state)),
	].sort();
	const lgas = [
		...new Set(
			locations
				.filter((location) => location.state === inquiryForm.propertyState)
				.map((location) => location.lga),
		),
	];
	const cities = [
		...new Set(
			locations
				.filter(
					(location) =>
						location.state === inquiryForm.propertyState &&
						location.lga === inquiryForm.propertyLGA,
				)
				.map((location) => location.city),
		),
	];

	const handleSingleFieldChange = (
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>
			| (Event & {}),
	) => {
		const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
		const field = name as keyof SearchFormDetailsType;
		setInquiryForm((prev) => {
			if (name === "propertyState") {
				return {
					...prev,
					propertyState: value,
					propertyLGA: " ",
					propertyCity: " ",
				};
			}
			if (name === "propertyLGA") {
				return {
					...prev,
					propertyLGA: value,
					propertyCity: " ",
				};
			}
			return {
				...prev,
				[field]: value,
			} as SearchFormDetailsType;
		});
	};

	const handleMultipleFieldChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const { name, value } = e.target;
		const field = name as keyof SearchFormDetailsType;
		setInquiryForm((prev) => {
			const currentValues = Array.isArray(prev[field])
				? (prev[field] as string[])
				: [];
			let nextValues: string[];
			if (value === NOT_SURE) {
				nextValues = currentValues.includes(NOT_SURE) ? [] : [NOT_SURE];
			} else {
				const valuesWithoutNotSure = currentValues.filter(
					(item) => item !== NOT_SURE,
				);
				nextValues = valuesWithoutNotSure.includes(value)
					? valuesWithoutNotSure.filter((item) => item !== value)
					: [...valuesWithoutNotSure, value];
			}
			return {
				...prev,
				[field]: nextValues,
			} as SearchFormDetailsType;
		});
	};

	const selectedTitleTypes = inquiryForm.propertyTitleType;
	const hasOtherTitleType = selectedTitleTypes.some(
		(item) => item !== NOT_SURE,
	);

	const handleToggleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		const field = name as keyof SearchFormDetailsType;
		setInquiryForm(
			(prev) =>
				({
					...prev,
					[field]: checked,
				}) as SearchFormDetailsType,
		);
	};

	const handleMultipleFilesChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const { name, files } = e.target;
		const field = name as keyof SearchFormDetailsType;
		setInquiryForm(
			(prev) =>
				({
					...prev,
					[field]: files ? Array.from(files) : [],
				}) as SearchFormDetailsType,
		);
	};

	const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setError(null);
			setIsLoading(true);
			const isFileValue = (item: unknown): item is File =>
				typeof File !== "undefined" && item instanceof File;
			const formData = new FormData();
			Object.entries(inquiryForm).forEach(([key, value]) => {
				if (Array.isArray(value)) {
					value.forEach((item) => {
						if (isFileValue(item)) {
							formData.append(key, item);
							return;
						}
						formData.append(key, String(item));
					});
					return;
				}
				if (isFileValue(value)) {
					formData.append(key, value);
					return;
				}
				formData.append(key, typeof value === "string" ? value : String(value));
			});
			formData.append("source", "website");
			const response = await addCaseService(formData);
			if (response.status === "success") {
				setIsLoading(false);
				onInvoiceCreated(response?.data?.invoiceId);
				handleNext();
			} else {
				setIsLoading(false);
				return setError(
					"Inquiry form failed to submit. Please check your credentials and try again.",
				);
			}
		} catch (error: unknown) {
			setIsLoading(false);
			const message = error instanceof Error ? error.message : "Unknown error";
			setError(`Inquiry form failed to submit. ${message}`);
			console.error("Inquiry form failed to submit:", error);
		}
	};

	return (
		<SearchFormWrapper onSubmit={handleFormSubmit}>
			<Stack>
				<Box>
					<Typography
						component={"legend"}
						fontFamily={"Noto Sans Lao"}
						fontWeight={700}
						fontSize={24}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color)"}
					>
						Tell us what to search
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="subtitle1"
						fontFamily={"Inter"}
						fontWeight={600}
						fontSize={14}
						lineHeight={"normal"}
						whiteSpace={"normal"}
						color={"var(--dark-color-variant-XIX)"}
					>
						Kindly enter the requested information
					</Typography>
				</Box>
			</Stack>
			<Grid container spacing={"calc(var(--flex-gap)/9)"}>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Applicant Name{" "}
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
							radius={"8px"}
							fontsize={"12px"}
							name="applicantName"
							startAdornment={<Book />}
							value={inquiryForm.applicantName}
							onChange={(e) => handleSingleFieldChange(e)}
							placeholder="Enter applicant name"
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							padding={"calc(var(--basic-padding)/18)"}
							border={"1px solid var(--border-color-variant-I)"}
						/>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Email Address{" "}
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
							type="email"
							radius={"8px"}
							fontsize={"12px"}
							name="applicantEmail"
							startAdornment={<Mail />}
							value={inquiryForm.applicantEmail}
							onChange={(e) => handleSingleFieldChange(e)}
							placeholder="Enter applicant email"
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							padding={"calc(var(--basic-padding)/18)"}
							border={"1px solid var(--border-color-variant-I)"}
						/>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Phone Number{" "}
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
							type="phone"
							radius={"8px"}
							fontsize={"12px"}
							name="applicantPhone"
							startAdornment={<Phone />}
							value={inquiryForm.applicantPhone}
							onChange={(e) => handleSingleFieldChange(e)}
							placeholder="Enter applicant phone"
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							padding={"calc(var(--basic-padding)/18)"}
							border={"1px solid var(--border-color-variant-I)"}
						/>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Box marginBlock={"calc(var(--basic-margin)/9)"}>
						<Typography
							variant={"subtitle2"}
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={14}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--dark-color-variant-XIX)"}
						>
							Where is the property
						</Typography>
					</Box>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12, miniTablet: 6 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							State{" "}
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
						<BaseSelect
							required
							radius={"8px"}
							name="propertyState"
							startAdornment={<CityIconII />}
							value={inquiryForm.propertyState}
							onChange={(e) => handleSingleFieldChange(e)}
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							padding={"calc(var(--basic-padding)/18)"}
							border={"1px solid var(--border-color-variant-I)"}
						>
							<BaseOption value=" " fontsize="12px" fontweight={400}>
								Select state where property is located
							</BaseOption>
							{states.map((state, index) => (
								<BaseOption
									key={index}
									value={state}
									fontsize="12px"
									fontweight={400}
								>
									{state}
								</BaseOption>
							))}
						</BaseSelect>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12, miniTablet: 6 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Local Govt.{" "}
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
						<BaseSelect
							required
							radius={"8px"}
							name="propertyLGA"
							startAdornment={<CityIconII />}
							value={inquiryForm.propertyLGA}
							onChange={(e) => handleSingleFieldChange(e)}
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							padding={"calc(var(--basic-padding)/18)"}
							border={"1px solid var(--border-color-variant-I)"}
						>
							<BaseOption value=" " fontsize="12px">
								Select local government where property is located
							</BaseOption>
							{lgas.map((lga, index) => (
								<BaseOption
									key={index}
									value={lga}
									fontsize="12px"
									fontweight={400}
								>
									{lga}
								</BaseOption>
							))}
						</BaseSelect>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							City{" "}
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
						<BaseSelect
							required
							radius={"8px"}
							name="propertyCity"
							startAdornment={<CityIconI />}
							value={inquiryForm.propertyCity}
							onChange={(e) => handleSingleFieldChange(e)}
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							padding={"calc(var(--basic-padding)/18)"}
							border={"1px solid var(--border-color-variant-I)"}
						>
							<BaseOption value=" " fontsize="12px" fontweight={400}>
								Select city where property is located
							</BaseOption>
							{cities.map((city, index) => (
								<BaseOption
									key={index}
									value={city}
									fontsize="12px"
									fontweight={400}
								>
									{city}
								</BaseOption>
							))}
						</BaseSelect>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Address or description{" "}
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
							radius={"8px"}
							fontsize={"12px"}
							name="propertyAddress"
							onChange={(e) => handleSingleFieldChange(e)}
							value={inquiryForm.propertyAddress}
							placeholder="Enter address of property"
							sx={{ gap: "calc(var(--flex-gap)/18)" }}
							border={"1px solid var(--border-color-variant-I)"}
						/>
					</BaseFieldSet>
				</Grid>
				<Grid
					overflow={"hidden"}
					size={{ mobile: 12 }}
					marginBlock={"calc(var(--basic-margin)/9)"}
				>
					<Box>
						<Typography
							variant={"subtitle2"}
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={14}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--dark-color-variant-XIX)"}
						>
							What is being sold
						</Typography>
					</Box>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Box>
						<Typography
							variant="subtitle1"
							fontFamily={"Inter"}
							fontSize={"14px"}
							fontWeight={700}
							overflow={"hidden"}
							lineHeight={"normal"}
							textOverflow={"ellipsis"}
							color={"var(--dark-color)"}
						>
							Class of property{" "}
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
						</Typography>
					</Box>
				</Grid>
				{propertyTypes.map((type, index) => {
					return (
						<Grid
							key={index}
							overflow={"hidden"}
							size={{ mobile: 12, miniTablet: 4 }}
						>
							<BaseFieldSet>
								<BaseLabel
									sx={{
										display: "flex",
										cursor: "pointer",
										userSelect: "none",
										borderRadius: "8px",
										flexDirection: "column",
										gap: "calc(var(--flex-gap)/18)",
										marginBlockEnd: "0px !important",
										padding: "calc(var(--basic-padding)/9)",
										backgroundColor: "var(--light-color-variant-X)",
										border: inquiryForm["propertyType"].includes(type.title)
											? "1px solid var(--border-color-variant-II)"
											: "1px solid var(--border-color-variant-I)",
									}}
								>
									<Box overflow={"hidden"} display={"flex"}>
										<Typography
											component={"span"}
											variant="subtitle1"
											fontFamily={"inherit"}
											fontWeight={700}
											fontSize={"13px"}
											lineHeight={"normal"}
											color={"var(--dark-color-variant-XX)"}
										>
											{type.title}
										</Typography>
									</Box>
									<Box overflow={"hidden"} display={"flex"}>
										<Typography
											component={"span"}
											variant="body1"
											fontFamily={"inherit"}
											fontWeight={"inherit"}
											fontSize={"12px"}
											lineHeight={"normal"}
											color={"var(--dark-color-variant-XXI)"}
										>
											{type.body}
										</Typography>
									</Box>
									<BaseInput
										type="checkbox"
										name={"propertyType"}
										inputProps={{
											checked: inquiryForm["propertyType"] === type.title,
										}}
										onChange={handleSingleFieldChange}
										value={type.title}
										sx={{
											padding: 0,
											border: "none",
											borderRadius: "unset",
											display: "none",
										}}
									/>
								</BaseLabel>
							</BaseFieldSet>
						</Grid>
					);
				})}
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Box>
						<Typography
							variant="subtitle1"
							fontFamily={"Inter"}
							fontSize={"14px"}
							fontWeight={700}
							overflow={"hidden"}
							lineHeight={"normal"}
							textOverflow={"ellipsis"}
							color={"var(--dark-color)"}
						>
							Title the seller claims{" "}
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
						</Typography>
					</Box>
				</Grid>
				{propertyTitleTypes.map((type, index) => {
					return (
						<Grid key={index} overflow={"hidden"} size={{ mobile: 12 }}>
							<BaseFieldSet>
								<BaseLabel
									sx={{
										display: "flex",
										cursor:
											hasOtherTitleType && type === NOT_SURE
												? "not-allowed"
												: "pointer",
										userSelect: "none",
										borderRadius: "8px",
										gap: "calc(var(--flex-gap)/18)",
										marginBlockEnd: "0px !important",
										padding: "calc(var(--basic-padding)/9)",
										backgroundColor: "var(--light-color-variant-X)",
										border: selectedTitleTypes.includes(type)
											? "1px solid var(--border-color-variant-II)"
											: "1px solid var(--border-color-variant-I)",
									}}
									disabled={type === NOT_SURE && hasOtherTitleType}
								>
									<Box overflow={"hidden"} display={"flex"}>
										<Typography
											component={"span"}
											variant="subtitle1"
											fontFamily={"inherit"}
											fontWeight={400}
											fontSize={"12px"}
											lineHeight={"normal"}
											color={"var(--dark-color-variant-XXI)"}
										>
											{type}
										</Typography>
									</Box>
									<BaseInput
										type="checkbox"
										name={"propertyTitleType"}
										inputProps={{
											checked: inquiryForm["propertyTitleType"].includes(type),
										}}
										onChange={handleMultipleFieldChange}
										value={type}
										sx={{
											padding: 0,
											border: "none",
											borderRadius: "unset",
											display: "none",
										}}
										disabled={type === NOT_SURE && hasOtherTitleType}
									/>
								</BaseLabel>
							</BaseFieldSet>
						</Grid>
					);
				})}
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<Box>
						<Typography
							variant="subtitle1"
							fontFamily={"Inter"}
							fontSize={"14px"}
							fontWeight={700}
							overflow={"hidden"}
							lineHeight={"normal"}
							textOverflow={"ellipsis"}
							color={"var(--dark-color)"}
						>
							Purpose of Inquiry{" "}
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
						</Typography>
					</Box>
				</Grid>
				{inquiryPurposes.map((purpose, index) => {
					return (
						<Grid
							key={index}
							overflow={"hidden"}
							size={{ mobile: 12, miniTablet: 6 }}
						>
							<BaseFieldSet>
								<BaseLabel
									sx={{
										display: "flex",
										cursor: "pointer",
										userSelect: "none",
										borderRadius: "8px",
										flexDirection: "column",
										gap: "calc(var(--flex-gap)/18)",
										marginBlockEnd: "0px !important",
										padding: "calc(var(--basic-padding)/9)",
										backgroundColor: "var(--light-color-variant-X)",
										border: inquiryForm["inquiryPurpose"].includes(
											purpose.title,
										)
											? "1px solid var(--border-color-variant-II)"
											: "1px solid var(--border-color-variant-I)",
									}}
								>
									<Box overflow={"hidden"} display={"flex"}>
										<Typography
											component={"span"}
											variant="subtitle1"
											fontFamily={"inherit"}
											fontWeight={700}
											fontSize={"13px"}
											lineHeight={"normal"}
											color={"var(--dark-color-variant-XX)"}
										>
											{purpose.title}
										</Typography>
									</Box>
									<Box overflow={"hidden"} display={"flex"}>
										<Typography
											component={"span"}
											variant="body1"
											fontFamily={"inherit"}
											fontWeight={"inherit"}
											fontSize={"12px"}
											lineHeight={"normal"}
											color={"var(--dark-color-variant-XXI)"}
										>
											{purpose.body}
										</Typography>
									</Box>
									<BaseInput
										type="checkbox"
										name={"inquiryPurpose"}
										inputProps={{
											checked: inquiryForm["inquiryPurpose"].includes(
												purpose.title,
											),
										}}
										onChange={handleMultipleFieldChange}
										value={purpose.title}
										sx={{
											padding: 0,
											border: "none",
											borderRadius: "unset",
											display: "none",
										}}
									/>
								</BaseLabel>
							</BaseFieldSet>
						</Grid>
					);
				})}
				<Grid
					overflow={"hidden"}
					size={{ mobile: 12 }}
					marginBlock={"calc(var(--basic-margin)/9)"}
				>
					<Box>
						<Typography
							variant={"subtitle2"}
							fontFamily={"Inter"}
							fontWeight={400}
							fontSize={14}
							lineHeight={"normal"}
							whiteSpace={"normal"}
							color={"var(--dark-color-variant-XIX)"}
						>
							Documents you already have
						</Typography>
					</Box>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12, miniTablet: 6 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Survey Plan{" "}
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
						<BaseLabel
							sx={{
								display: "flex",
								cursor: "pointer",
								userSelect: "none",
								borderRadius: "8px",
								flexDirection: "column",
								gap: "calc(var(--flex-gap)/18)",
								marginBlockEnd: "0px !important",
								padding: "calc(var(--basic-padding)/9)",
								backgroundColor: "var(--light-color-variant-X)",
								border: "1px solid var(--border-color-variant-I)",
							}}
						>
							<Box component={"div"} className="upload-icon-area">
								<img src={uploadIcon} alt={"Upload Icon"} />
							</Box>
							<Box component={"div"} className="upload-title-area">
								<Typography
									component={"span"}
									variant="subtitle1"
									fontFamily={"inherit"}
									fontWeight={700}
									fontSize={"13px"}
									lineHeight={"normal"}
									color={"var(--dark-color-variant-XX)"}
								>
									Click to upload/re-upload
								</Typography>
							</Box>
							<Box component={"div"} className="upload-body-area">
								<Typography
									component={"span"}
									variant="body1"
									fontFamily={"inherit"}
									fontWeight={"inherit"}
									fontSize={"12px"}
									lineHeight={"normal"}
									color={"var(--dark-color-variant-XXI)"}
								>
									PDF,JPG,JPEG,PNG, less than 10MB
								</Typography>
							</Box>
							<BaseInput
								type="file"
								name="propertySurveyPlan"
								inputRef={fileInputRef}
								inputProps={{
									accept:
										".jpeg,.jpg,.png,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,.ppt,.pptx,.rtf,.odt,.ods,.odp",
									multiple: true,
								}}
								onChange={handleMultipleFilesChange}
								sx={{
									padding: 0,
									border: "none",
									borderRadius: "unset",
									display: "none",
								}}
							/>
							{inquiryForm.propertySurveyPlan.length > 0 && (
								<Stack
									component={"div"}
									direction={"row"}
									flexWrap={"wrap"}
									gap={"calc(var(--flex-gap)/9)"}
									marginBlockStart={"calc(var(--basic-margin)/4)"}
								>
									{inquiryForm?.propertySurveyPlan?.map(
										(file: File, index: number) => (
											<Chip key={index} label={file.name} />
										),
									)}
								</Stack>
							)}
						</BaseLabel>
						<Box marginBlockStart={"calc(var(--basic-margin)/9)"}>
							<Typography
								variant={"subtitle2"}
								fontFamily={"Inter"}
								fontWeight={400}
								fontSize={11}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXII)"}
							>
								Survey Plan, Beacon Certificate, Surveyor's Report
							</Typography>
						</Box>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12, miniTablet: 6 }}>
					<BaseFieldSet>
						<BaseLabel fontsize={"14px"} fontweight={700}>
							Title Documents{" "}
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
						<BaseLabel
							sx={{
								display: "flex",
								cursor: "pointer",
								userSelect: "none",
								borderRadius: "8px",
								flexDirection: "column",
								gap: "calc(var(--flex-gap)/18)",
								marginBlockEnd: "0px !important",
								padding: "calc(var(--basic-padding)/9)",
								backgroundColor: "var(--light-color-variant-X)",
								border: "1px solid var(--border-color-variant-I)",
							}}
						>
							<Box component={"div"} className="upload-icon-area">
								<img src={uploadIcon} alt={"Upload Icon"} />
							</Box>
							<Box component={"div"} className="upload-title-area">
								<Typography
									component={"span"}
									variant="subtitle1"
									fontFamily={"inherit"}
									fontWeight={700}
									fontSize={"13px"}
									lineHeight={"normal"}
									color={"var(--dark-color-variant-XX)"}
								>
									Click to upload/re-upload
								</Typography>
							</Box>
							<Box component={"div"} className="upload-body-area">
								<Typography
									component={"span"}
									variant="body1"
									fontFamily={"inherit"}
									fontWeight={"inherit"}
									fontSize={"12px"}
									lineHeight={"normal"}
									color={"var(--dark-color-variant-XXI)"}
								>
									PDF,JPG,JPEG,PNG, less than 10MB
								</Typography>
							</Box>
							<BaseInput
								type="file"
								name="propertyTitleDocument"
								inputRef={fileInputRef}
								inputProps={{
									accept:
										".jpeg,.jpg,.png,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,.ppt,.pptx,.rtf,.odt,.ods,.odp",
									multiple: true,
								}}
								onChange={handleMultipleFilesChange}
								sx={{
									padding: 0,
									border: "none",
									borderRadius: "unset",
									display: "none",
								}}
							/>
							{inquiryForm?.propertyTitleDocument?.length > 0 && (
								<Stack
									component={"div"}
									direction={"row"}
									flexWrap={"wrap"}
									gap={"calc(var(--flex-gap)/9)"}
									marginBlockStart={"calc(var(--basic-margin)/4)"}
									onClick={(e) => e.stopPropagation()}
								>
									{inquiryForm?.propertyTitleDocument?.map(
										(file: File, index: number) => (
											<Chip key={index} label={file.name} />
										),
									)}
								</Stack>
							)}
						</BaseLabel>
						<Box marginBlock={"calc(var(--basic-margin)/9)"}>
							<Typography
								variant={"subtitle2"}
								fontFamily={"Inter"}
								fontWeight={400}
								fontSize={11}
								lineHeight={"normal"}
								whiteSpace={"normal"}
								color={"var(--dark-color-variant-XXII)"}
							>
								C of O, deed, receipts
							</Typography>
						</Box>
					</BaseFieldSet>
				</Grid>
				<Grid overflow={"hidden"} size={{ mobile: 12 }}>
					<BaseFieldSet>
						<BaseLabel
							sx={{
								display: "flex",
								cursor: "pointer",
								userSelect: "none",
								borderRadius: "8px",
								alignItems: "flex-start",
								gap: "calc(var(--flex-gap)/6)",
								marginBlockEnd: "0px !important",
								padding: "calc(var(--basic-padding)/9)",
								backgroundColor: "var(--light-color-variant-X)",
								border: "1px solid var(--border-color-variant-I)",
							}}
						>
							<BaseInput
								type="checkbox"
								name={"createAccount"}
								inputProps={{
									checked: inquiryForm["createAccount"],
								}}
								onChange={handleToggleFieldChange}
								value={inquiryForm.createAccount}
								sx={{
									flexShrink: 0,
									padding: 0,
									border: "none",
									borderRadius: "unset",
								}}
							/>
							<Stack overflow={"hidden"}>
								<Box overflow={"hidden"} display={"flex"}>
									<Typography
										variant="subtitle1"
										fontFamily={"inherit"}
										fontWeight={600}
										fontSize={"13px"}
										lineHeight={"normal"}
										color={"var(--dark-color-variant-VIII)"}
									>
										Create an account to track this search
									</Typography>
								</Box>
								<Box overflow={"hidden"} display={"flex"}>
									<Typography
										component={"span"}
										variant="body1"
										fontFamily={"inherit"}
										fontWeight={"inherit"}
										fontSize={"11px"}
										lineHeight={"normal"}
										color={"var(--dark-color-variant-XXIII)"}
									>
										We'll use the email and phone above. More information will
										be communicated after payment.
									</Typography>
								</Box>
							</Stack>
						</BaseLabel>
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
					{isLoading ? (
						<CircularProgress color="inherit" className="loader" />
					) : (
						<Typography
							variant={"button"}
							fontFamily={"inherit"}
							fontWeight={"inherit"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							textTransform={"inherit"}
							color={"var(--light-color)"}
						>
							See Price
						</Typography>
					)}
				</BaseButton>
			</Box>
		</SearchFormWrapper>
	);
};
