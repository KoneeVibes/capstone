import { DialogContent, DialogTitle } from "@mui/material";
import { BaseFormModalWrapper } from "./styled";
import type { FormModalPropsType } from "../../../types/component.type";

export const BaseFormModal: React.FC<FormModalPropsType> = ({
	open,
	className,
	handleClickOutside,
	header,
	handleSubmit,
	children,
}) => {
	return (
		<BaseFormModalWrapper
			open={open}
			onClose={handleClickOutside}
			PaperProps={{
				component: "form",
				onSubmit: handleSubmit,
			}}
			className={className}
		>
			{header && <DialogTitle component={"div"}>{header}</DialogTitle>}
			<DialogContent>{children}</DialogContent>
		</BaseFormModalWrapper>
	);
};
