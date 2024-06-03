# nuxt3-plugin-link-resolver

create a `linkResolver`base on your `~/assets/jsons/link-resolver.json`

```
  yarn add @lg2/nuxt3-plugin-link-resolver -D
  npm i @lg2/nuxt3-plugin-link-resolver -D
```

```
const { $lr } = useNuxtApp();
$lr({__typename:'BlogArticleRecord',slug:slug})
```

### How to use
`~/plugins/link-resolver.js`
```
import linkResolver from '@lg2/nuxt3-plugin-link-resolver'
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin(() => {
  return {
    provide: {
      lr: linkResolver,
    },
  };
});

```


### example of `link-resolver.json`
```
{
  "AboutRecord": { "name": "a-propos" },
  "BlogIndexRecord": { "name": "blogue" },
  "BlogArticleRecord": {
    "name": "blogue-slug",
    "params": { "slug": "slug"}
  },
  "MultiparamsRecord": {
    "name": "route-category-slug",
    "params": { "slug": "slug", "category": "category.slug" }
  },
}
```