import { forwardRef } from "react";
import { ButtonProps } from "./Button.interface";
import { ButtonStyle } from "./Button.style";

export const Button = forwardRef((_props: ButtonProps, _) => {
	const {
		text,
		backgroundColor,
		textColor,
		buttonType = "primary",
		borderColor,
		...props
	} = _props;
	const { $base, $outlined } = ButtonStyle;
	const $style = `${backgroundColor && backgroundColor} ${
		textColor && textColor
	} ${
		buttonType === "outlined"
			? `${borderColor && `${borderColor}`} ${$outlined}`
			: $base
	}`;

	return (
		<button {...props} className={$style}>
			{text}
		</button>
	);
});
