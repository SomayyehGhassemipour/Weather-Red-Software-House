interface Props {
  classname: string;
  form?: string;
  type?: "submit" | "reset" | "button" | undefined;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  children?: JSX.Element | JSX.Element[] | string;
}
export const Button: React.FC<Props> = ({
  classname,
  form,
  type,
  children,
  clickHandler,
}) => {
  return (
    <button
      className={classname}
      form={form}
      onClick={clickHandler}
      type={type}
    >
      {children}
    </button>
  );
};
