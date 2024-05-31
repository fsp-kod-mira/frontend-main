const dict = {
  unknown: "Загрузка...",
  admin: "Рекрутер",
};

export type Roles = keyof typeof dict;

export const getByName = (name: Roles) => {
  if (!Object.keys(dict).includes(name)) return dict["unknown"];
  return dict[name];
};
