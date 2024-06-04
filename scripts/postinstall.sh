#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Get the directory of this script.
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$SCRIPT_DIR/.." || exit 1

# If the .env file doesn't exist, copy the example one.
if [ ! -f ".env" ]; then
  cp .env.example .env
fi
