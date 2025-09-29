import UrlForm from "../components/UrlForm";

const HomePage = () => {
  return (
    <main className="dark min-h-screen flex items-center justify-center bg-[color:var(--background)]">
      <section className="w-full max-w-md mx-auto p-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-lg flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-[color:var(--card-foreground)] mb-2 tracking-tight">URL Shortener</h1>
        <p className="text-sm text-[color:var(--muted-foreground)] mb-2">Paste your long URL below to get a short link.</p>
        <UrlForm />
      </section>
    </main>
  );
};

export default HomePage;
