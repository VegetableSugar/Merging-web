import { Icon } from 'types/component';

function TwitterIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 25"
      style={{ flexShrink: 0 }}
    >
      <path
        fill="#F0F2F0"
        d="M17.48 2.51H7.2a4.869 4.869 0 00-4.86 4.867v10.295a4.869 4.869 0 004.86 4.867h10.28c2.68 0 4.86-2.184 4.86-4.867V7.377a4.869 4.869 0 00-4.86-4.867zm-.35 6.88c.62 2.443-.07 5.007-1.83 6.58-2.26 2.022-5.93 2.112-8.62.01.2.03.38.04.54.03 1.27-.05 2.14-1.062 2.41-1.403-.47-.41-1.2-1.131-1.71-2.243-.72-1.542-.65-2.994-.53-3.816.03-.16.23-.22.35-.09.37.421.97.992 1.85 1.402.95.441 1.81.521 2.3.521-.03-1.192.68-2.263 1.75-2.674.94-.37 2.03-.16 2.8.541.52-.02 1.04-.03 1.56-.05-.29.4-.58.791-.87 1.192z"
      ></path>
    </svg>
  );
}

export default TwitterIcon;