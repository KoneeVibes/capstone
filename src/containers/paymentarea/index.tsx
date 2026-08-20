import type {
	PropertyInquiryNavigationPropsType,
	PropertyInquiryPaymentAreaPropsType,
} from "../../types/container.type";
import { PaymentAreaWrapper } from "./styled";

export const PaymentArea: React.FC<
	PropertyInquiryNavigationPropsType & PropertyInquiryPaymentAreaPropsType
> = () => {
	return (
		<PaymentAreaWrapper>{/* paystack modal goes in here */}</PaymentAreaWrapper>
	);
};
