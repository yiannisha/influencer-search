import React from 'react'

export interface SearchProps extends React.HTMLProps<HTMLDivElement> {
    search: string;
    setSearch: (search: string) => void;
}

export default function Search(props: SearchProps) {
    
    return (
        <div className={`w-full ${props.className}`}>
        <input
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none shadow-md"
            type="text"
            placeholder="Search for influencers..."
        />
        </div>
    )
}
