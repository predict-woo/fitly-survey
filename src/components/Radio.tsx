import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

function Radio({
  selected,
  onClick,
  label
}: {
  selected: boolean
  onClick: () => void
  label: string
}) {
  return (
    <div
      className="flex w-full cursor-pointer items-center rounded-lg bg-gray-50 p-3"
      onClick={onClick}
    >
      <div className="flex size-6 items-center justify-center rounded-full">
        <CheckCircleRoundedIcon
          className={`text-gray-300 ${selected ? 'text-primary' : ''}`}
        />
      </div>

      <span className="ml-3 text-lg text-gray-900">{label}</span>
    </div>
  )
}

export default Radio
