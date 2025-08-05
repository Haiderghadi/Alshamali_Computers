// import "./Gallery.css";
// import * as THREE from "three";
// import { vertexShader, fragmentShader } from "../../utils/shaders.js";
// const Gallery = () => {
//   const config = {
//     cellSize: 0.75,
//     zoomLevel: 1.25,
//     lerpFactor: 0.075,
//     borderColor: "rgba(255, 255, 255, 0.15)",
//     backgroundColor: "rgba(128, 128, 128, 1)",
//     textColor: "rgba(128, 128, 128, 1)",
//     hoverColor: "rgba(255, 255, 255, 0)",
//   };

//   let scene, camera, renderer, plane;
//   let isDragging = false,
//     isClick = true,
//     clickStartTime = 0;
//   let previousMouse = { x: 0, y: 0 };
//   let offset = { x: 0, y: 0 },
//     targetOffset = { x: 0, y: 0 };
//   let mousePosition = { x: -1, y: -1 };
//   let zoomLevel = 1.0,
//     targetZoom = 1.0;
//   let textTextures = [];

//   const rgbaToArray = (rgba) =>{
//     const match = rgba.match(/rgba?\(([^)]+)\)\);
//     if(!match) return [1,1,1,1];
//     return match[1].split(',').map((v,i) =>
//       i < 3 ? parseFloat(v.trim()) / 255 : parseFloat(v.trim() || 1)
//     );
//   };

//   return (
//     <div className="body">
//       <section className="gallery">
//         <div className="vignette-overlay"></div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;
