# Aseesment-Task1

1- First run 'npm install' in project directory to install all the required dependencies.

2-Also run 'npm install --save -g forever'.Forever helps to restart the node server when stuck.

3-Run 'forever server.js' in project directory to start the server.After running the server all the data from input.csv will move to mongodb.

4-Your server will start running at localhost:5000.

5-You can send get request to localhost:5000/getByName/firstname, which will provide all the policy data and user data related to firstname.

6-You can send get request to localhost:5000/getByEmail/email, which will provide all the policy data and user data related to email.

7-You can send get request to localhost:5000/getLL, which will provide all the policy data of every user.

8.Once cpu usage becomes more than 70% the server will stop ans Forever will restart the server. 
