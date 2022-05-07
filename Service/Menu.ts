import { Menu, UnitData } from "wrapper/Imports"

export class MENU_UPDATE_HERO {
	public static async UpdateImageSelectorTree(ID: Menu.Dropdown, ImageSelection: Menu.ImageSelector) {
		const heroes = [...(await UnitData.global_storage).entries()].filter(([x, z]) => z.ModelName !== ""
			&& x.includes("npc_dota_hero")
			&& z.AttributePrimary === ID.selected_id
			&& !z.ModelName.includes("dummy")
			&& !z.ModelName.includes("error"),
		).map(([x, data]) => {
			let str = "npc_dota_hero_" + data.ModelName
				.replace("models/heroes/", "")
				.replace(/\/.+/gm, "")
			switch (str) {
				case "npc_dota_hero_zeus": str = "npc_dota_hero_zuus"; break
				case "npc_dota_hero_shadowshaman": str = "npc_dota_hero_shadow_shaman"; break
				case "npc_dota_hero_winterwyvern": str = "npc_dota_hero_winter_wyvern"; break
				case "npc_dota_hero_witchdoctor": str = "npc_dota_hero_witch_doctor"; break
				case "npc_dota_hero_blood_seeker": str = "npc_dota_hero_bloodseeker"; break
				case "npc_dota_hero_drow": str = "npc_dota_hero_drow_ranger"; break
				case "npc_dota_hero_shadow_fiend": str = "npc_dota_hero_nevermore"; break
				case "npc_dota_hero_vengeful": str = "npc_dota_hero_vengefulspirit"; break
				case "npc_dota_hero_lanaya": str = "npc_dota_hero_templar_assassin"; break
				case "npc_dota_hero_gyro": str = "npc_dota_hero_gyrocopter"; break
				case "npc_dota_hero_nerubian_assassin": str = "npc_dota_hero_nyx_assassin"; break
				case "npc_dota_hero_siren": str = "npc_dota_hero_naga_siren"; break
				case "npc_dota_hero_rikimaru": str = "npc_dota_hero_riki"; break
				case "npc_dota_hero_wraith_king": str = "npc_dota_hero_skeleton_king"; break
				case "npc_dota_hero_nightstalker": str = "npc_dota_hero_night_stalker"; break
				case "npc_dota_hero_doom": str = "npc_dota_hero_doom_bringer"; break
				case "npc_dota_hero_treant_protector": str = "npc_dota_hero_treant"; break
				case "npc_dota_hero_tuskarr": str = "npc_dota_hero_tusk"; break
			}
			return str
		})

		ImageSelection.values = heroes
		ImageSelection.Update()
	}
}
