import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
	size?: number | string;
	fill?: string;
}

const AlmeydaLogo = (props: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 204.17 173.04"
			width={props.size}
			height={props.size}
			{...props}
		>
			<path
				d="M99.44 1.39.4 168.08a2.83 2.83 0 0 0 2.44 4.28h16.43a2.87 2.87 0 0 0 2.44-1.36L99.44 40.44a2.83 2.83 0 0 1 4.87 0L169 149.23a2.83 2.83 0 0 1-2.43 4.28h-16.66a2.83 2.83 0 0 1-2.44-1.38L104.32 79.5a2.84 2.84 0 0 0-4.88 0l-53 89.26a2.83 2.83 0 0 0 2.41 4.24h59.65a2.83 2.83 0 0 0 2.44-4.28l-8.24-13.82a2.82 2.82 0 0 0-2.43-1.39H83.66a2.83 2.83 0 0 1-2.44-4.28l18.22-30.67a2.84 2.84 0 0 1 4.88 0l31.55 53.09a2.82 2.82 0 0 0 2.43 1.35h63a2.83 2.83 0 0 0 2.43-4.28L104.32 1.39a2.84 2.84 0 0 0-4.88 0Z"
				fill={props.fill}
			/>
		</svg>
	);
};
AlmeydaLogo.defaultProps = {
	size: 20,
	fill: "currentColor",
};

export default AlmeydaLogo;
