import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// Receiving postition as props and display ToolTip using react-bootstrap/OverlayTrigger & ToolTip

function ToolTip({ position }) {
  return (
    <>
      <OverlayTrigger
        className="tooltip"
        placement={position}
        overlay={
          <Tooltip id={`tooltip-${position}`}>
            Thanks for Hovering, I am a Tooltip.
          </Tooltip>
        }
      >
        <Button variant="info">Hover on me !!</Button>
      </OverlayTrigger>
    </>
  );
}

export default ToolTip;
