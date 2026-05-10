#!/bin/bash

# Master Demo Script for IS219 Projects
# Projects: Portfolio Site, Financial Advisor V2, Security Project

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${BLUE}=====================================================${NC}"
echo -e "${BLUE}       Starting All Demo Sites (IS219)               ${NC}"
echo -e "${BLUE}=====================================================${NC}"

# Function to handle cleanup on exit
cleanup() {
    echo -e "\n${BLUE}Stopping all servers...${NC}"
    # Kill all background processes started by this script
    pkill -P $$
    exit
}

trap cleanup SIGINT SIGTERM

# 1. Start Portfolio Site (Port 3001)
echo -e "${GREEN}-> Starting Portfolio Site on http://localhost:3001...${NC}"
cd portfolioSite/portfolio-site
npm run dev &
CD_PORTFOLIO=$!
cd ../..

# 2. Start Financial Advisor V2 (Port 3002)
echo -e "${PURPLE}-> Starting Financial Advisor V2 on http://localhost:3002...${NC}"
cd financial_advisorV2
./start.sh &
CD_FINANCIAL=$!
cd ..

# 3. Start Security Project (Port 3003 UI, 8001 API)
echo -e "${BLUE}-> Starting Security Project on http://localhost:3003...${NC}"
cd securityProject
./run.sh &
CD_SECURITY=$!
cd ..

echo -e "${GREEN}=====================================================${NC}"
echo -e "${GREEN} All servers are launching!                          ${NC}"
echo -e "${GREEN} - Portfolio Site:    http://localhost:3001          ${NC}"
echo -e "${GREEN} - Financial Advisor: http://localhost:3002          ${NC}"
echo -e "${GREEN} - Security Project:  http://localhost:3003          ${NC}"
echo -e "${GREEN}=====================================================${NC}"
echo -e "Press Ctrl+C to stop all servers."

# Wait for all background processes
wait
