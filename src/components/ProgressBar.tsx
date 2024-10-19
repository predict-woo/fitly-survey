const LoadingBar = ({ length, index }: { length: number; index: number }) => {
  return (
    <div className="flex h-[32px] w-full items-center justify-center px-10">
      <div className="relative h-[12px] w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-primary"
          style={{ width: `${(index / length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default LoadingBar
