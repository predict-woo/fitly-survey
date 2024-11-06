import Radio from './Radio'

const RadioGroup = ({
  value,
  onChange,
  labels,
  multiSelect
}: {
  value: string[]
  onChange: (value: string[]) => void
  labels: string[]
  multiSelect: boolean
}) => {
  return (
    <div className="flex w-[340px] flex-col gap-2">
      {labels.map((label) => (
        <Radio
          key={label}
          label={label}
          selected={value.includes(label)}
          onClick={() => {
            if (value.includes(label)) {
              onChange(value.filter((v) => v !== label))
            } else {
              if (multiSelect) {
                onChange([...value, label])
              } else {
                onChange([label])
              }
            }
          }}
        />
      ))}
    </div>
  )
}

export default RadioGroup
