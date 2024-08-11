export const MenuIcon = ({ active }: { active: boolean }) => {
  const strokeColor = active ? "#EED3C1" : "white";
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="27.5" stroke={strokeColor} strokeWidth="5" />
      <line
        x1="18.5"
        y1="24.5"
        x2="41.5"
        y2="24.5"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="18.5"
        y1="30.5"
        x2="41.5"
        y2="30.5"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="18.5"
        y1="36.5"
        x2="41.5"
        y2="36.5"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
