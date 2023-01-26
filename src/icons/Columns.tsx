/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M100,28H64A20.1,20.1,0,0,0,44,48V208a20.1,20.1,0,0,0,20,20h36a20.1,20.1,0,0,0,20-20V48A20.1,20.1,0,0,0,100,28ZM96,204H68V52H96ZM192,28H156a20.1,20.1,0,0,0-20,20V208a20.1,20.1,0,0,0,20,20h36a20.1,20.1,0,0,0,20-20V48A20.1,20.1,0,0,0,192,28Zm-4,176H160V52h28Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <rect
      x="-4"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(212 44) rotate(90)"
      opacity="0.2"
    />
    <rect
      x="84"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      opacity="0.2"
    />
    <path d="M104,32H64A16,16,0,0,0,48,48V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32Zm0,176H64V48h40ZM192,32H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Zm0,176H152V48h40Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M120,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32h40A16,16,0,0,1,120,48Zm72-16H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M104,34H64A14,14,0,0,0,50,48V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,104,34Zm2,174a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM192,34H152a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,192,34Zm2,174a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M104,32H64A16,16,0,0,0,48,48V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32Zm0,176H64V48h40Z" />
    <path d="M192,32H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Zm0,176H152V48h40Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M104,36H64A12,12,0,0,0,52,48V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,104,36Zm4,172a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM192,36H152a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,192,36Zm4,172a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Z" />
  </>
);

const Columns = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Columns.displayName = "Columns";

export default Columns;
