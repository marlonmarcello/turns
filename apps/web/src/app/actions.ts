"use server";

export async function handleOnSubmit(data: FormData) {
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
