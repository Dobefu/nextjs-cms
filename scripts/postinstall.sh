#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Get the directory of this script.
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$SCRIPT_DIR/.." || exit 1

# If the .env file doesn't exist, copy the example one.
if [ ! -f ".env" ]; then
  # Generate a random secret for Auth.js.
  AUTH_SECRET="$(openssl rand -base64 33 | sed 's/[\\&*./+!]/\\&/g')"

  # Create a .env file from the .env.example file.
  ENV="$(sed "s|^AUTH_SECRET=|AUTH_SECRET=\"$AUTH_SECRET\"|" .env.example)"
  echo "$ENV" > .env
fi
