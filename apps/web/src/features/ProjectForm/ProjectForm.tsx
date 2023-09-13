import { getXataClient } from "@/xata";
import { Button } from "@acme/components";
import { ProjectFormFields } from "./ProjectFormFields";

const xata = getXataClient();

// Or alternatively provide a custom function:
function isFulfilled<T>(
  val: PromiseSettledResult<T>
): val is PromiseFulfilledResult<T> {
  return val.status === "fulfilled";
}

export async function ProjectForm() {
  const [clients, employees, projectTypes, clientEmployees] =
    await Promise.allSettled([
      xata.db.client.select(["id", "name"]).getAll(),
      xata.db.employee.select(["id", "name", "role.name"]).getAll(),
      xata.db.project_type.select(["id", "name"]).getAll(),
      xata.db.client_employee.select(["id", "name", "client.id"]).getAll(),
    ])
      .then((results) => results.filter(isFulfilled))
      .then((all) => all.map(({ value }) => value));

  async function handleOnSubmit(data: FormData) {
    "use server";

    const projects: Project = [...new Map(data.entries())].reduce(
      (acc, [key]) => {
        const value = data.getAll(key);
        acc[key] = value.length > 1 ? value : value[0];
        return acc;
      },
      {}
    );

    console.log(projects);
  }

  console.log([clients, employees, projectTypes, clientEmployees]);

  return (
    <form
      action={handleOnSubmit}
      className="block w-full rounded-md border border-gray-800 p-4 dark:border-gray-600"
    >
      <ProjectFormFields
        clients={clients}
        employees={employees}
        projectTypes={projectTypes}
        clientEmployees={clientEmployees}
      />

      <div className="text-right">
        <Button type="submit" variant="success">
          Go!
        </Button>
      </div>
    </form>
  );
}
