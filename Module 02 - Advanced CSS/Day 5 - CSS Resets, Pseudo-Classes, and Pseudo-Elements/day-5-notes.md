# Day 5
- reset.css used to set a common baseline across browsers.
- Browsers look at style sheets in order. The later sheets override previous definitions.
---
- Oblique is like emphasis, but different.
- font-weight goes from 100 to 900.
- SOmetimes, fonts may not support some weights.
- Typically, you want to end your font-family with serif, san-serif, or monocode (depends on the fonts you’re listing, which should be the same type).
- text-transform.
- text-decoration.
---
- Pseudoclasses!
- For example, button:hover. Overrides button properties when you hover.
- Chrom DevTools have a “force element state” feautre, so you don’t have to do the thing. I wonder if Safari supports the same?
- :focus applies to text fields, too (maybe it’s more obvious there?).
- You can check mdn web docs for browser compatability.
- Things like :hover handled different on mobile devices. May need to take that into consideration.
- An arrow (>) says only the first child.
- An plus (+) says only the siblings.
- There are other symbols.
---
- Pseudoelements!
- ::before and ::after are some of the common ones.
- The `content` property lets you add content.
- You can also pull content from elements (for example, by adding attr(href)).
- When you use ::before and ::after, you must add a content property to make it do something.
- There are other pseudoclasses, but these two are the most important.
---
- There are pseudoclasses for forms too.
- Remember that + and > add specificity (should re-review). Are there others like this?
- + refers to a sibling (shares a parent).
- > refers to a child.