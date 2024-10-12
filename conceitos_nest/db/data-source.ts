import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'db', // Nome do serviço do banco de dados no docker-compose.yml
  port: 5432,
  username: 'postgres',
  database: 'conceitos_nest',
  password: 'postgres',
  synchronize: false, // Sincroniza com o BD. Não deve ser usado em produção
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
