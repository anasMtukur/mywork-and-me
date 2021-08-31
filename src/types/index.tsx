export type LabelValue = { label: string; value: string };
export interface MyInfo extends Record<string, any> {
  firstName: string;
  middleName: string;
  lastName: string;
  jobTitle: string;
  userDescription: string;
  preferredIndustries?: LabelValue[];
  preferredWorkLocation?: LabelValue[];
  languages?: LabelValue[];
  photoUrl?: string;
  country?: string;
  region?: string;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface UserSkill {
  title: string;
  competency: string;
  level: number;
}