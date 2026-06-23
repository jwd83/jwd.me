## Cascading Style Sheets
CSS or Cascading Style Sheets are styles that you can apply to [[HTML]] elements.

### CSS Selectors
You can specify a type of HTML element directly by naming a style after that HTML element. 

```css
div {
color: white;
}
```
#### Classes
By declaring a style beginning with a `.` Classes allow you to specify groups of properties you with to apply to an element. Multiple classes can be applied to an element allowing you to mix and match them. CSS frameworks like [[Tailwind]] make heavy use of class mixing to achieve a desired style. 

```css
.bluetext{
color:blue;
}
```

#### IDs
By declaring a style beginning with a `#` you are specifying an element on a page with a specific matching ID. Only 1 [[HTML]] element should have a given ID.

```css
#youwin {
color:green;
}
```