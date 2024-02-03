import { MagnifyingGlassIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardHeader, Chip, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { billData } from "../variables";

export default function Workpeople() {

  const TABLE_HEAD = ["Nombre", "Apellido", "Estado", "Fecha de creación", "Opciones"];

  return (
    <Card className="h-full w-full px-2 pt-3" shadow={false}>
      <CardHeader floated={false} shadow={false} >
        <main>
          <section className=" flex flex-col md:flex-row md:justify-between items-center gap-4">
            <div>
              <Typography variant="h4">Trabajadores</Typography>
              <Typography className="font-normal" color="gray" variant="h6">Administra tus empleados</Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button className="flex items-center gap-3" size="sm" color="green" >
                <UserPlusIcon strokeWidth={2} className="h-5 w-5" /> Agregar Trabajador
              </Button>
            </div>
          </section>
        </main>
      </CardHeader>
      <CardBody className="overflow-auto">
      <table className="mt-4 w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head,) => (
                <th 
                key={head} 
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors rounded hover:bg-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {billData.map(({ user, date, online, org }, index) => {
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
                      {org}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={online ? "Activo" : "Inactivo"}
                        color={online ? "green" : "red"}
                      />
                    </div>
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
                    <div className="flex gap-2">
                      <Tooltip content="Ver Detalles">
                        <IconButton variant="text">
                          <MagnifyingGlassIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Eliminar Trabajador">
                        <IconButton variant="text" color="red">
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </div>
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
