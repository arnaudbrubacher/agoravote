<script lang="ts" setup>
const svgNS = "http://www.w3.org/2000/svg";
const svg = document.getElementById('dotPattern');
const dots = [];
const spacing: number = 5;
const radius: number = 3;

for(let x = spacing; x < 400; x += spacing) {
  for(let y = spacing; y < 400; y += spacing) {
    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("r", radius);
    dot.setAttribute("fill", "#333");
    dot.classList.add("dot");
    svg.appendChild(dot);
    dots.push({
      element: dot,
      x: x,
      y: y
    });
  }
}
</script>

<template>
  <svg id="dotPattern" viewBox="0 0 auto 50" fill="none" xmlns="http://www.w3.org/2000/svg">

  </svg>
</template>