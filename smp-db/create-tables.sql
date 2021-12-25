CREATE SCHEMA fff_project;
USE fff_project;

CREATE TABLE userDetails(
  userNick VARCHAR(20) PRIMARY KEY,
  userImageUrl VARCHAR(10000),
  userGender VARCHAR(2)
);

CREATE TABLE userAbout(
userNick VARCHAR(20) PRIMARY KEY,
userAbout VARCHAR(200),
FOREIGN KEY (userNick) REFERENCES userDetails(userNick)
);

CREATE TABLE userFFF(
	userNick VARCHAR(20) PRIMARY KEY,
	family MEDIUMINT DEFAULT 0,
    friend MEDIUMINT DEFAULT 0,
    foe MEDIUMINT DEFAULT 0,
    FOREIGN KEY (userNick) REFERENCES userDetails(userNick)
);