import { useState } from "react";
import { Alert, Button } from "@material-tailwind/react";
import { IconWarning } from "./Icon";
 

interface Props {
  message: string;
  closeText: string
  handleClose: () => void;
}
export default function AlertClose({ message, closeText, handleClose}: Props) {
  const [open, setOpen] = useState(true);

  const handleCloseAlert = () => {
    setOpen(false);
    handleClose();
  };
 
  return (
    <>
      <Alert
        variant="gradient"
        open={open}
        icon={<IconWarning />}
        action={
          <Button
            variant="text"
            color="white"
            size="sm"
            className="!absolute top-3 right-3"
            onClick={() => handleCloseAlert()}
          >
            {closeText || "Cerrar"}
          </Button>
        }
      >
        {message}
      </Alert>
    </>
  );
}