# <div align="center"> 🏷️**Object-Relational Mapping (ORM) E-commerce back-end** </div>

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## <div align="center"> _Description_ 📝</div>

Building the back end for an e-commerce site using Express.js API and configuring it to use Sequelize to interact with MySQL database.

## <div align="center"> _Languages Used_ 💬</div>

Javascript, Express.js, Sequelize, MySQL database

---

## _Table of Contents_ 📖

1. 💾[Installation](#Installation)
2. 🖥️[Usage](#Usage)
3. 📎[Links](#Links)
4. 💳[Credits](#Credits)
5. 🪪[Licence](#Licence)
6. 🦡[Badges](#Badges)
7. ❓[Questions](#Questions)
8. 🧪[Tests](#Tests)

---

## _Installation💾_

- `npm i` (to get node-modules `dependencies(nodemon as dev, dotenv, express, mysql2, sequelize)` folder and package-lock.json file from package.json).

- Next run `node seeds/index.js` to get all the database info synced for use.

- `mysql -u root -p` > `show databases;`, `show tables;` and `SELECT * FROM (table name);` (to confirm that the database is seeded and tables are populated with desired data) > `source db/schema.sql`(to initiate the database) > `\quit`.

  ![db](./media/initiate-db.gif "db")

- Last but not the least, `npm run start` to start the server. Or, with nodemon installed as dev dependency, `npm run watch`.
  
  ![server start](./media/start.jpg "nodemon watch")

- external software needed to showcase the results: Insomnia.

## _Usage_🖥️

- Open Insomnia and:

- Type in `http://localhost/api/` (under GET, POST, PUT & DEL) followed by `categories` or `Tags` or `Products` to view details related to each.

  (To view the above mentioned install and usage process please take a look at this quick/short [walkthrough video](https://drive.google.com/file/d/1gwBEmskxJqLd5xgNgMLJQgByz1yd0DAg/view 'Below is a list of GIF representations of the categories results in insomnia shown in the video.'))

- To GET each of the three:
  ![Get](./media/GetCategories.gif "All categories")

- To GET each by ID:
  ![Get](./media/GetCatByID.gif "three egs: of categories by id.")

- To POST (create/insert):
  ![Create](./media/CreateCat.gif "a new Musical Instruments category is being created and stored with id#6.")

- To PUT (update):
  ![Update](./media/UpdateCat.gif "Music category with id#3 is being updated to Songs/Music.")

- To DEL (delete/destroy):
  ![Delete/Destroy](./media/DelCat.gif "Previously created category id#6 is being destroyed.")

## _Links_📎

<details>

<summary>Github repo and deployed Links</summary>

- <https://github.com/A-N26/ORM-e-commerce-back-end>

- No deployed link for this one.

</details>

## _Credits_💳

class sessions, Starter-code and google&youtube

## _License_🪪🦡

(**Please Click the BADGE for the license details.**)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## _Badges_🦡

![visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![Insomnia](https://img.shields.io/badge/Insomnia-for%20code%20result%20testing-%23A020F0) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## _Questions_❓

If you would like to as me anything (ama) about the project, please contact me on the info mentioned below:

<details>

<summary>Contact Me ✉️</summary>

- [My GitHub Profile](https://github.com/A-N26)

- e-mail - [📧](A-N26@github.com)

</details>

## _Contributing_

Please do not hesitate to fork this repo. And, there-after, create a new branch and commit, push that branch and create a pull request.☻

## _Tests_🧪

No testing currently implemented.
