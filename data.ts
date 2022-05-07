import { DOTAGameUIState_t, DOTA_GameState, GameRules, GameSleeper, GameState, LocalPlayer, Menu as MenuSDK, PlayerResource } from "wrapper/Imports"

export enum LanePicker {
	NONE = 0,
	HARD,
	MID,
	EASY,
	JUNGLE,
	JUNGLE_ENEMY,
}

export class HERO_SELECTION {

	public static Sleeper = new GameSleeper()
	public static PossibleHeroBool: boolean = false
	public static HERO_BANNED_OR_SELECTED: number[] = []

	public static get IsHeroSelection() {
		return GameRules !== undefined
			&& PlayerResource !== undefined
			&& GameState.IsConnected
			&& LocalPlayer !== undefined
			&& !LocalPlayer.IsSpectator
			&& GameState.UIState === DOTAGameUIState_t.DOTA_GAME_UI_DOTA_INGAME
			&& GameRules.GameState !== DOTA_GameState.DOTA_GAMERULES_STATE_POST_GAME
			&& GameRules.GameState !== DOTA_GameState.DOTA_GAMERULES_STATE_TEAM_SHOWCASE
			&& GameRules.GameState !== DOTA_GameState.DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD
			&& (GameRules.GameState === DOTA_GameState.DOTA_GAMERULES_STATE_HERO_SELECTION || !GameRules.IsInGame)
	}

	public static get Language() {
		return new Map([
			["Heroes", "Герои"],
			["Strength", "Сила"],
			["Agility", "Ловкость"],
			["Auto Pick", "Авто Пик"],
			["Auto Ban", "Авто Бан"],
			["Intellect", "Интеллект"],
			["Primary attribute hero", "Главный атрибут героя"],
		])
	}

	public static PossibleHeroBoolReset = () => {
		if (HERO_SELECTION.PossibleHeroBool)
			HERO_SELECTION.PossibleHeroBool = false
		if (HERO_SELECTION.Sleeper.Sleeping("LANE_MARKER"))
			HERO_SELECTION.Sleeper.ResetKey("LANE_MARKER")
	}

	public static Dispose() {
		this.Sleeper.FullReset()
		this.PossibleHeroBool = false
		this.HERO_BANNED_OR_SELECTED = []
	}
}

MenuSDK.Localization.AddLocalizationUnit("russian", HERO_SELECTION.Language)
