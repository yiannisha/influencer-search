import React, { useEffect } from 'react'
import InstagramEmbed from './InstagramEmbed';

interface ResultsProps extends React.HTMLProps<HTMLDivElement> {
    usernames: string[];
    loading: boolean;
    error: boolean;
}

export default function Results(props: ResultsProps) {
    const { usernames, loading, error } = props;
    const [results, setResults] = React.useState<JSX.Element[]>([]);
    
    useEffect(() => {
        setResults(usernames.slice(0, 5).map(
            (username, i) => <InstagramEmbed key={i} className="w-full md:w-2/3" username={username} />
        ));
    }, [usernames]);

    const viewMore = () => {
        results.push(...usernames.slice(5).map(
            (username, i) => <InstagramEmbed key={i} className="w-full md:w-2/3" username={username} />
        ));
        
        // re-render
        setResults([...results]);
    }

    return (
        <div className={`h-fit-content flex flex-col justify-center items-center ${props?.className}`}>
            {
                loading ? 
                <h1 className="text-xl text-gray-800">Loading...</h1>
                : error ?
                <h1 className="text-xl text-gray-800">Oops! Something went wrong... Try refreshing the page</h1>
                : results.length > 0 ?
                results
                : <h1 className="text-xl text-gray-800">Search for influencers by keywords</h1>
            }
            {
                results.length > 0 && results.length <= 5 && !loading &&
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={viewMore}>View more Results</button>
            }
        </div>
    )
}
