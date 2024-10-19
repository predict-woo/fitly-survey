const Answer = ({
  value,
  onChange,
  placeholder
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
}) => {
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent text-center text-[20px] text-black outline-none placeholder:text-gray-400"
      />
      <div
        className="mt-2 w-36 border"
        style={{ borderColor: '#0B00E2' }}
      ></div>
    </div>
  )
}

export default Answer
