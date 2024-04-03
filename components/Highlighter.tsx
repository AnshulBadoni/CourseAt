
import { HighlighterProps } from "@/types"

const CustomButton = ({title,containerStyles}:HighlighterProps) => {
  return (
    <div
      className={`custom-btn ${containerStyles}`}
      >
        <span className={`flex-1`}>{title}</span>
      </div>
  )
}

export default CustomButton