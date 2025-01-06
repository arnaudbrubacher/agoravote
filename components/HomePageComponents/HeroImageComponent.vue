<script lang="ts" setup>
import WorldMap from "~/assets/svgs/hero/WorldMap.svg"
import { ref, onMounted } from 'vue';
import svgPaths from '~/assets/svgs/hero/path.json';


const dotsElements = svgPaths;
// Extract center point from path data
function getPathCenter(pathD) {
  const numbers = pathD.match(/[+-]?\d+(\.\d+)?/g).map(Number);
  const xCoords = numbers.filter((_, i) => i % 2 === 0);
  const yCoords = numbers.filter((_, i) => i % 2 === 1);
  
  return {
    x: xCoords.reduce((a, b) => a + b, 0) / xCoords.length,
    y: yCoords.reduce((a, b) => a + b, 0) / yCoords.length
  };
}

const dots = ref(dotsElements.map(path => ({
  ...path,
  center: getPathCenter(path.d)
})));


onMounted(() => {
  function animateRipple(timestamp) {
    const speed = 0.001;     // Speed of ripple
    const wavelength = 50;    // Size of ripple waves
    const centerX = 500;     // Center of the ripple effect
    const centerY = 350;     // Adjust based on your SVG viewBox
    
    dots.value.forEach((dot, index) => {
      const distance = Math.sqrt(
        Math.pow(dot.center.x - centerX, 2) + 
        Math.pow(dot.center.y - centerY, 2)
      );
      
      // Modified wave calculation for outward expansion
      const wave = Math.sin(-timestamp * speed + distance / wavelength);
      
      // Fade out based on distance
      const fadeOut = Math.max(0, 1 - (distance / 100));
      const intensity = (wave + 1) / 2 * fadeOut;
      
      // Purple-ish color scheme
      const color = `rgb(${Math.floor(51 + intensity * 204)}, 
                        ${Math.floor(51 + intensity * 51)}, 
                        ${Math.floor(51 + intensity * 204)})`;
      
      // Apply color to the path
      const pathElement = document.getElementById(dot.id);
      if (pathElement) {
        pathElement.setAttribute("fill", color);
        
        // Optional: Scale transform
        const scale = 1 + intensity * 0.3;
        const center = dot.center;
        pathElement.setAttribute("transform", 
          `translate(${center.x} ${center.y}) scale(${scale}) translate(-${center.x} -${center.y})`
        );
      }
    });
    
    requestAnimationFrame(animateRipple);
  }

  // Start the animation
  requestAnimationFrame(animateRipple);
});

// Optional: Clean up on component unmount
onUnmounted(() => {
  // Cancel animation frame if needed
});

</script>

<template>
  <div ref="worldMapContainerRef" class="relative">
    <svg ref="worldMapRef" width="995" height="650" viewBox="0 0 995 650" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        v-for="dot in dotsElements"
        class="dot"
        :key="dot.id"
        :d="dot.d"
        fill="#000000"
        fill-opacity="0.9"
      />
    </svg>
    <!--<WorldMap
      ref="worldMapRef"
      class="w-[995px] h-[650px]"
      :fontControlled="false"
      filled
    />-->
  </div>
</template>

<style scoped>
.dot {
  transition: transform 0.3s ease-out, fill 0.3s ease-out;
}
</style>