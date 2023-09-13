"use client";
import { useState } from "react";

import {
  FormCheckbox,
  FormInput,
  FormLabel,
  FormSelect,
} from "@acme/components";
import { Client, ClientEmployee, Employee, ProjectType } from "@/xata";

interface ProjectFormFieldsProps {
  clients: Client[];
  employees: Employee[];
  projectTypes: ProjectType[];
  clientEmployees: ClientEmployee[];
}

export function ProjectFormFields({
  clients,
  employees,
  projectTypes,
  clientEmployees,
}: ProjectFormFieldsProps) {
  const [client, setClient] = useState<Client>(clients[0]);

  async function handleClientChange({ value }) {
    setClient(clients.find((c) => c.id === value));
  }

  return (
    <>
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
        <FormInput
          name="dockerNumber"
          type="text"
          placeholder={client.name.substring(0, 4).toLowerCase() + "000-name"}
        />
      </FormLabel>

      <FormLabel label="Project name:">
        <FormInput
          name="projectName"
          type="text"
          placeholder="Your project name"
        />
      </FormLabel>

      <FormLabel htmlFor="team" label="Team:" />
      <fieldset className="grid grid-cols-2 px-1">
        {employees.map((u) => (
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
    </>
  );
}
