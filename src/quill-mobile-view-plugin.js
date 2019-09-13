
class MobileViewPlugin {
    constructor(quill, options = {}) {
        this.quill = quill;
        this.options = {
            'normal': ['100%', 'none'],
            's1': ['320px', '568px'],
            's2': ['360px', '640px'],
            's3': ['375px', '667px'],
            's4': ['375px', '812px'],
            's5': ['411px', '731px'],
            's6': ['414px', '736px'],

        };
        this.toolbarModule = this.quill.getModule('toolbar');

        if (typeof this.toolbarModule === 'undefined') {
            throw new Error('Toolbar module is not activated');
        }

        this.initModule();
    }

    initModule() {
        this.addEventHandlers();
    }

    addEventHandlers() {
        let items = document.querySelectorAll('.ql-picker.ql-mobile-view .ql-picker-options .ql-picker-item');
        items.forEach((item) => {
            item.addEventListener('click', this.onUpdate.bind(this));
        })
    }

    onUpdate(event) {
        let container = this.quill.container;
        let toolbar = this.quill.getModule('toolbar').container;
        let dimensions = this.options[event.target.dataset.value];

        // Set dimensions
        container.style.width = dimensions[0];
        container.style.height = dimensions[1];
        toolbar.style.width = dimensions[0];
    }
}

module.exports = MobileViewPlugin;