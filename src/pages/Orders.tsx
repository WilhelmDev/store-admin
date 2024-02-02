import { DocumentPlusIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardHeader, Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react"

export const Bills = () => {

  const TABS = [
    {
      label: "Ventas",
      value: "sell",
    },
    {
      label: "Compras",
      value: "buy",
    },
    {
      label: "Todo",
      value: "all",
    },
  ];

  return (
    <Card className="h-full w-full px-2 pt-3" shadow={false}>
      <CardHeader floated={false} shadow={false} >
        <main>
          <section className="mb-4 flex flex-col md:flex-row md:justify-between items-center gap-4">
            <div>
              <Typography variant="h4">Facturas</Typography>
              <Typography className="font-normal" color="gray" variant="h6">Administra tus facturas y mantente al dia</Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button className="flex items-center gap-3" size="sm" color="green" >
                <ShoppingCartIcon strokeWidth={2} className="h-5 w-5" /> Registrar Venta
              </Button>
              <Button className="flex items-center gap-3" size="sm" color="yellow" >
                <DocumentPlusIcon strokeWidth={2} className="h-5 w-5" /> Registrar Ingreso
              </Button>
            </div>
          </section>
          <section className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Tabs value={'sell'}>
              <TabsHeader className="">
                { TABS.map(({label, value}) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </section>
        </main>
      </CardHeader>
    </Card>
  )
}
