#!/bin/bash
set -e

echo "Checking if database $POSTGRES_DB exists..."

# Check if the database exists
DB_EXISTS=$(psql -U "$POSTGRES_USER" -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$POSTGRES_DB'")

echo "Database exists status: $DB_EXISTS"

# Create the database if it does not exist
if [ "$DB_EXISTS" != "1" ]; then
    echo "Creating database $POSTGRES_DB..."
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "postgres" <<-EOSQL
        CREATE DATABASE $POSTGRES_DB;
    EOSQL
    echo "Database $POSTGRES_DB created."
else
    echo "Database $POSTGRES_DB already exists."
fi