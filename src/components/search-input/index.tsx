interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  return (
    <div className="mt-24 mb-8 content-search">
      <input
        type="text"
        placeholder="Search Anime and more..."
        className="w-full p-4 bg-gray-100 rounded"
        onChange={onChange}
      />
    </div>
  );
}
