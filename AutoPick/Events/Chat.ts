import { DOTA_CHAT_MESSAGE, EventsSDK } from "wrapper/Imports"
import { HERO_SELECTION } from "../../data"

EventsSDK.on("ChatEvent", (type, value) => {
	if (type !== DOTA_CHAT_MESSAGE.CHAT_MESSAGE_HERO_BANNED)
		return

	HERO_SELECTION
		.HERO_BANNED_OR_SELECTED
		.push(value)
})
