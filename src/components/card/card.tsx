import React from "react";

interface LCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export const LCard: React.FC<LCardProps> = ({
  title,
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        bg-white shadow-md rounded-lg p-md
        max-w-md
        ${className}
      `}
      {...props}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};
