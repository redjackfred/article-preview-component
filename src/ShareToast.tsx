import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";

export default function ShareToast() {
	return (
		<section className="bg-grey-900 tooltip-arrow absolute -top-[18px] -left-[30px] flex h-[76px] w-[327px] items-center gap-6 rounded-b-[10px] md:-top-[80px] md:left-[172px] md:h-[56px] md:w-[248px] md:rounded-t-[10px] md:shadow-lg xl:left-[230px]">
			<h1 className="text-preset-3 text-grey-400 relative left-[30px]">
				SHARE
			</h1>
			<div className="relative left-[30px] flex justify-between gap-4">
				<img src={facebookIcon} alt="facebook share" className="h-5 w-5" />
				<img src={twitterIcon} alt="twitter share" className="h-5 w-5" />
				<img src={pinterestIcon} alt="pinterest share" className="h-5 w-5" />
			</div>
		</section>
	);
}
