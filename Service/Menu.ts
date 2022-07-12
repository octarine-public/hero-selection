import { Menu, UnitData } from "wrapper/Imports"

export class MENU_UPDATE_HERO {

	public static async UpdateImageSelectorTree(ID: Menu.Dropdown, ImageSelection: Menu.ImageSelector) {

		const heroes = [...(await UnitData.global_storage).entries()]
			.filter(([name, data]) => this.IsValidName(name) && data.AttributePrimary === ID.selected_id).map(([name]) => name)

		ImageSelection.values = heroes
		await ImageSelection.Update()
	}

	private static IsValidName(name: string) {
		return name !== "npc_dota_hero_base" && name !== "npc_dota_hero_target_dummy" && name.startsWith("npc_dota_hero_")
	}
}
