DROP PROCEDURE IF EXISTS delete_owner_and_related;

DELIMITER $$

CREATE PROCEDURE delete_owner_and_related(IN p_ownerId varchar(15))
BEGIN
    DELETE FROM Owns WHERE ownerId = p_ownerId;
    DELETE FROM Owner WHERE ownerId = p_ownerId;
END$$

DELIMITER ;

DROP PROCEDURE IF EXISTS GetHorsesByOwnerLastName;

CREATE PROCEDURE GetHorsesByOwnerLastName(IN owner_lname VARCHAR(255))
    SELECT 
    h.horseId,
    h.horseName,
    h.age,
    t.trainerId,
    t.fname AS trainerFname,
    t.lname AS trainerLname
    FROM horse h
    JOIN owns o ON h.horseId = o.horseId
    JOIN owner ow ON o.ownerId = ow.ownerId
    JOIN stable s ON h.stableId = s.stableId
    JOIN trainer t ON s.stableId = t.stableId
    WHERE ow.lname = owner_lname;


DROP PROCEDURE IF EXISTS GetTrainersWithWinners;

CREATE PROCEDURE GetTrainersWithWinners()
    SELECT DISTINCT 
      t.trainerId, t.fname AS trainerFname, t.lname AS trainerLname,
      h.horseId, h.horseName,
      r.raceId, r.raceName
    FROM trainer t
    JOIN stable s ON s.stableId = t.stableId
    JOIN horse h ON h.stableId = s.stableId
    JOIN raceresults rr ON h.horseId = rr.horseId 
    JOIN race r ON rr.raceId = r.raceId
    WHERE rr.results = 'first';



DROP PROCEDURE IF EXISTS GetTrainerWinnings;

CREATE PROCEDURE GetTrainerWinnings()
    SELECT 
        t.trainerId,
        t.fname AS trainerFname,
        t.lname AS trainerLname,
        COALESCE(SUM(rr.prize), 0) AS totalWinnings
    FROM trainer t
    JOIN stable s ON s.stableId = t.stableId
    JOIN horse h ON h.stableId = s.stableId
    LEFT JOIN raceresults rr ON h.horseId = rr.horseId
    GROUP BY t.trainerId
    ORDER BY totalWinnings DESC;

DROP PROCEDURE IF EXISTS GetTrackStatistics;

CREATE PROCEDURE GetTrackStatistics()
    SELECT 
		tk.trackName,
        tk.location,
        tk.length,
		COUNT(DISTINCT r.raceId) AS raceCount,
		COUNT(rr.horseId) AS totalParticipants
    FROM track tk
    LEFT JOIN race r ON tk.trackName = r.trackName
    LEFT JOIN raceresults rr ON r.raceId = rr.raceId
    GROUP BY tk.trackName;




