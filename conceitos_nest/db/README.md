## Running migrations

```bash
docker compose exec app npm run migration:generate -- ./db/migrations/<migration-name>
```

> ./db/migrations is the path where the migrations are going to be created within the app.

## Applying the migration

```bash
docker compose exec app npm run migration:run
```
