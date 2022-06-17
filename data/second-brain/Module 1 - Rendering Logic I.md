[[css]] [[CSS for JavaScript Developers]] [[course]]

# Module 1: Rendering Logic I
## Built-in Declarations and Inheritance
- `user-agent` stylesheet
	- Styles included with the browser
	- Most browsers come up with their own implementation
### Inheritance
- Certain CSS properties inherit
- Most of these properties are typography-related (eg. `color`, `font-size`, `text-shadow`)
- [List of inherited properties](https://www.sitepoint.com/css-inheritance-introduction/#list-css-properties-inherit)
- Similar to JavaScript's proptypal inheritance
	- Walks up the tree and gets properties from it's parent
- You can force an element to inherit a property by using `inherit`
```css

a {
	/* Inherit color from the parent  */
  	color: inherit;
}
```
## The Cascade
- Browser uses specificity to determine what CSS rules apply to an element
	- JS equivalent --> spreading a bunch of objects into a new one
- Specificity is not usually a problem in modern development due to the CSS tooling used by most companies

## Directions
- Based on the print world
	- Vertically-oriented blocks (eg. paragraphs)
	- Horizontally-oriented words
- CSS has logical properties which have context of the directions
	- `margin-block` --> vertical axis
	- `margin-inline` --> horizontal axis

## The Box Model
- Made up of
	- Content
	- Padding
	- Border
	- Margin

### Box Sizing
- `content-box`
	- Width/height includes only the content
- `border-box`
	- Width/height includes content, padding, and border

### Padding
- "Inner space"
- If you use percentages in padding, it _always_ refers to the width of the element, even when using top/bottom padding

### Border
- Comprised of a width, style, and color
	- The only required field is `border-style`
- If you don't specify `border-color`, it uses the font's color by default
	- The `currentColor` keyword can be used to explicitly set this behaviour

#### Border radius
- Should've been called `corner-radius` because it rounds the corners of an element with or without a border

#### Border vs. Outline
- Both add a visual edge to an element
- `outline` doesn't affect layout
	- More like a `box-shadow`
	- Cosmetic effect that doesn't move an element or change its size
	- Allow you to add a gap between the outline and the element with `outline-offset`
	- Never remove an outline (`outline: none;`) from a button (unless providing an alternative)
		- Used for keyboard navigation

### Margin
- Space _around_ an element
	- It's about changing the gap _between_ elements
- `margin: auto;` will fill the maximum available space with margin
	- Only works for horizontal margin in the default "flow" layout
		- `margin-top: auto;` is equivalent to `0px`
	- Only works with elements that have a explicit width (block elements grow to fill the available horizontal space)

## Flow Layout
- Elements have their layout calculated by a layout algorithm
	- Know as **layout modes**
	- There are 7 distinct ones
- Flow layout is the default layout mode
- Every element uses a `display` of `inline`, `block`, or `inline-block`

### Inline Elements
- Can't change width or height
- Don't impact the flow of a document
	- This is true except for [[replaced elements]]
- Inline elements are usually treated as if they're typography; this means they'll have line height on them
	- This includes [[replaced elements]] like `<img>`
- Inline elements can line-wrap

### Block Elements
- Expands to fill all available horizontal space

### Inline Block Elements
- Drop a block element into an inline context
- Internally acts as a block element, externally acts as an inline element
- Doesn't line-wrap

### Width Algorithms
- Percentage-based widths are based on the parent element's content space
	- Eg. if the `body` tag has `width: 400px;`, any child width `width: 100%;` will be `400px` wide
- `min-content`
	- Our content should be as small as it can _based on child contents_
		- Sizing based on an element's children instead of its parent
- `max-content`
	- Element's width will be the smallest value that fits all of the content without breaking it up
		- Avoids adding line-breaks
- `fit-content`
	- Width is based on the element's children
	- If the width can fit _within_ the parent container, it'll behave like `max-content` (no line-breaks)
	- If the content is too wide to fit in the parent, adds line-breaks as-needed (like `width: auto;`)