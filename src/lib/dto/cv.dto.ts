export type CVDto = {
  id: string;

  firstName: string;
  lastName: string;
  middleName: string;

  gender: string;
  birthday: string;

  phone: string;
  email: string;

  country: string;
  city: string;
  transfer: boolean;

  position: string;
  specializations: string[];
  employment: string[];
  schedule: string[];

  skills: string[];

  jobs: {
    company: string;
    position: string;
    description: string;
    start: number;
    end: number;
  }[];

  education: {
    years: string;
    name: string;
    description: string;
  }[];
};
