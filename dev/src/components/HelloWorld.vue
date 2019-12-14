<template>
  <div>
    <canvas id="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
import { fabric } from 'fabric';
import '../../../src/grid';
import '../../../src/pan';

export default {
  name: 'HelloWorld',
  mounted() {
    console.log('mounted', fabric);
    const canvas = new fabric.Canvas(document.getElementById('canvas'));
  
    console.log(canvas, canvas.addGrid);
    var triangle = new fabric.Triangle({
        fill: 'green',
        left: 200,
        top: 200,
        selectable: true
    });
    
    canvas.addGrid();
    canvas.togglePan();
    canvas.add(triangle);
    // canvas.removeGrid();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
