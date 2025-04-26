import { useEffect, useState } from 'react';

const Flower = () => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prev) => (prev + 1) % 10);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const getPetalColor = (id: number) => {
    return id === currentId ? '#E79F59' : 'white';
  };

  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.1787 5.03755C60.1368 13.7307 59.7226 36.2304 60.9558 51.0785C61.145 53.3565 63.2699 54.9263 65.5506 55.0619C65.9232 55.084 66.2866 55.1152 66.6383 55.1534C69.007 55.4106 71.497 54.0836 71.9666 51.7487C74.9237 37.0472 76.2879 15.1004 71.4781 5.53236C70.611 3.80749 68.3907 3.54134 67.1787 5.03755Z"
        fill={getPetalColor(0)}
      />
      <path
        d="M38.2152 14.0372C37.1027 25.1201 46.4923 45.2872 54.6829 57.4269C57.974 54.829 61.971 53.7555 63.5582 53.5435C59.8851 38.9371 50.952 19.0457 42.329 12.2759C40.6755 10.9777 38.4274 11.9239 38.2152 14.0372Z"
        fill={getPetalColor(9)}
      />
      <path
        d="M12.0263 39.7989C17.412 50.0195 37.5027 59.5926 51.7036 64.081C52.7079 59.9698 55.1918 56.6095 56.3083 55.4432C44.4384 46.209 23.4507 35.103 13.7677 36.1452C12.0104 36.3344 11.1915 38.2147 12.0263 39.7989Z"
        fill={getPetalColor(8)}
      />
      <path
        d="M7.85001 77.9235C19.3018 83.3102 39.8151 77.5626 53.8745 72.2095C52.1826 68.3371 52.1197 64.1334 52.2997 62.5156C37.1859 62.6406 14.4097 65.9183 6.94702 73.6688C5.64549 75.0205 6.16065 77.1288 7.85001 77.9235Z"
        fill={getPetalColor(7)}
      />
      <path
        d="M104.855 17.282C93.7322 17.4048 79.0072 36.7819 70.7345 50.0006C69.5225 51.9372 70.245 54.4838 71.958 55.9839C72.2674 56.2548 72.5617 56.5277 72.8397 56.7984C74.5428 58.4564 77.296 58.9249 79.1137 57.4034C91.2278 47.2641 108.583 30.4822 107.452 19.6113C107.312 18.266 106.185 17.2674 104.855 17.282Z"
        fill={getPetalColor(1)}
      />
      <path
        d="M122.181 47.4127C112.44 43.124 86.9206 51.9178 74.0097 58.8729C76.1037 62.5233 76.688 66.6815 76.7184 68.3042C91.5805 66.4553 119.016 60.046 123.405 50.5407C123.963 49.3329 123.388 47.944 122.181 47.4127Z"
        fill={getPetalColor(2)}
      />
      <path
        d="M116.922 83.322C112.278 73.914 91.213 68.0172 77.5696 65.9768C77.0452 70.1572 75.0866 73.8507 74.1729 75.175C86.3423 82.4243 106.12 90.7334 115.606 86.8395C116.986 86.273 117.59 84.6745 116.922 83.322Z"
        fill={getPetalColor(3)}
      />
      <path
        d="M95.3788 113.544C97.8679 103.258 84.3653 83.6395 75.3738 74.0583C72.1402 77.0019 68.1494 78.7303 66.5582 79.2265C70.8924 92.0387 82.0305 112.535 92.2458 115.385C93.6224 115.769 95.0377 114.953 95.3788 113.544Z"
        fill={getPetalColor(4)}
      />
      <path
        d="M60.8806 123.614C67.5623 115.538 69.3965 90.5395 67.5771 77.7612C63.2639 78.2259 59.0292 77.2752 57.451 76.7417C53.6865 89.4264 50.5063 115.108 57.1178 123.588C58.0849 124.828 59.8812 124.822 60.8806 123.614Z"
        fill={getPetalColor(5)}
      />
      <path
        d="M25.5911 111.4C36.2433 110.058 51.6042 91.3373 59.4804 78.2877C55.6715 76.1006 52.9554 72.6463 52.0735 71.1925C39.9057 80.6218 23.6109 98.735 22.8632 108.809C22.7467 110.379 24.0551 111.594 25.5911 111.4Z"
        fill={getPetalColor(6)}
      />
      <ellipse cx="64.4543" cy="65.5502" fill="#FDEE7A" rx="15.8449" ry="16.1127" />
      <defs>
        <linearGradient
          id="a"
          x1="66.9516"
          x2="65.4331"
          y1="45.6862"
          y2="54.3283"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="55.6384"
          x2="58.2667"
          y1="46.828"
          y2="54.5754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="45.98"
          x2="52.7774"
          y1="55.2357"
          y2="59.6097"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="43.9792"
          x2="52.0345"
          y1="68.8176"
          y2="68.1466"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="79.2961"
          x2="73.7451"
          y1="49.5717"
          y2="55.0256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="84.7243"
          x2="76.4619"
          y1="61.3242"
          y2="62.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="83.6716"
          x2="76.9485"
          y1="73.722"
          y2="70.6772"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="75.1419"
          x2="71.7829"
          y1="84.1941"
          y2="77.4043"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="i"
          x1="61.2414"
          x2="62.6556"
          y1="86.2829"
          y2="78.4206"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="j"
          x1="49.3976"
          x2="55.4597"
          y1="81.4792"
          y2="76.0696"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Flower;
