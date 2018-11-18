drop table if exists images;

CREATE TABLE images (
  _id SERIAL PRIMARY KEY,
  category VARCHAR(30),
  restaurant INT,
  image TEXT
);

\copy images(category, restaurant, image) FROM 'database/images.csv' CSV HEADER;
\copy images(category, restaurant, image) FROM 'database/images2.csv' CSV HEADER;
\copy images(category, restaurant, image) FROM 'database/images3.csv' CSV HEADER;
