// Made with Zdog

var isSpinning=true

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
});


const mercury_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/1.8, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const venus_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/2.1, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const earth_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/2, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const earth_moon_anchor = new Zdog.Anchor({
  addTo: earth_anchor,
  rotate: { 
    x: Zdog.TAU/2, 
  //  y: Zdog.TAU/8, 
    // z: Zdog.TAU/8
  },
});


const mars_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/2.2, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const jupiter_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/2.3, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const saturn_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/1.9, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const uranus_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/1.8, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const neptune_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/1.8, 
  //  y: Zdog.TAU/8, 
  //  z: Zdog.TAU/8
  },
});

const pluto_anchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { 
    x: Zdog.TAU/1.6, 
  },
});

sun = new Zdog.Shape({
  addTo: mercury_anchor,
  addTo: venus_anchor,
  addTo: earth_anchor,
  addTo: mars_anchor,
  addTo: jupiter_anchor,
  addTo: saturn_anchor,
  addTo: uranus_anchor,
  addTo: neptune_anchor,
  addTo: pluto_anchor,
  
  stroke: 100,
  color: '#ffdd00',
});

function animate() {
//   illo.rotate.y += true ? 0.01: 0;
   mercury_anchor.rotate.y += true ? 0.1: 0;
   venus_anchor.rotate.y += true ? 0.1 / 4.0125: 0;   
   earth_anchor.rotate.y += true ? 0.1 / 6.51785714286 : 0;
   mars_anchor.rotate.y += true ? 0.1 / 12.2678571429 : 0;
   jupiter_anchor.rotate.y += true ? 0.1 / 77.35308 : 0;
   saturn_anchor.rotate.y += true ? 0.1 / 192.143485714: 0;
   uranus_anchor.rotate.y += true ? 0.1 / 547.982142857 : 0;
   neptune_anchor.rotate.y += true ? 0.1 / 1074.82142857 : 0;
   pluto_anchor.rotate.y += true ? 0.1 / 1617.14285714: 0;
   // earth_moon_anchor.rotate.y += true ? 0.1 / 6.51785714286: 0;
    
    illo.updateRenderGraph();
 requestAnimationFrame( animate );
}
mercury=new Zdog.Shape({
  addTo: mercury_anchor,
 
  stroke: 10,
  translate:{x:-62},
  color: '#A9A9A9',
});
venus=new Zdog.Shape({
  addTo: venus_anchor,

  stroke: 15,
  translate:{x:-84},
  color: '#8B7D82',
  rotate: { x: Zdog.TAU/8 , y:Zdog.TAU/8}
});

earth= new Zdog.Shape({
  addTo: earth_anchor,
//  addTo: earth_moon_anchor,
  

  stroke: 16,
  translate:{x:-120},
  color: '#2948eb',
  rotate: { x: Zdog.TAU/8 , y:Zdog.TAU/8}
});

moon= new Zdog.Shape({
  addTo: earth_moon_anchor,
  
  stroke: 5,
  translate:{x:-130},
  color: '#A9A9A9',

});
//  rotate: { x: Zdog.TAU/8 , y:Zdog.TAU/8}

mars= new Zdog.Shape({
  addTo: mars_anchor,

  stroke: 13,
  translate:{x:-160},
  color: '#b44809',
  rotate: { x: Zdog.TAU/8 , y:Zdog.TAU/8}
});
jupiter= new Zdog.Shape({
  addTo: jupiter_anchor,

  stroke: 40,
  translate:{x:-220},
  color: '#ce972f',
  rotate: { x: Zdog.TAU/8 , y:Zdog.TAU/8}
});


const anchor = new Zdog.Anchor({
  addTo: saturn_anchor,
  rotate: { x: Zdog.TAU/6 },
});


saturn=new Zdog.Shape({
  addTo: anchor,
 
  stroke: 30,
  translate:{x:-300},
  color: '#df6506',
});

new Zdog.Ellipse({
  addTo: anchor,
  width: 60,
  height: 80,
  stroke: 5,
  translate:{x:-300},
  color: '#eeaa00',
  dragRotate:false,

});

const anchor2 = new Zdog.Anchor({
  addTo: uranus_anchor,
  rotate: { x: Zdog.TAU },
});

uranus=new Zdog.Shape({
  addTo: anchor2,
 
  stroke: 20,
  translate:{x:-390},
  color: '#5addff',
});

new Zdog.Ellipse({
  addTo: anchor2,
  
  width: 60,
  height: 80,
  stroke: 2,
  translate:{x:-390},
  color: '#0b48d6',
  
});

neptune=new Zdog.Shape({
  addTo: neptune_anchor,
 
  stroke: 20,
  translate:{x:-470},
  color: '#2248aa',
});

pluto=new Zdog.Shape({
  addTo: pluto_anchor,
 
  stroke: 5,
  translate:{x:-500,y:-100,z:-50},
  color: '#a64807',
});
animate();

