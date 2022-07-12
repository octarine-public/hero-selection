import { Menu, UnitData } from "wrapper/Imports"

export class MENU_UPDATE_HERO {

	public static async UpdateImageSelectorTree(ID: Menu.Dropdown, ImageSelection: Menu.ImageSelector) {
		const heroes = [...(await UnitData.global_storage).keys()].filter(unitName => unitName !== "npc_dota_hero_base"
			&& unitName !== "npc_dota_hero_target_dummy"
			&& unitName.startsWith("npc_dota_hero_"))
		ImageSelection.values = heroes
		await ImageSelection.Update()
	}
}
