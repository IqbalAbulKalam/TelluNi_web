import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
      {...props}
    >
      <g className="fill-current">
        <path d="M50,5A45,45,0,1,1,5,50,45,45,0,0,1,50,5M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z" />
        <path d="M50 25 L 25 50 L 50 75 L 75 50 Z" />
      </g>
    </svg>
  );
}
