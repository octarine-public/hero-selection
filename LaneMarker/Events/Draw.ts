import { EventsSDK, GameState, LocalPlayer, Team } from "wrapper/Imports"
import { HERO_SELECTION, LanePicker } from "../../data"
import { AutoLaneMarker, LaneMarkerState } from "../menu"

EventsSDK.on("Draw", () => {
	if (!HERO_SELECTION.IsHeroSelection || !AutoLaneMarker.State.value || HERO_SELECTION.PossibleHeroBool)
		return

	LaneMarker()

	AutoLaneMarker.HeroAttributeArray.values.forEach(hero_name => {
		if (!AutoLaneMarker.HeroAttributeArray.IsEnabled(hero_name))
			return
		hero_name = hero_name.replace("npc_dota_hero_", "")
		GameState.ExecuteCommand(`possible_hero ${hero_name}`)
	})

	HERO_SELECTION.PossibleHeroBool = true
})

function LaneMarker() {
	if (LaneMarkerState.selected_id === LanePicker.NONE)
		return

	const PlayerTeam = LocalPlayer!
	let positionId = LaneMarkerState.selected_id

	switch (positionId) {
		case LanePicker.EASY:
			positionId = PlayerTeam.Team !== Team.Dire
				? LanePicker.EASY
				: LanePicker.HARD
			break
		case LanePicker.HARD:
			positionId = PlayerTeam.Team !== Team.Dire
				? LanePicker.HARD
				: LanePicker.EASY
			break
		case LanePicker.JUNGLE:
			positionId = PlayerTeam.Team !== Team.Dire
				? LanePicker.JUNGLE
				: LanePicker.JUNGLE_ENEMY
			break
		case LanePicker.JUNGLE_ENEMY:
			positionId = PlayerTeam.Team !== Team.Dire
				? LanePicker.JUNGLE_ENEMY
				: LanePicker.JUNGLE
			break
	}

	GameState.ExecuteCommand("dota_select_starting_position " + positionId)
}
