import React, { useEffect, useRef } from 'react'

function CustomSlider({
  min = 1,
  max = 30,
  value,
  onChange
}: {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null) // Reference to the slider track
  const thumbRef = useRef<HTMLDivElement>(null) // Reference to the thumb
  const isDraggingRef = useRef(false) // Ref to track dragging state

  // Calculate percentage position based on the value prop
  const percentage = ((value - min) / (max - min)) * 100

  // Updates the slider's position when the value changes
  useEffect(() => {
    if (trackRef.current) {
      const thumb = thumbRef.current
      if (!thumb) return
      const fill = trackRef.current.querySelector(
        '.slider-fill'
      ) as HTMLDivElement
      if (!fill) return
      // Update thumb position
      thumb.style.left = `calc(${percentage}% - 10px)`
      // Update fill width
      fill.style.width = `${percentage}%`
    }
  }, [percentage])

  // Handle the slider click to update the value
  const handleSliderClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const sliderRect = trackRef.current?.getBoundingClientRect()
    if (!sliderRect) return
    const clickX = e.clientX - sliderRect.left
    updateValueBasedOnPosition(clickX, sliderRect.width)
  }

  // Update the value based on click or drag position
  const updateValueBasedOnPosition = (position: number, width: number) => {
    const newPercentage = (position / width) * 100
    const newValue = Math.round((newPercentage / 100) * (max - min) + min)
    onChange(Math.min(max, Math.max(min, newValue)))
  }

  // Handle the drag functionality using pointer events
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    isDraggingRef.current = true
    // Capture the pointer to continue receiving events
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    e.preventDefault()
    const sliderRect = trackRef.current?.getBoundingClientRect()
    if (!sliderRect) return
    const newPosition = e.clientX - sliderRect.left
    updateValueBasedOnPosition(newPosition, sliderRect.width)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false
    // Release the pointer capture when dragging ends
    e.currentTarget.releasePointerCapture(e.pointerId)
  }

  return (
    <div className="flex w-full flex-col items-center gap-[32px]">
      <div className="text-center text-[28px] text-gray-900">{value}만원</div>
      {/* Slider Container */}
      <div
        ref={trackRef}
        className="relative h-3 w-3/4 cursor-pointer rounded-full bg-gray-200"
        onClick={handleSliderClick}
      >
        {/* Filled Slider Track */}
        <div
          className="slider-fill absolute left-0 top-0 h-3 rounded-full bg-primary"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Custom Thumb */}
        <div
          ref={thumbRef}
          className="thumb absolute top-[-4px] size-5 cursor-pointer rounded-full bg-primary"
          style={{ left: `calc(${percentage}% - 10px)`, touchAction: 'none' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        ></div>
      </div>

      {/* Min and Max Labels */}
      <div className="mt-2 flex w-3/4 justify-between text-gray-500">
        <span>{min}만원</span>
        <span>{max}만원</span>
      </div>
    </div>
  )
}

export default CustomSlider
