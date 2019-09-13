# Quill Mobile View

A module for Quill rich text editor to allow resizing of the editor to adapt it to a mobile view.

## Installation

```
$ npm i quill-mobile-view --save
```

## Usage

### With webpack

```javascript
import * as mobileView from 'quill-mobile-view';
// Css is in a separate file, if you use webpack, you need a css loader
import 'quill-mobile-view/dist/quill-mobile-view.css';

Quill.register('modules/quillMobileView', mobileView.module);

var quill = new Quill(editor, {
    // ...
    modules: {
        // No options here
        quillMobileView: {},
        toolbar: [
            // ... The toolbar config you wish to put before the mobile view control
            mobileView.options,
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

## Things left to do

- Give the possibility to add/remove screen sizes inside the control