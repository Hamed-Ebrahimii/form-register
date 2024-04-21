const Search = ({ onChange, value }: { onChange: (value: string) => void, value: string }) => {
    return (
       
            <input type="text" className="input input-bordered input-sm w-full max-w-xs" value={value} placeholder="search" onChange={(e) => onChange(e.target.value)} />
           
    )
}
export default Search