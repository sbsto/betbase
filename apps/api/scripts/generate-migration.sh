#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide the service name."
  exit 1
fi

# Check if a migration name was provided
if [ -z "$2" ]; then
  echo "Please provide a migration name."
  exit 1
fi

# Get the migration name and append .up
migration_name="$2.up"

# Run the Drizzle migration command
npx drizzle-kit generate --config ./"$1"/drizzle.config.ts --name "$migration_name"
