import { Icon } from 'types/component';

function AppleIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 41 40"
      style={{ flexShrink: 0 }}
    >
      <path
        fill={props.color}
        d="M30.197 21.13a8.146 8.146 0 013.848-6.779 8.373 8.373 0 00-6.517-3.523c-2.742-.288-5.4 1.64-6.797 1.64-1.424 0-3.576-1.611-5.892-1.564a8.75 8.75 0 00-7.303 4.454c-3.158 5.468-.803 13.503 2.222 17.922 1.514 2.164 3.282 4.581 5.597 4.495 2.265-.093 3.11-1.444 5.844-1.444 2.709 0 3.502 1.444 5.864 1.39 2.43-.04 3.961-2.174 5.421-4.358a17.9 17.9 0 002.48-5.05c-2.856-1.207-4.764-4.082-4.767-7.182zM25.737 7.922a7.955 7.955 0 001.82-5.7 8.095 8.095 0 00-5.238 2.71 7.639 7.639 0 00-1.867 5.488 6.771 6.771 0 005.285-2.498z"
      ></path>
    </svg>
  );
}

export default AppleIcon;
