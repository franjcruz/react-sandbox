import { FC } from "react"

export interface GameboardsListProps {
}

export const GameboardsList: FC<GameboardsListProps> = () => {
  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
      GameboardsList
    </div>
  )
}