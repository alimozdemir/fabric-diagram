
var fabric = require('fabric');
import './helper.js';

var defines = {
    /**
     * Reference https://codepen.io/rodan8888/pen/eBWNdp
     */
    toggleGrid() {
        const grid = this.getObjectById('grid');
        if (grid) {
            grid.visible = !grid.visible;
        }
    },
    addGrid(options) {
        const defaultOptions = {
            distance: 10,
            width: canvas.width,
            height: canvas.height,
            lineParam: {
                stroke: '#ebebeb',
                strokeWidth: 1,
                selectable: false
            },
            stroke: '#cccccc'
        };
        options = Object.assign(options, defaultOptions, {});

        const gridLen = options.width / options.distance;
        const objs = [];
        for (var i = 0; i < gridLen; i++) {
            const distance = i * options.distance,
                horizontal = new fabric.Line([distance, 0, distance, options.width], options.lineParam),
                vertical = new fabric.Line([0, distance, options.width, distance], options.lineParam);
    
            if (i % 5 === 0) {
                horizontal.set({ stroke: options.stroke });
                vertical.set({ stroke: options.stroke });
            }
    
            objs.push(horizontal);
            objs.push(vertical);
        }
        const group = new fabric.Group(objs, {
            left: 0,
            top: 0,
            selectable: false,
            id: 'grid'
        });
        canvas.add(group);
    },
    removeGrid() {
        const grid = this.getObjectById('grid');
        if (grid) {
            this.remove(grid);
        }
    }
}

fabric.Canvas.prototype.toggleGrid = defines.toggleGrid;
fabric.Canvas.prototype.addGrid = defines.addGrid;
fabric.Canvas.prototype.removeGrid = defines.removeGrid;
