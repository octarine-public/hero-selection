import { CreateMenuHeroSelection } from "../menu"
const Lane: string[] = ["None", "Hard", "Mid", "Easy", "Jungle", "Enemy jungle"]
export const AutoLaneMarker = CreateMenuHeroSelection(["panorama/images/hud/reborn/icon_magic_resist_psd.vtex_c"], "Utility", "Auto Lane marker")
export const LaneMarkerState = AutoLaneMarker.Menu.AddDropdown("Select lane", Lane)
