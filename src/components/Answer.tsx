const Answer = ({
  value,
  onChange,
  placeholder,
  suffix
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
  suffix?: string
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        {/* Container for the auto-resizing input */}
        <div className="relative inline-block">
          {/* Hidden span that mirrors the input content */}
          <span
            className="invisible inline-block h-9 whitespace-pre px-2 text-[20px] leading-[20px]"
            aria-hidden="true"
          >
            {value || placeholder}
          </span>
          {/* Input field positioned over the hidden span */}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="absolute inset-0 h-9 bg-transparent px-2 text-center text-[20px] leading-[20px] text-black outline-none placeholder:text-gray-400"
          />
        </div>
        {/* Suffix displayed after the input */}
        {value && suffix && (
          <span className="ml-2 text-[20px] text-black">{suffix}</span>
        )}
      </div>
      <div
        className="mt-2 w-36 border"
        style={{ borderColor: '#0B00E2' }}
      ></div>
    </div>
  )
}

export default Answer
