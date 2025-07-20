import ShareIcon from "/src/assets/images/icon-share.svg";

export default function ShareButton({
	handleClick,
	isActive,
}: {
	handleClick: () => void;
	isActive: boolean;
}) {
	return (
		<button
			className={`flex h-8 w-8 items-center justify-center rounded-full ${
				isActive ? "bg-grey-500" : "bg-grey-200"
			}`}
			onClick={handleClick}
		>
			<img
				src={ShareIcon}
				className={`w-4 ${isActive ? "brightness-0 invert" : ""}`}
			/>
		</button>
	);
}
