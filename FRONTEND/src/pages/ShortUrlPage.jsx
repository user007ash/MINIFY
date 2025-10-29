import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UrlForm from "../components/UrlForm";

function BackButton() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        // small delay to show spinner; navigate immediately is also fine
        setTimeout(() => navigate(-1), 120);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="px-4 py-2 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] rounded-md font-semibold text-sm shadow-sm hover:bg-[color:var(--primary)]/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            disabled={loading}
            aria-label="Go back"
        >
            {loading ? (
                <svg className="animate-spin h-5 w-5 text-[color:var(--primary-foreground)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
            ) : (
                <span>Back</span>
            )}
        </button>
    );
}

const ShortUrlPage = () => {
return (
    <main className="dark min-h-screen flex items-center justify-center bg-[color:var(--background)]">
        <section className="w-full max-w-md mx-auto p-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-lg flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-[color:var(--card-foreground)] mb-2 tracking-tight flex justify-between items-center">
                    <span>URL Shortener</span>
                    <span className="">
                        {/* Back button styled like the provided submit button; shows a brief spinner while navigating */}
                        <BackButton />
                    </span>
            </h1>
            <p className="text-sm text-[color:var(--muted-foreground)] mb-2">Paste your long URL below to get a short link.</p>
            <UrlForm />
        </section>
    </main>
);
};

export default ShortUrlPage;