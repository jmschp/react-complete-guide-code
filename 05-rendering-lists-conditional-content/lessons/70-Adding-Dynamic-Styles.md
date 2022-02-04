# 70. Adding Dynamic Styles

To add CSS styling to a JSX component we use the special prop named `style`, and pass to it an JavaScript object with the css properties. For example:

```javascript
<div style={{ color: "red" }}></dvi>`.
```

For CSS properties that have a _"-"_ in the middle we must wrap the property in quotes like _"property-name"_, or use the camelCase convention like _"propertyName"_.For example:

```javascript
<div style={{ color: "red", "backgroud-color": "black", fontSize: "16px" }}></dvi>
```

With this approach we can dynamically style an element, like for example the ChartBar fill height.

```javascript
function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.value > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className={"chart-bar__label"}>{}</div>
    </div>
  );
}
```
