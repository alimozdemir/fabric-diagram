var fabric = require('fabric');

var defines = {
        /**
     * 
     * @param {string} id
     * @returns {fabric.Object}
     */
    getObjectById(id) {
        
        for (let i = 0; i < this._objects.length; i++) {
            const obj = this._objects[i];
            const objId = obj.get('id');

            if (objId && objId === id) {
                return obj;
            }
        }

        return undefined;
    }
}


fabric.Canvas.prototype.getObjectById = defines.getObjectById;