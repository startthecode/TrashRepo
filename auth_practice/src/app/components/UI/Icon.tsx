const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  ...props
}: {
  name: string;
  size?: number;
  color?: string;
} & React.HTMLAttributes<HTMLSpanElement>) => (
  <span {...props}>
    <svg width={size} height={size} aria-hidden="true" color={color}>
      <use href={`/icons/icons_out_line.svg#${name}`} />
    </svg>
  </span>
);

export default Icon;
