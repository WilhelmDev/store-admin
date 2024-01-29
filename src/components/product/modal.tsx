import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'
import useStore from '../../hooks/useStore'
import { StoreContextProps } from '../../interfaces/store'

export default function ModalProduct() {
  
  const { dialogProduct, dialogTrigger, selectedProduct } = useStore() as StoreContextProps
  return (
    <Dialog open={dialogProduct} handler={dialogTrigger}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <div>
          {selectedProduct?.name}
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => dialogTrigger()}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => dialogTrigger()}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
  )
}
