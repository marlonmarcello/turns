import { ProjectForm } from "@/features/ProjectForm";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-lg">
        <ProjectForm />
      </div>
    </main>
  );
}
