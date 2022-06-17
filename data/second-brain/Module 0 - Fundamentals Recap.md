[[css]] [[CSS for JavaScript Developers]] [[course]]

# Module 0: Fundamentals Recap
- Not an absolute beginner's guide --> made to deepen understanding of [[CSS]]

## Media Queries
- `max-width` --> target small screens
- `min-width` --> target larger screens

## Selectors
### Pseudo-elements
- Target "sub-elements" within an element
	- Target elements in the DOM that haven't been explicitly created with HTML tags
- Use the `::` syntax
- `::before`/`::after` are syntactic sugar for `span`s that are before/after the content of your HTML tag
	- Not the best from an accessibility perspective --> okay to use if purely decorative
	- Screen readers try to vocalize `content`

## Units
- `em`
	- Relative unit
	- Equal to the font size of the _current_ element
- `rem`
	- Relative unit --> relative the to root `<html>` tag
	- More useful than `em`s in most circumstances
	- Everything will be consistent when the root font size changes (eg. a user increases the font)
	- If you want to change the baseline font size:
	```html
	html {
		/* this will create 20% bigger rem values across the app */
		font-size: 120%;
	}
	```