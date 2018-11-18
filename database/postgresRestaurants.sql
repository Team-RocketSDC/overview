drop table if exists restaurants;

CREATE TABLE restaurants (
  _id INT PRIMARY KEY,
  name VARCHAR(50),
  address TEXT,
  cost INT,
  phone TEXT,
  website TEXT,
  googleMap TEXT
);

\copy images FROM 'database/restaurants.csv' CSV HEADER;
