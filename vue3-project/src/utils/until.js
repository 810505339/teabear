export const getAnimation = (obj, animationData) => {
	let sleep = 0
	Object.values(obj.value).forEach((t, i) => {

		const timer = setTimeout(() => {
			const animation = uni.createAnimation({
				duration: t.duration,
				timingFunction: "ease",
			});
			Object.entries(t.action).forEach(_t => {
				animation[_t[0]](_t[1]).step()
			})
			animationData.value[t.key] = animation.export();
			clearTimeout(timer);
		}, sleep)

		sleep = t.sleep ? sleep + t.sleep : sleep
	})
}
