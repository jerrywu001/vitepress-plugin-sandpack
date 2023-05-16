const code = `::: sandbox {rtl template=vite-vue-ts deps="three: latest, @tresjs/core: latest, @tresjs/cientos: latest"}
\`\`\`vue /src/App.vue
<script setup lang="ts">
import { reactive } from 'vue';
import { BasicShadowMap, sRGBEncoding, NoToneMapping } from 'three';
import { TresCanvas } from '@tresjs/core';

import { OrbitControls } from '@tresjs/cientos';

const gl = {
  clearColor: '#82DBC5',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputEncoding: sRGBEncoding,
  toneMapping: NoToneMapping,
};
</script>

<template>
  <div style="height: 285px; width: 100%;">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[7, 7, 7]" :look-at="[0, 4, 0]" />
      <OrbitControls />
      <TresMesh :position="[-2, 6, 0]" :rotation="[0, Math.PI, 0]" cast-shadow>
        <TresConeGeometry :args="[1, 1.5, 3]" />
        <TresMeshToonMaterial color="#82DBC5" />
      </TresMesh>
      <TresMesh :position="[0, 4, 0]" cast-shadow>
        <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
        <TresMeshToonMaterial color="#4F4F4F" />
      </TresMesh>
      <TresMesh :position="[2, 2, 0]" cast-shadow>
        <TresSphereGeometry />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>
      <TresAxesHelper :args="[1]" />
      <TresDirectionalLight :position="[0, 2, 4]" :intensity="2" cast-shadow />
    </TresCanvas>
  </div>
</template>
\`\`\`
:::`;

export default code;
