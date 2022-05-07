import { EventsSDK } from "wrapper/Imports"
import { HERO_SELECTION } from "../../data"

EventsSDK.on("GameEnded", () => {
	HERO_SELECTION.Dispose()
})
