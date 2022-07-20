import {IIconProps} from "native-base";

import AddIcon from "./AddIcon";
import AgenciesIcon from "./AgenciesIcon";
import AllIcon from "./AllIcon";
import BombIcon from "./BombIcon";
import BranchesIcon from "./BranchesIcon";
import CarIcon from "./CarIcon";
import CheckmarkCircleIcon from "./CheckmarkCircleIcon";
import CheckmarkIcon from "./CheckmarkIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import ChevronLeftIcon from "./ChevronLeftIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import ChevronUpIcon from "./ChevronUpIcon";
import CloseCircleIcon from "./CloseCircleIcon";
import CloseIcon from "./CloseIcon";
import CompaniesSolidIcon from "./CompaniesSolidIcon";
import CompaniesIcon from "./CompaniesIcon";
import ExclamationCircleIcon from "./ExclamationCircleIcon";
import LightbulbIcon from "./LightbulbIcon";
import LogsIcon from "./LogsIcon";
import MotorIcon from "./MotorIcon";
import MotorcycleIcon from "./MotorcycleIcon";
import PetIcon from "./PetIcon";
import SearchOutlineIcon from "./SearchOutlineIcon";
import SearchIcon from "./SearchIcon";
import SidebarIcon from "./SidebarIcon";
import UnknownIcon from "./UnknownIcon";
import UsersIcon from "./UsersIcon";

export function UIIcon(props: TUIIconProps) {
    switch (props.name) {
      case "add":
          return <AddIcon {...props} />;
      case "agencies":
          return <AgenciesIcon {...props} />;
      case "all":
          return <AllIcon {...props} />;
      case "bomb":
          return <BombIcon {...props} />;
      case "branches":
          return <BranchesIcon {...props} />;
      case "car":
          return <CarIcon {...props} />;
      case "checkmark-circle":
          return <CheckmarkCircleIcon {...props} />;
      case "checkmark":
          return <CheckmarkIcon {...props} />;
      case "chevron-down":
          return <ChevronDownIcon {...props} />;
      case "chevron-left":
          return <ChevronLeftIcon {...props} />;
      case "chevron-right":
          return <ChevronRightIcon {...props} />;
      case "chevron-up":
          return <ChevronUpIcon {...props} />;
      case "close-circle":
          return <CloseCircleIcon {...props} />;
      case "close":
          return <CloseIcon {...props} />;
      case "companies-solid":
          return <CompaniesSolidIcon {...props} />;
      case "companies":
          return <CompaniesIcon {...props} />;
      case "exclamation-circle":
          return <ExclamationCircleIcon {...props} />;
      case "lightbulb":
          return <LightbulbIcon {...props} />;
      case "logs":
          return <LogsIcon {...props} />;
      case "motor":
          return <MotorIcon {...props} />;
      case "motorcycle":
          return <MotorcycleIcon {...props} />;
      case "pet":
          return <PetIcon {...props} />;
      case "search-outline":
          return <SearchOutlineIcon {...props} />;
      case "search":
          return <SearchIcon {...props} />;
      case "sidebar":
          return <SidebarIcon {...props} />;
      case "unknown":
          return <UnknownIcon {...props} />;
      case "users":
          return <UsersIcon {...props} />;

        default:
            return <UnknownIcon {...props} />;
    }
};
export interface TUIIconProps extends IIconProps {
    name: TUIIconName
}
export type TUIIconName = 'add' | 'agencies' | 'all' | 'bomb' | 'branches' | 'car' | 'checkmark-circle' | 'checkmark' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'close-circle' | 'close' | 'companies-solid' | 'companies' | 'exclamation-circle' | 'lightbulb' | 'logs' | 'motor' | 'motorcycle' | 'pet' | 'search-outline' | 'search' | 'sidebar' | 'unknown' | 'users';
export const UIIcons=["Add","Agencies","All","Bomb","Branches","Car","CheckmarkCircle","Checkmark","ChevronDown","ChevronLeft","ChevronRight","ChevronUp","CloseCircle","Close","CompaniesSolid","Companies","ExclamationCircle","Lightbulb","Logs","Motor","Motorcycle","Pet","SearchOutline","Search","Sidebar","Unknown","Users"];
