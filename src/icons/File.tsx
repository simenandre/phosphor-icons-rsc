/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M216.5,79.5l-56-56A12.3,12.3,0,0,0,152,20H56A20.1,20.1,0,0,0,36,40V216a20.1,20.1,0,0,0,20,20H200a20.1,20.1,0,0,0,20-20V88A12.3,12.3,0,0,0,216.5,79.5ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M208,88H152V32Z" opacity="0.2" />
    <path d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM160,51.3,188.7,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM152,88V44l44,44Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M212.2,83.8l-56-56A5.6,5.6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A5.6,5.6,0,0,0,212.2,83.8ZM158,46.5,193.5,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM160,51.3,188.7,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M210.8,85.2l-56-56A3.6,3.6,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A3.6,3.6,0,0,0,210.8,85.2ZM156,41.7,198.3,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Z" />
  </>
);

const File = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

File.displayName = "File";

export default File;
