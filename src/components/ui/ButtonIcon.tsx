interface Props {
  children: any;
  textColor: string;
  color: string;
  text: string;
  onClick?: () => void;
}
const ButtonIcon = ({ children, textColor, color, text, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-x-1.5 rounded-md bg-${color}-200 px-2.5 py-1.5 text-sm font-semibold ${textColor} shadow-sm hover:bg-${color}-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-200`}
      onClick={onClick}>
      {children}
      {text}
    </button>
  );
};

export default ButtonIcon;
