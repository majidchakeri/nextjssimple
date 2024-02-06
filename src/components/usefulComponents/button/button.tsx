import { ButtonProps } from "./buttonTypes";

const Button = ({ kind, shape, size, icon, ...props }: ButtonProps) => {
  let className = `button button-${kind}`;

  return kind == "primary" ? (
    <button
      className="btn bg-orange-500 hover:bg-orange-300 text-white"
      {...props}
    ></button>
  ) : kind == "secondary" ? (
    <button
      className="btn bg-blue-500 hover:bg-blue-300 text-white "
      {...props}
    ></button>
  ) : kind == "danger" ? (
    <button
      className="btn bg-red-500 hover:bg-red-300 text-white "
      {...props}
    ></button>
  ) : (
    <button
      className="btn bg-green-500 hover:bg-green-300 text-white "
      {...props}
    ></button>
  );
};

export default Button;
