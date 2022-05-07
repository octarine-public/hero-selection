import { EventsSDK, GameState, PlayerResource, UnitData } from "wrapper/Imports"
import { HERO_SELECTION } from "../../data"
import { AutoPick } from "../menu"

EventsSDK.on("Draw", async () => {
	if (!HERO_SELECTION.IsHeroSelection || !AutoPick.State.value || AutoPick.HeroAttributeArray.values.length === 0)
		return

	PlayerResource!.PlayerTeamData.forEach(player => {
		if (player.SelectedHeroID === -1 || HERO_SELECTION.HERO_BANNED_OR_SELECTED.includes(player.SelectedHeroID))
			return
		HERO_SELECTION
			.HERO_BANNED_OR_SELECTED
			.push(player.SelectedHeroID)
	})

	for (const hero_name of AutoPick.HeroAttributeArray.values) {
		const heroId = await UnitData.GetHeroID(hero_name)
		if (!AutoPick.HeroAttributeArray.IsEnabled(hero_name) || HERO_SELECTION.HERO_BANNED_OR_SELECTED.includes(heroId))
			continue
		if (HERO_SELECTION.Sleeper.Sleeping(`AUTO_PICK_HERO_${hero_name}`))
			continue
		GameState.ExecuteCommand(`dota_select_hero ${hero_name}`)
		HERO_SELECTION.Sleeper.Sleep(30, `AUTO_PICK_HERO_${hero_name}`)
	}
})
