const LoadingBar = ({ length, index }: { length: number; index: number }) => {
  return (
    <div className="flex h-[28px] w-full items-center justify-center p-[10px]">
      <div className="relative h-[8px] w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-primary"
          style={{ width: `${(index / length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default LoadingBar
