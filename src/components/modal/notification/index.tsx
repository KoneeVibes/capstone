import type { NotificationModalPropsType } from "../../../types/component.type";
import { BaseNotificationModalWrapper } from "./styled";

export const BaseNotificationModal: React.FC<NotificationModalPropsType> = ({
	open,
	handleClose,
	className,
}) => {
	return (
		<BaseNotificationModalWrapper
			open={open}
			onClose={handleClose}
			className={className}
        >
            
        </BaseNotificationModalWrapper>
	);
};
