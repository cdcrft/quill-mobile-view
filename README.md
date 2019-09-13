# Quill Mobile View

A module for Quill rich text editor to allow resizing of the editor to adapt it to a mobile view.

## Installation

```
$ npm i quill-mobile-view --save
```

## Usage

### With webpack

```javascript
import QuillMobileView from 'quill-mobile-view';
import { QuillMobileViewOptions } from 'quill-mobile-view';
// Css is in a separate file, if you use webpack, you need a css loader
import 'quill-mobile-view/dist/quill-mobile-view.css';

Quill.register('modules/quillMobileView', QuillMobileView);

var quill = new Quill(editor, {
    // ...
    modules: {
        // No options here
        quillMobileView: {},
        toolbar: [
            // ... The toolbar config you wish to put before the mobile view control
            QuillMobileViewOptions,
            // ... The toolbar config you wish to put after the mobile view control
        ]
    }
});
```

### With script tag

Copy dist/ content inside you web root folder

```html
<link rel="stylesheet" type="text/css" href="/quill-mobile-view.min.css">
<script src="quill-mobile-view.min.js"></script>
```

### Usage constraints 

In order for this module to work, your quill editor tag should be inside its own container.
This module will look for the .quill tag parent, and once found, will change its size.

```html
<div class="quill-container">
    <div class="quill">
    </div>
</div>
```

## Things left to do

- Give the possibility to add/remove screen sizes inside the control
- Find a better solution than changing the container size