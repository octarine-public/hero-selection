import { Menu as MenuSDK } from "wrapper/Imports"
import { MENU_UPDATE_HERO } from "./Service/Menu"

export const CreateMenuHeroSelection = (icons?: string[], ...entryDeep: string[]) => {
	const Menu = MenuSDK.AddEntryDeep(entryDeep, icons)
	const State = Menu.AddToggle("State")
	const HeroAttribute = Menu.AddDropdown("Primary attribute hero", ["Strength", "Agility", "Intellect"])
	const HeroAttributeArray = Menu.AddImageSelector("Heroes", [])
	HeroAttribute.OnValue(async value => MENU_UPDATE_HERO.UpdateImageSelectorTree(value, HeroAttributeArray))
	return {
		Menu,
		State,
		HeroAttribute,
		HeroAttributeArray,
	}
}
MenuSDK.Localization.AddLocalizationUnit("russian", new Map([
	["Mid", "Мид"],
	["Jungle", "Лес"],
	["Easy", "Легкая"],
	["Hard", "Сложная"],
	["None", "Без выбора"],
	["Select lane", "Выберите лайн"],
	["Enemy jungle", "Вражеский лес"],
	["Auto Lane marker", "Авто Лайн маркер"],
]))
