import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShortUrl("");
    setCopied(false);
    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/create/`, { url });
      setShortUrl(data);
    } catch (err) {
      setShortUrl("");
      console.error("Error creating short URL:", err);
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    if (shortUrl) {
      try {
        await navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        setCopied(false);
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 bg-[color:var(--card)] p-4 rounded-xl shadow-lg border border-[color:var(--border)]">
      <input
        type="url"
        placeholder="Paste your long URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="w-full px-4 py-2 border border-[color:var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)] text-base bg-[color:var(--input)] placeholder:text-[color:var(--muted-foreground)] font-sans text-[color:var(--card-foreground)]"
      />
      <button
        type="submit"
        className="w-full py-2 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] rounded-md font-semibold text-base shadow-sm hover:bg-[color:var(--primary)]/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 mr-2 text-[color:var(--primary-foreground)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
        ) : (
          <span>Shorten URL</span>
        )}
      </button>
      {shortUrl && (
        <div className="mt-6 w-full flex flex-col items-center gap-2 animate-fade-in">
          <span className="text-xs font-medium text-[color:var(--muted-foreground)] mb-1">Your Short URL</span>
          <div className="w-full flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--popover)] border border-[color:var(--border)] shadow-sm text-[color:var(--popover-foreground)] font-semibold text-base tracking-tight">
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[color:var(--primary)] transition-colors break-all"
              >
                {shortUrl}
              </a>
            </span>
            <button
              onClick={handleCopy}
              type="button"
              className={`ml-2 px-4 py-2 rounded-lg font-semibold text-base shadow-sm focus:outline-none transition flex items-center justify-center border border-[color:var(--border)]
                ${copied ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]" : "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--primary)]/90"}`}
              aria-label="Copy short URL"
            >
              {copied ? (
                <>
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><rect x="3" y="3" width="13" height="13" rx="2" /></svg>
                  Copy Link
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default UrlForm;
