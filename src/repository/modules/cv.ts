import { PaginatedResult } from "@/types/result.type";
import { MockModule } from "..";
import { CVDto } from "@/lib/dto/cv.dto";

export default class CVModule extends MockModule {
  async getAll(): Promise<PaginatedResult<CVDto>> {
    return {
      data: [],
      current: 1,
      total: 10,
    };
  }

  async get(id: string): Promise<CVDto> {
    return {
      id,
      firstName: "Константин",
      lastName: "Шмураков",
      middleName: "Русланович",
      gender: "Мужчина",
      birthday: "2005-05-02",

      phone: "79493432276",
      email: "kostya.shmurakov@mail.ru",

      country: "Россия",
      city: "Москва",
      transfer: true,

      specializations: ["Frontend-разработчик"],
      employment: ["полная занятость"],
      schedule: ["полный день"],

      skills: ["Java", "Python"],

      jobs: [
        {
          company: "Tinkoff",
          position: "Frontend-developer",
          description: `Разработка масштабируемого веб-приложения для управления складскими операциями в транспортной компании.

        Основные задачи и обязанности:
        Разработка и поддержка микросервисов, включая полный цикл от проектирования до развертывания и поддержки продакшн-окружения.
        Рефакторинг существующего кода для повышения эффективности, масштабируемости и поддерживаемости системы.
        Создание юнит и интеграционных тестов для обеспечения стабильности и качества продукта.
        Проведение код-ревью для улучшения качества кода и обмена знаниями внутри команды.
        
        Ключевые достижения:
        Реализация и оптимизация микросервиса для управления поступлением грузов, включая разработку API и баз данных для хранения информации о грузах.
        Разработка и интеграция сервиса уведомлений для информирования клиентов о статусах их запросов через API.
        Создание и поддержка микросервиса каталога складских позиций, управление каталогом товаров.
        
        Java 11, Spring, Kafka, CI/CD, PostgreSQL, Jenkins,Grafana, Git, микросервисы`,
          start: new Date("2017-12-01").getTime(),
          end: new Date("2022-12-01").getTime(),
        },
      ],
      education: [
        {
          years: "2024",
          name: "Донецкий национальный технический университет, Донецк",
          description: "",
        },
      ],
    };
  }
}