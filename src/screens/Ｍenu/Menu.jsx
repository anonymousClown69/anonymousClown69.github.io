import React from "react";
import { Button } from "../../components/Button";
import { UserInterfaceCloseWrapper } from "../../components/UserInterfaceCloseWrapper";
import "./style.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="div-2">
        <div className="group">
          <div className="text-wrapper-3">About</div>
          <div className="text-wrapper-4">Home</div>
          <div className="text-wrapper-5">Staking</div>
          <Button
            className="button-instance"
            darkMode={false}
            divClassName="design-component-instance-node"
            iconPosition="no-icon"
            small
            style="primary"
            text="BUY NOW"
          />
        </div>
        <div className="overlap-group">
          <UserInterfaceCloseWrapper />
        </div>
      </div>
    </div>
  );
};
