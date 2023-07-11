"use client";

import { useState } from "react";
import {
  Button,
  FormCheckbox,
  FormInput,
  FormLabel,
  FormSelect,
} from "@acme/components";

interface ProjectFormProps {
  onSubmit: (data: FormData) => void;
  projectTypes: ProjectType[];
  clients: Client[];
  users: User[];
  clientEmployees: ClientEmployee[];
}

export function ProjectForm({
  onSubmit,
  projectTypes,
  clients,
  users,
  clientEmployees,
}: ProjectFormProps) {
  const [client, setClient] = useState(clients[0]);

  const handleClientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const client = clients.find((c) => c.id === e.target.value);
    if (client) setClient(client);
  };

  return (
    <form
      action={onSubmit}
      className="block w-full rounded-md border border-gray-800 p-4 dark:border-gray-600"
    >
      <FormLabel label="Type of project:">
        <FormSelect
          name="projectType"
          options={projectTypes.map((p) => ({
            label: p.name,
            value: p.id,
          }))}
        />
      </FormLabel>

      <FormLabel label="Client:">
        <FormSelect
          name="client"
          options={clients.map((c) => ({ value: c.id, label: c.name }))}
          onChange={handleClientChange}
        />
      </FormLabel>

      <FormLabel label="Docket number:">
        <FormInput name="dockerNumber" type="text" placeholder="pokexxx" />
      </FormLabel>

      <FormLabel label="Project name:">
        <FormInput
          name="projectName"
          type="text"
          placeholder="Mario Campaign"
        />
      </FormLabel>

      <FormLabel htmlFor="team" label="Team:" />
      <fieldset className="grid grid-cols-2 px-1">
        {users.map((u) => (
          <FormCheckbox
            name="team"
            key={u.id}
            value={u.id}
            caption={u.role.name}
          >
            {u.name}
          </FormCheckbox>
        ))}
      </fieldset>

      <FormLabel label="Client team:" />
      <fieldset className="grid grid-cols-2 px-1">
        {clientEmployees
          .filter((e) => e.client.id === client.id)
          .map((e) => (
            <FormCheckbox name="clientTeam" key={e.id} value={e.id}>
              {e.name}
            </FormCheckbox>
          ))}
      </fieldset>

      <FormLabel label="Start date:">
        <FormInput name="startDate" type="date" defaultValue={"2023-06-20"} />
      </FormLabel>

      <FormLabel label="End date:">
        <FormInput name="endDate" type="date" defaultValue={"2023-07-20"} />
      </FormLabel>

      <div className="text-right">
        <Button type="submit" variant="success">
          Go!
        </Button>
      </div>
    </form>
  );
}
