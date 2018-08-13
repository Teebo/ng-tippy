# NgTippy

NgTippy is an Angular wrapper directive for Tippy.js

## Installation

```
npm i ng-tippy
```

# Usage
 
Import in app.module.ts

```javascript
...
import { TippyModule } from 'ng-tippy';
... 

imports: [ TippyModule ]
```

# Basic

```html
<input title="I am a tooltip" appTippy>show on mouseover or hoverover</input>
```

# With options

```html
<input title="I am a tooltip" appTippy [tippyOptions]="{arrow: true}">
  show on mouseover or hoverover
</input>
```

# With custom template

```html
<div id="myCustomTemplate"></div>

<input title="I am a tooltip" appTippy [tippyOptions]="{html: '#myCustomTemplate'}">
 show on mouseover or hoverover
</input>
```

# Using the Tippy service

```javascript
...
import { TippyService } from 'ng-tippy';
...
  constructor(private tippyService: TippyService) { }

    ngOnInit(): void {
    setTimeout(() => {
      // provide the name of the tippy that you have defined in your template
      this.tippyService.hideTippy('tippy');
    }, 5000);
  }
```
  The template example

```html

<div id="my-tooltip-template" style="text-align:center;display: none;">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>

<div style="width:400px; height:400px; border: 1px solid black;" type="text" appTippy [tippyOptions]="{
  arrow: true,
  name: 'tippy',
  interactive: true,
  html:'#my-tooltip-template',
  createPopperInstanceOnInit: true
}">
 Mouse-Enter or Hover-Over
</div>
```
  
