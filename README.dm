# Navigate to project root
cd C:\DataBaseProjectForHourseRacing

# Install backend dependencies
cd backend
npm install

# Start backend in a new command prompt window
start cmd /k "cd /d C:\DataBaseProjectForHourseRacing\backend && npm start"

# Install frontend dependencies
cd ..\client\horseRacingFrontEnd
npm install

# Start frontend in a new command prompt window
start cmd /k "cd /d C:\DataBaseProjectForHourseRacing\client\horseRacingFrontEnd && npm run dev"
