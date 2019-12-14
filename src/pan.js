/**
 * Reference: https://stackoverflow.com/questions/45110576/fabricjs-touch-pan-zoom-entire-canvas
 */
var defines = {
    togglePan() {
        if (this.togglePanning === undefined)
            this.togglePanning = false;

        this.togglePanning = !this.togglePanning;
        this.panning = false;
        const events = {
            'mouse:up': this._panMouseUp,
            'mouse:down': this._panMouseDown,
            'mouse:move': this._panMouseMove,
        };

        this.togglePanning ? this.on(events) : this.off(events);
    },
    _panMouseUp() {
        this.panning = false;
    },
    _panMouseDown() {
        this.panning = true;
    },
    _panMouseMove(e) {            
        if (this.panning && e && e.e) { 
            var units = 10;
            var delta = new fabric.Point(e.e.movementX, e.e.movementY);
            this.relativePan(delta);
        }
    }
}

fabric.Canvas.prototype.togglePan = defines.togglePan;
fabric.Canvas.prototype._panMouseUp = defines._panMouseUp;
fabric.Canvas.prototype._panMouseDown = defines._panMouseDown;
fabric.Canvas.prototype._panMouseMove = defines._panMouseMove;

