import type { FormLabelProps, InputBaseProps } from "@mui/material";

export type BaseTypographyType = {
	fontsize?: string;
	fontweight?: number;
	colour?: string;
};

export type BaseButtonPropsType = BaseTypographyType & {
	radius?: string;
	padding?: string;
	bgcolor?: string;
	border?: string;
};

export type BaseLabelPropsType = BaseTypographyType & FormLabelProps;

export type BaseInputPropsType = BaseTypographyType & {
	border?: string;
	bgcolor?: string;
	radius?: string;
	padding?: string;
} & InputBaseProps;

export type BaseMarqueePropsType = {
	background: string;
	items: React.ReactNode[];
};

export type FormModalPropsType = {
	open: boolean;
	handleClickOutside:
		| ((event: object, reason: "backdropClick" | "escapeKeyDown") => void)
		| undefined;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	header?: React.ReactNode;
	children: React.ReactNode;
	className?: string;
};

export type NotificationModalPropsType = {
	open: boolean;
	icon: React.ReactNode;
	handleClose:
		| ((event: object, reason: "backdropClick" | "escapeKeyDown") => void)
		| undefined;
	title: string;
	message: string;
	className?: string;
};
