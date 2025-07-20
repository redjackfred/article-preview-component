import "./App.css";
import ShareButton from "./ShareButton";
import { useState } from "react";
import ShareToast from "./ShareToast";

function App() {
	const [showShareToast, setShowShareToast] = useState(false);

	return (
		<div className="bg-grey-200 flex min-h-screen items-center justify-center">
			<article className="flex flex-col rounded-[10px] shadow-xl md:flex-row">
				<img
					src="./src/assets/images/drawers.jpg"
					className="h-[200px] w-[327px] rounded-t-[10px] object-cover md:h-[346px] md:w-[229px] md:rounded-l-[10px] md:rounded-r-none xl:h-[280px] xl:w-[285px]"
				/>
				<section className="rounded-lg bg-white md:w-[379px] md:rounded-l-none xl:w-[450px]">
					<div className="px-[30px] pt-8 pb-[18px] md:py-[41px] md:pr-[36px] md:pl-8 xl:h-[220px] xl:px-[40px] xl:py-[30px]">
						<section className="w-[267px] md:w-[311px] xl:w-[365px]">
							<h1 className="text-preset-1-bold text-grey-900">
								Shift the overall look and feel by adding these wonderful
								touches to furniture in your home
							</h1>
							<p className="text-preset-2-medium text-grey-500 mt-6">
								Ever been in a room and felt like something was missing? Perhaps
								it felt slightly bare and uninviting. I’ve got some simple tips
								to help you make any room feel complete.
							</p>
						</section>
						<section className="relative mt-12 md:mt-6">
							<div className="flex gap-4">
								<img
									src="./src/assets/images/avatar-michelle.jpg"
									width="40px"
									height="40px"
									className="rounded-full"
								/>
								<div>
									<h2 className="text-preset-2-bold text-grey-900">
										Michelle Appleton
									</h2>
									<h3 className="text-preset-2-medium text-grey-400">
										28 Jun 2020
									</h3>
								</div>
							</div>
							<div className="absolute top-0 right-0 z-10">
								<ShareButton
									handleClick={() => setShowShareToast((pre) => !pre)}
									isActive={showShareToast}
								/>
							</div>
							{showShareToast && <ShareToast />}
						</section>
					</div>
				</section>
			</article>
		</div>
	);
}

export default App;
