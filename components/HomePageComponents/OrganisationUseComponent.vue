<script lang="ts" setup>
import type { SanityDocument } from "@sanity/client";
//import imageUrlBuilder from "@sanity/image-url";
//import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

var showImages = false;
var post: globalThis.Ref<SanityDocument | null, SanityDocument | null>;
try {
  const POST_QUERY = groq`*[_type == "post"]{"imageurl":image.asset->url, "alt":title}`;
  const { params } = useRoute();
  const { data: data_post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
  post = data_post;
  showImages = true;
} catch(error) {
  console.error("There was an error while getting pictures from the cdn");
  showImages = false;
}

/*const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
*/
</script>

<template>
  <div id="organisation-use-banner" class="flex flex-col w-full h-full justify-center gap-6 items-center">
    <h3 class="host-gm text-base">Trusted and used by organisations</h3>
    <div>
      <NuxtImg v-if="showImages == true"
        :src="`${post[0].imageurl}`"
        :alt="post[0].alt"
        height="30"
        width="93"
      />
    </div>
  </div>
</template>