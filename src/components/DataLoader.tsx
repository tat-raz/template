import React, { useState, useEffect } from "react";
import "../styles/DataLoader.css";

interface DataLoaderProps {
  apiUrl: string;
}

interface ApiData {
  id: number;
  title: string;
}

const DataLoader: React.FC<DataLoaderProps> = ({ apiUrl }) => {
  const [data, setData] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response = await fetch(apiUrl);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const jsonData: ApiData[] = await response.json();
        setData(jsonData.slice(0, 5));
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) return <div aria-live="polite">Loading...</div>;
  if (error) return <div role="alert">Error: {error}</div>;

  return (
    <ul className="data-list">
      {data.map((item: ApiData) => (
        <li key={item.id} className="data-list__item">
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default DataLoader;
