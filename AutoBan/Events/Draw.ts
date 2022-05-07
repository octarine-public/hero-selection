import { EventsSDK, GameState } from "wrapper/Imports"
import { HERO_SELECTION } from "../../data"
import { AutoBan } from "../menu"

EventsSDK.on("Draw", () => {
	if (!HERO_SELECTION.IsHeroSelection
		|| !AutoBan.State.value
		|| AutoBan.HeroAttributeArray.values.length === 0
		|| HERO_SELECTION.HERO_BANNED_OR_SELECTED.length !== 0
		|| HERO_SELECTION.Sleeper.Sleeping("AUTO_BAN_HERO"))
		return

	const heroes = AutoBan.HeroAttributeArray.values.filter(hero_name =>
		AutoBan.HeroAttributeArray.IsEnabled(hero_name))

	if (heroes.length === 0)
		return

	heroes.forEach(hero_name => {
		GameState.ExecuteCommand(`dota_captain_ban_hero ${hero_name}`)
		HERO_SELECTION.Sleeper.Sleep(500, "AUTO_BAN_HERO")
	})
})
