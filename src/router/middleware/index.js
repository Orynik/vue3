// https://gitlab.com/Sticker0ne/vue-layouts
export async function loadLayoutMiddleware(route) {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || "defaultLayout";
  const fileNameWithoutExtension = normalizedLayoutName.split(".vue")[0];

  // console.log(fileNameWithoutExtension);

  const component = await import(`@/layout/${fileNameWithoutExtension}.vue`);

  route.meta.layoutComponent = component.default;
}
