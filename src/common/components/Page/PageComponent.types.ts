import React from "react";

export interface IPageProps extends React.HTMLAttributes<HTMLDivElement> {
  showHeaderActions: boolean;
  title: string;
  hideBack?: boolean;
  actionEdit?: boolean;
  actionSave?: boolean;
  actionNew?: boolean;
  onSubmit?: () => void;
  handleEdit?: () => void;
  handleNew?: () => void;
  handleGoBack?: () => void;
  actionItems?: React.ReactNode;
}
