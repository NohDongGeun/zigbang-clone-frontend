import {
  RiHomeLine,
  RiHomeHeartLine,
  RiTaskLine,
  RiDashboardLine,
} from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";

export const USER_NAV = [
  { name: "방 찾기", url: "/room", Component: RiHomeLine },
  { name: "찜한 매물", url: "/my/rooms", Component: RiHomeHeartLine },
  { name: "내 정보", url: "/my/profile", Component: FiUser },
  { name: "중개사 페이지로 이동", url: "/agency", Component: RiTaskLine },
];

export const AGENCY_NAV = [
  { name: "매물관리", url: "/agency", Component: RiTaskLine },
  { name: "매물등록", url: "/agency/create-room", Component: RiDashboardLine },
  { name: "중개사 페이지 나가기", url: "/room", Component: RiHomeLine },
];
