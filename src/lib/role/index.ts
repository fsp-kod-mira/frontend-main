const dict = {
  unknown: "Неизвестно",
  loading: "Загрузка...",
  recruiter: "Рекрутер",
  hiring_manager: "Нанимающий менеджер",
  resource_manager: "Ресурсный менеджер",
};

export type Roles = keyof typeof dict;

export const getByName = (name: Roles) => {
  if (!Object.keys(dict).includes(name)) return dict["unknown"];
  return dict[name];
};
