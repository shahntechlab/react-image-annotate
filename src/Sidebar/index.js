// @flow

import React from "react"
import { makeStyles } from "@material-ui/styles"
import TaskDescription from "../TaskDescriptionSidebarBox"
import ImageSelector from "../ImageSelectorSidebarBox"
import RegionSelector from "../RegionSelectorSidebarBox"
import History from "../HistorySidebarBox"
import type { Region } from "../ImageCanvas/region-tools.js"

const useStyles = makeStyles({})

type Image = {
  name: string,
  src: string,
  thumbnailSrc?: string,
  regions?: Array<Region>
}
type Props = {
  taskDescription: string,
  images: Array<Image>,
  regions: Array<Region>,
  history: Array<{ state: Object, name: string, time: Date }>,
  onSelectRegion: Region => any,
  onSelectImage: Image => any,
  onChangeRegion: Region => any,
  onRestoreHistory: () => any
}

export default ({
  taskDescription,
  images,
  regions,
  history,
  onSelectRegion,
  onSelectImage,
  onChangeRegion,
  onRestoreHistory
}: Props) => {
  const classes = useStyles()

  return (
    <div>
      <TaskDescription description={taskDescription} />
      <ImageSelector images={images} />
      <RegionSelector
        regions={regions}
        onSelectRegion={onSelectRegion}
        onChangeRegion={onChangeRegion}
      />
      <History history={history} onRestoreHistory={onRestoreHistory} />
    </div>
  )
}
