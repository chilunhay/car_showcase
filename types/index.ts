import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export type CarState = CarProps[] & { message?: string };

export interface SearchBarProps {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: React.Dispatch<React.SetStateAction<any>>;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (value: number) => void;
}

export interface SearchManuFacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}