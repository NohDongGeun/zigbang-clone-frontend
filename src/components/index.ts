import { fromPromise } from "@apollo/client";

// atoms
export { default as Button } from "./atoms/Button";
export { default as Heading } from "./atoms/Heading";
export { default as Icon } from "./atoms/Icon";
export { default as Input } from "./atoms/Input";
export { default as Label } from "./atoms/Label";
export { default as Text } from "./atoms/Text";
export { default as Img } from "./atoms/Img";
export { default as DetailItem } from "./atoms/DetailItem";
export { default as BackgroundImg } from "./atoms/BackgroundImg";
export { default as UseFormInput } from "./atoms/UseFormInput";
export { default as UseFormBtn } from "./atoms/UseFormBtn";
export { default as KakaoRoadview } from "./atoms/KakaoRoadview";
export { default as RoomImg } from "./atoms/RoomImg";
export { default as Loading } from "./atoms/Loading";

//molecules
export { default as Card } from "./molecules/Card";
export { default as ListHeader } from "./molecules/ListHeader";
export { default as Empty } from "./molecules/Empty";
export { default as ErrorMessage } from "./molecules/ErrorMessage";
export { default as MobileNav } from "./molecules/MobileNav";
export { default as ProfileBox } from "./molecules/ProfileBox";
export { default as UserNav } from "./molecules/UserNav";
export { default as RoomCard } from "./molecules/RoomCard";

//molecules/Agency
export { default as RegisterBtn } from "./molecules/Agency/RegisterBtn";
export { default as RegisterInput } from "./molecules/Agency/RegisterInput";
export { default as NotAgencyBox } from "./molecules/Agency/NotAgencyBox";
export { default as RegisterBox } from "./molecules/Agency/RegisterBox";
export { default as RegisterLabel } from "./molecules/Agency/RegisterLabel";
export { default as RegisterTextArea } from "./molecules/Agency/RegisterTextArea";
//molecules/Detail
export { default as DetailAgent } from "./molecules/Details/DetailAgent";
export { default as DetailBar } from "./molecules/Details/DetailBar";
export { default as DetailHeader } from "./molecules/Details/DetailHeader";
export { default as DetailExpenses } from "./molecules/Details/DetailExpenses";
export { default as DetailInfo } from "./molecules/Details/DetailInfo";
export { default as DetailOptions } from "./molecules/Details/DetailOptions";
export { default as DetailMap } from "./molecules/Details/DetailMap";
export { default as DetailText } from "./molecules/Details/DetailText";
export { default as DetailRoadview } from "./molecules/Details/DetailRoadview";
//molecules/Filter
export { default as FilterBox } from "./molecules/Filter/FilterBox";
export { default as FilterFixed } from "./molecules/Filter/FilterFixed";
export { default as FilterHeader } from "./molecules/Filter/FilterHeader";
export { default as FilterRange } from "./molecules/Filter/FilterRange";
export { default as FilterAlert } from "./molecules/Filter/FilterAlert";
//molecules/Auth
export { default as AuthForm } from "./molecules/Auth/AuthForm";
export { default as AuthInput } from "./molecules/Auth/AuthInput";
export { default as LoginButton } from "./molecules/LoginButton";
export { default as AuthLink } from "./molecules/Auth/AuthLink";
export { default as AuthBox } from "./molecules/Auth/AuthBox";
//organisms
export { default as Detail } from "./organisms/Detail";
export { default as Filter } from "./organisms/Filter";
export { default as Header } from "./organisms/Header";
export { default as List } from "./organisms/List";
export { default as Map } from "./organisms/Map";

//organisms/CreateRoom
export { default as RoomInfos } from "./organisms/CreateRoom/RoomInfos";
export { default as RoomOptions } from "./organisms/CreateRoom/RoomOptions";
export { default as RoomTexts } from "./organisms/CreateRoom/RoomTexts";
export { default as RoomLocation } from "./organisms/CreateRoom/RoomLocation";
export { default as RoomImgs } from "./organisms/CreateRoom/RoomImgs";

//templates
export { default as Main } from "./templates/Main";
export { default as LoginTemplate } from "./templates/LoginTemplate";
export { default as SignupTemplate } from "./templates/SignupTemplate";
export { default as AuthTemplate } from "./templates/AuthTemplate";
export { default as CreateRoomTemplate } from "./templates/CreateRoomTemplate";
export { default as UserProfileTemplate } from "./templates/UserProfileTemplate";
export { default as ModifyTemplate } from "./templates/ModifyTemplate";
