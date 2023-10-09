export const getAnimation = (obj, animationData) => {
	return new Promise((re) => {
		let sleep = 0
		const item = Object.values(obj.value)
		item.forEach((t, i) => {

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
				if (i === item.length - 1) re()
			}, sleep)

			sleep = t.sleep ? sleep + t.sleep : sleep
		})
	})

}
