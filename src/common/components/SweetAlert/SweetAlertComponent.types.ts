export type ISweetAlertProps = {
  title: string;
  severity: "success" | "warning" | "info";
  onConfirm: () => void;
};
