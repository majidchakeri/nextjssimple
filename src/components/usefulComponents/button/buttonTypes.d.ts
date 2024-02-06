export type ButtonTypes = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
};

export type ButtonShape = {
  primary: string;
  dashed: string;
  circle: string;
  round: string;
  text: string;
  link: string;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  kind: "primary" | "secondary" | "danger" | "success";
  shape: "primary" | "dashed" | "circle" | "round" | "text" | "link";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
};
