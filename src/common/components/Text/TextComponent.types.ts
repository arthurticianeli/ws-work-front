export interface ITextProps extends React.HTMLAttributes<HTMLSpanElement> {
  id?: string;
  className?: string;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
  fontStyle?: "normal" | "italic" | "oblique" | "initial" | "inherit";
  maxWidth?: string | number;
  weight?:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "initial"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}
