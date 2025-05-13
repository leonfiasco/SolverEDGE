import { JSX } from "react";

const Triangle = (props: { className: string }): JSX.Element => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      viewBox="0 0 546 546"
    >
      <path fill="url(#pattern0_8_41)" d="M0 0h546v546H0z"></path>
      <defs>
        <pattern
          id="pattern0_8_41"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        ></pattern>
      </defs>
    </svg>
  );
};

export default Triangle;
