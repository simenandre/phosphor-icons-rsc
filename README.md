<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# phosphor-react-sc

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

This is a fork of [@phosphor-icons/react](https://github.com/phosphor-icons/react). The only change is that the icons no longer use `useContext` in order to support React Server Components.

[![NPM](https://img.shields.io/npm/v/phosphor-react-sc.svg?style=flat-square)](https://www.npmjs.com/package/phosphor-react-sc)

## Installation

```bash
yarn add phosphor-react-sc
```

or

```bash
npm install --save phosphor-react-sc
```

## Usage

Simply import the icons you need, and add them anywhere in your render method. Phosphor supports tree-shaking, so your bundle only includes code for the icons you use.

```tsx
import { Horse, Heart, Cube } from "phosphor-react-sc";

const App = () => {
  return (
    <main>
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </main>
  );
};
```

### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.
- **alt?**: `string` – Add accessible alt text to an icon.

### Composability

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components can accept arbitrary SVG elements as children, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The children will be placed _below_ the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```jsx
const RotatingCube = () => {
  return (
    <Cube color="darkorchid" weight="duotone">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Cube>
  );
};
```

> **Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

### Imports

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "phosphor-react-sc";

<Icon.Smiley />
<Icon.Folder weight="thin" />
<Icon.BatteryHalf size="24px" />
```

### Custom Icons

It is possible to extend Phosphor with your own custom icons and taking advantage of the styling. To create a custom icon, first design your icons on a 256x256 pixel grid, and export them as SVG. For best results, flatten the icon so that you only export assets with `path` elements. Strip any `fill` or `stroke` attributes, as these will be inherited from the wrapper.

Next, create a new React `forwardRef` component, importing the `IconBase` component, as well as the `Icon` and `IconWeight` types from this library. Define a `Map<IconWeight, ReactElement>` that maps each icon weight to _the contents of each SVG asset_, effectively removing the wrapping `<svg>` element from each. Name your component, and render an `<IconBase />`, passing all props and the ref, as well as the `weights` you defined earlier, as JSX props:

```tsx
import { forwardRef, ReactElement } from "react";
import { Icon, IconBase, IconWeight } from "phosphor-react-sc";

const weights = new Map<IconWeight, ReactElement>([
  ["thin", <path d="..." />],
  ["light", <path d="..." />],
  ["regular", <path d="..." />],
  ["bold", <path d="..." />],
  ["fill", <path d="..." />],
  [
    "duotone",
    <>
      <path d="..." opacity="0.2" />
      <path d="..." />
    </>,
  ],
]);

const CustomIcon: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

CustomIcon.displayName = "CustomIcon";

export default CustomIcon;
```

> **NOTE:** If you have multiple child elements, wrap them in a `Fragment`. Typically our `duotone` icons have multiple elements, with the background layer at 20% opacity.

## Our Related Projects

- [@phosphor-icons/homepage](https://github.com/phosphor-icons/homepage) ▲ Phosphor homepage and general info
- [@phosphor-icons/core](https://github.com/phosphor-icons/core) ▲ Phosphor icon assets and catalog
- [@phosphor-icons/web](https://github.com/phosphor-icons/web) ▲ Phosphor icons for Vanilla JS
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue) ▲ Phosphor icon component library for Vue
- [@phosphor-icons/elm](https://github.com/phosphor-icons/phosphor-elm) ▲ Phosphor icons for Elm
- [@phosphor-icons/flutter](https://github.com/phosphor-icons/flutter) ▲ Phosphor IconData library for Flutter
- [@phosphor-icons/webcomponents](https://github.com/phosphor-icons/webcomponents) ▲ Phosphor icons as Web Components
- [@phosphor-icons/figma](https://github.com/phosphor-icons/figma) ▲ Phosphor icons Figma plugin
- [@phosphor-icons/sketch](https://github.com/phosphor-icons/sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/phosphor-home)!

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)
