import { useState, useEffect, useCallback } from "react";

import NavBar from "@/components/NavBar";
import Head from "next/head";
import Results from "@/components/Results";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<string[]>([]);

  const sendSearch = useCallback(async () => {
    setLoading(true);
    setError(false);
  
    const body = JSON.stringify({ query: search });
    const resp = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
  
    if (!resp.ok) {
      setError(true);
      console.error('Error fetching data');
    }
  
    const data = await resp.json();
    if (data.error) {
      setError(true);
      return;
    }

    setResults(data.usernames);
    setTimeout(() => setLoading(false), 2000);
  }, [search]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    
    if (e.key === "Enter") {
      // check if focus is on input
      const input = document.querySelector("input");
      let focus = false;
      if (input === document.activeElement) {
        input?.blur();
        focus = true;
      }
      
      // 
      if (focus) sendSearch();
    }
  }, [sendSearch]);

  useEffect(() => {
    // add event listener to window
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Head>
        <title>Uplodio - Influencer Search</title>
      </Head>
      <main className="relative flex flex-col items-center justify-center w-full md:w-3/4 py-12">
        <NavBar className="mt-6" search={search} setSearch={setSearch} />
        <Results className="mt-24 w-full md:w-2/3" usernames={results} error={error} loading={loading} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
