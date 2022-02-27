import { useState, useEffect } from 'react';

export const useOnScreen = (ref: any) => {
	const [isOnScreen, setIsOnScreen] = useState(false);

	const observer = new IntersectionObserver(
		([entry]) => setIsOnScreen(entry.isIntersecting),
		{
			threshold: [0.25, 0.5, 0.75],
		}
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	});

	return isOnScreen;
};