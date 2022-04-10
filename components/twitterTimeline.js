import { useEffect } from "react";

export default function TwitterTimeline() {
	useEffect(() => {
		const s = document.createElement("script");
		s.setAttribute("src", "https://platform.twitter.com/widgets.js");
		s.setAttribute("async", "true");
		document.head.appendChild(s);
	}, []);

	return (
		<div>
			<a
				className="twitter-timeline"
				data-height="270"
				data-theme="light"
				data-align="center"
				data-chrome="noheader nofooter transparent noborders"
				href="https://twitter.com/kamiinabotan?ref_src=twsrc%5Etfw">
				Tweets by kamiinabotan
			</a>
		</div>
	)
}