import React, {FC, ReactNode} from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({children}) => {
  return (
    <div className="container p-4">
      <div className="col-md-4 offset-md-4">{children}</div>
    </div>
  );
};
