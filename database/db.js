import SQLite from 'react-native-sqlite-storage';

// Open the database
const db = SQLite.openDatabase(
  {
    name: 'cycleGO.db',
    location: 'default',
  },
  () => console.log('Database opened successfully'),
  error => console.error('Error opening database:', error)
);

// Create tables
export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS passes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        price REAL NOT NULL
      );`,
      [],
      () => console.log('Table "passes" created successfully'),
      error => console.error('Error creating table "passes":', error)
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS stations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL
      );`,
      [],
      () => console.log('Table "stations" created successfully'),
      error => console.error('Error creating table "stations":', error)
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS bikes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        model TEXT NOT NULL,
        status TEXT DEFAULT 'available',
        current_location TEXT,
        last_serviced_date DATETIME
      );`,
      [],
      () => console.log('Table "bikes" created successfully'),
      error => console.error('Error creating table "bikes":', error)
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS purchases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pass_id INTEGER NOT NULL,
        purchase_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        expiration_date DATETIME NOT NULL,
        FOREIGN KEY (pass_id) REFERENCES passes (id)
      );`,
      [],
      () => console.log('Table "purchases" created successfully'),
      error => console.error('Error creating table "purchases":', error)
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS bike_rentals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bike_id INTEGER NOT NULL,
        start_time DATETIME DEFAULT CURRENT_TIMESTAMP,
        end_time DATETIME,
        FOREIGN KEY (bike_id) REFERENCES bikes (id)
      );`
    );

  });
};

// Insert data
export const insertDefaultPasses = () => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT OR IGNORE INTO passes (type, price) VALUES 
      ("30min", 2.50),
      ("24h", 10.00);`,
      [],
      () => console.log('Default passes inserted successfully'),
      error => console.error('Error inserting default passes:', error)
    );
  });
};

export const insertBike = (model, status = 'available', currentLocation = null, lastServicedDate = null) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO bikes (model, status, current_location, last_serviced_date) VALUES (?, ?, ?, ?);`,
      [model, status, currentLocation, lastServicedDate],
      (_, result) => console.log('Bike inserted successfully:', result),
      error => console.error('Error inserting bike:', error)
    );
  });
};

export const insertStation = (name, latitude, longitude) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO stations (name, latitude, longitude) VALUES (?, ?, ?);`,
      [name, latitude, longitude],
      (_, result) => console.log('Station inserted successfully:', result),
      error => console.error('Error inserting station:', error)
    );
  });
};

// Fetch data
export const fetchPasses = callback => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM passes;`,
      [],
      (_, { rows }) => callback(rows._array),
      error => console.error('Error fetching passes:', error)
    );
  });
};

export const fetchBikes = callback => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM bikes;`,
      [],
      (_, { rows }) => callback(rows._array),
      error => console.error('Error fetching bikes:', error)
    );
  });
};

export const fetchStations = callback => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM stations;`,
      [],
      (_, { rows }) => callback(rows._array),
      error => console.error('Error fetching stations:', error)
    );
  });
};

export default db;
