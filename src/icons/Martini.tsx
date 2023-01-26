/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M243.1,35.4A12,12,0,0,0,232,28H24a12,12,0,0,0-11.1,7.4,12.2,12.2,0,0,0,2.6,13.1L116,149v55H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V149L240.5,48.5A12.2,12.2,0,0,0,243.1,35.4ZM203,52,191,64H65L53,52Zm-75,75L89,88h78Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <polygon points="56 72 200 72 128 144 56 72" />
    </g>
    <path d="M237.7,45.7a8.4,8.4,0,0,0,1.7-8.8A8,8,0,0,0,232,32H24a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8L120,147.3V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.3ZM75.3,80H180.7L128,132.7ZM212.7,48l-16,16H59.3l-16-16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M237.7,45.7a8.4,8.4,0,0,0,1.7-8.8A8,8,0,0,0,232,32H24a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8L120,147.3V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.3Zm-25,2.3-16,16H59.3l-16-16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M236.2,44.2a5.7,5.7,0,0,0,1.3-6.5A6,6,0,0,0,232,34H24a6,6,0,0,0-5.5,3.7,5.7,5.7,0,0,0,1.3,6.5L122,146.5V210H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V146.5ZM70.5,78h115L128,135.5Zm147-32-20,20H58.5l-20-20Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M237.7,45.7a8.4,8.4,0,0,0,1.7-8.8A8,8,0,0,0,232,32H24a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8L120,147.3V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.3ZM75.3,80H180.7L128,132.7ZM212.7,48l-16,16H59.3l-16-16Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M235.7,38.5A4,4,0,0,0,232,36H24a4,4,0,0,0-3.7,2.5,3.8,3.8,0,0,0,.9,4.3l32,32h0L124,145.7V212H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V145.7l70.8-70.9h0l32-32A3.8,3.8,0,0,0,235.7,38.5ZM128,138.3,65.7,76H190.3ZM198.3,68H57.7l-24-24H222.3Z" />
  </>
);

const Martini = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Martini.displayName = "Martini";

export default Martini;
