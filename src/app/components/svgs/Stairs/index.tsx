import { JSX } from "react";

const Stairs = (props: { className: string }): JSX.Element => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 101 102"
    >
      <path
        fill="#FFC70B"
        d="m75.213.864.161 25.097-25 .16.16 24.902-25 .16.16 25-24.999.16.16 24.999 99.998-.64-.055-8.61-.105-16.39-.48-74.998z"
      ></path>
    </svg>
  );
};

export default Stairs;
