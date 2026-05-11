#!/usr/bin/env bash

# Master Demo Script for IS219 Projects
# Projects: Portfolio Site, Financial Advisor V2, Security Project
set -u

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
RED='\033[0;31m'
NC='\033[0m' # No Color

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IS219_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"

declare -a SERVER_PIDS=()

echo -e "${BLUE}=====================================================${NC}"
echo -e "${BLUE}       Starting All Demo Sites (IS219)               ${NC}"
echo -e "${BLUE}=====================================================${NC}"

cleanup() {
    echo -e "\n${BLUE}Stopping all servers...${NC}"

    for pid in "${SERVER_PIDS[@]}"; do
        if kill -0 "$pid" 2>/dev/null; then
            kill -- "-$pid" 2>/dev/null || kill "$pid" 2>/dev/null || true
        fi
    done

    wait 2>/dev/null || true
}

trap 'cleanup; exit 130' SIGINT
trap 'cleanup; exit 143' SIGTERM
trap cleanup EXIT

start_server() {
    local name="$1"
    local color="$2"
    local dir="$3"
    local command="$4"
    local url="$5"

    if [ ! -d "$dir" ]; then
        echo -e "${RED}Error: $name directory not found: $dir${NC}"
        exit 1
    fi

    echo -e "${color}-> Starting $name on $url...${NC}"
    setsid bash -lc "cd \"$dir\" && $command" &
    SERVER_PIDS+=("$!")
}

# 1. Start Portfolio Site (Port 3001)
start_server \
    "Portfolio Site" \
    "$GREEN" \
    "$SCRIPT_DIR" \
    "npm run dev" \
    "http://localhost:3001"

# 2. Start Financial Advisor V2 (Port 3002)
start_server \
    "Financial Advisor V2" \
    "$PURPLE" \
    "$IS219_DIR/financial_advisorV2" \
    "./start.sh" \
    "http://localhost:3002"

# 3. Start Security Project (Port 3003 UI, 8001 API)
start_server \
    "Security Project" \
    "$BLUE" \
    "$IS219_DIR/securityProject" \
    "./run.sh" \
    "http://localhost:3003"

echo -e "${GREEN}=====================================================${NC}"
echo -e "${GREEN} All servers are launching!                          ${NC}"
echo -e "${GREEN} - Portfolio Site:    http://localhost:3001          ${NC}"
echo -e "${GREEN} - Financial Advisor: http://localhost:3002          ${NC}"
echo -e "${GREEN} - Security Project:  http://localhost:3003          ${NC}"
echo -e "${GREEN}=====================================================${NC}"
echo -e "Press Ctrl+C to stop all servers."

# Wait for all background processes
wait
