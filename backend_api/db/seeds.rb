# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
DB = {:conn => SQLite3::Database.new("./db/development.sqlite3")}

sql = <<-SQL
INSERT INTO "users" VALUES (1,'test','test','$2a$12$XmvKwBjphEeAdyq8f95SY.kG8/YwNvvpMmVPtM8ch7zSMgAQLEIlO','2020-10-23 18:58:14.061329','2020-10-23 18:58:14.061329');
INSERT INTO "recipes" VALUES (1,1,'test','test','test','test','test','test','test','test','test','test','test','test','test','2020-10-23 18:58:52.590538','2020-10-23 18:58:52.590538');
INSERT INTO "fermentables" VALUES (1,'test','2020-10-23 18:58:52.498541','2020-10-23 18:58:52.498541');
INSERT INTO "hops" VALUES (1,'test','test','test','2020-10-23 18:58:52.397857','2020-10-23 18:58:52.397857');
INSERT INTO "other_ingredients" VALUES (1,'test','2020-10-23 18:58:52.558438','2020-10-23 18:58:52.558438');
INSERT INTO "recipe_fermentables" VALUES (1,1,1,NULL,NULL,NULL,NULL,'2020-10-23 18:58:52.598062','2020-10-23 18:58:52.598062');
INSERT INTO "recipe_hops" VALUES (1,1,1,NULL,NULL,NULL,NULL,'2020-10-23 18:58:52.600400','2020-10-23 18:58:52.600400');
INSERT INTO "recipe_hops" VALUES (2,1,1,NULL,NULL,NULL,NULL,'2020-10-23 18:58:52.602145','2020-10-23 18:58:52.602145');
INSERT INTO "recipe_other_ingredients" VALUES (1,1,1,NULL,NULL,NULL,NULL,'2020-10-23 18:58:52.592265','2020-10-23 18:58:52.592265');
INSERT INTO "recipe_yeasts" VALUES (1,1,1,NULL,NULL,NULL,NULL,'2020-10-23 18:58:52.595460','2020-10-23 18:58:52.595460');
INSERT INTO "yeasts" VALUES (1,'test','2020-10-23 18:58:52.526845','2020-10-23 18:58:52.526845');

SQL

DB[:conn].execute_batch(sql)