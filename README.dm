Installations:
-Download MySQL programs from here (https://dev.mysql.com/downloads/installer/) 
-If MySQL installer did not install MySQL Workbench install from here (https://dev.mysql.com/downloads/workbench/)
-Download Node.js from here (https://nodejs.org/en/download)

notes: sometimes MySQL workbench installer finish installing but it do not tell you and appeared like it is still installing, if you find the program installed in your machine just stop the installer by the task manger 

After Installations: 
-Open MySQL Workbench and create a data base with password v2$cqvJHPdnhufR2kSEe
-Delete any pre existing scheme 
-Make new scheme named hourse_racing (yes hourse with u...) 
-Insert Tables written in tables.sql then run queries in data.sql then last run the Procedures.sql 
-Start MySQL server 
note: sometimes you will need to start it manually throw these steps 
Press Windows Key + R to open the Run dialog.
Type services.msc and press Enter.
Look for a service named MySQL or MySQL80 (the number depends on your version).
Right-click the service and select Start.
If it starts successfully, return to MySQL Workbench and try to connect to your database instance—it should work now.
-Open the project throw a code editor & open a cmd terminal 
cd backend 
npm install 
npm start 
new cmd terminal 
cd client\horseRacingFrontEnd
npm install
npm run dev
