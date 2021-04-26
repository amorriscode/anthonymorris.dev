# Front-end Performance Checklist

- [ ] Be 20% faster than your competition
	- Use mid-range devices for numbers or throttle the network
	- Collect goals based on those devices then lower them by 20% to set targets
- [ ] Prioritize metrics
	- How fast can you start rendering the most important pixels?
	- How fast can you provide input responsiveness?
	- Some metrics:
		- Time To Interactive
			- < 5s on 3G
		- First Input Delay
			- < 100ms
		- Hero rendering times
		- Largest contentful paint
			- < 2.5s
		- Total blocking time
		- Cumulative layout shift
			- < 0.1
- [ ] 100ms response time, 60 frames per second
	- Make your animations 60 fps
- [ ] First bundle < 170KB
	- 170KB is gzipped
	- 0.7-0.8MB decompressed
- [ ] Brotli for compression
- [ ] WebP or AVIF for images
- [ ] use service workers for caching and fallbacks
- [ ] Optimize images
	- Tools:
		- Squoosh
		- mozjpeg
		- guetzli
		- pingo
		- SVGOMG
- [ ] Inline critical (above the fold) CSS

[[front-end development]] 