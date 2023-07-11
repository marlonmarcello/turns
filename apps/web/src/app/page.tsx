import { ProjectForm } from "@/features/ProjectForm";

export const revalidate = 1;
export default async function Home() {
  const { clients, users, projectTypes, clientEmployees } = await fetch(
    "http://localhost:3000/api"
  ).then((d) => d.json());

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

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-lg">
        <ProjectForm
          clients={clients}
          users={users}
          projectTypes={projectTypes}
          clientEmployees={clientEmployees}
          onSubmit={handleOnSubmit}
        />
      </div>
    </main>
  );
}
