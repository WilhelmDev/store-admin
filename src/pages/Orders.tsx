import { ChevronUpDownIcon, DocumentMagnifyingGlassIcon, DocumentPlusIcon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardHeader, Chip, IconButton, Input, Tab, Tabs, TabsHeader, Tooltip, Typography } from "@material-tailwind/react"
import { billData } from "../variables";

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

  const TABLE_HEAD = ["Encargado", "Fecha", "Tipo", "Total", "Opciones"];

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
            <div className="w-full md:w-72">
              <Input
                crossOrigin={undefined}
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </section>
        </main>
      </CardHeader>
      <CardBody className=" overflow-auto ">
        <table className="mt-4 w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th 
                key={head} 
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors rounded hover:bg-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {billData.map(({ user, type, date }, index) => {
              const isLast = index === billData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={type === 'sell' ? "Venta" : "Ingreso"}
                        color={type === 'sell' ? "green" : "yellow"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      100$
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Ver Detalles">
                      <IconButton variant="text">
                        <DocumentMagnifyingGlassIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
        </table>
      </CardBody>
    </Card>
  )
}
