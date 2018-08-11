# NgTippy

NgTippy is an ANgular wrapper directive for Tippy.js

## Installation

```
npm i ng-tippy
```

# Usage

```
Import in app.module.ts
...
import { TippyModule } from 'ng-tippy';
... 

imports: [ TippyModule ]
```

# Basic

```
<input title="I am a tooltip" appTippy>show on mouseover or hoverover</input>
```

# With options

```
<input title="I am a tooltip" appTippy [tippyOptions]="{arrow: true}">
  show on mouseover or hoverover
</input>
```

 # With custom template

 ```
 <div id="myCustomTemplate"></div>

 <input title="I am a tooltip" appTippy [tippyOptions]="{html: '#myCustomTemplate'}">
  show on mouseover or hoverover
 </input>
```
