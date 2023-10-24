-- -------------------------------------------------------------
-- TablePlus 5.5.2(512)
--
-- https://tableplus.com/
--
-- Database: registration
-- Generation Time: 2023-10-24 16:05:25.4390
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."_user" (
    "id" int4 NOT NULL,
    "email" varchar(255),
    "firstname" varchar(255),
    "lastname" varchar(255),
    "password" varchar(255),
    "role" varchar(255) CHECK ((role)::text = ANY ((ARRAY['USER'::character varying, 'ADMIN'::character varying])::text[])),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."_user" ("id", "email", "firstname", "lastname", "password", "role") VALUES
(1, 'admin@test.com', 'test', 'test', '$2a$10$D3io0hJQZb.cCBs0HXznLOvB7jxyGrymODfBeTQs8519h8Fojrh3i', 'ADMIN'),
(2, 'user@test.com', 'user', 'user', '$2a$10$Veryf3kN1IABTUwDl/X8ZOfL.84aYpmH5dQEi6MOjCpHjutKxlDxa', 'USER'),
(5, 'test@test.com', 'test', 'test', '$2a$10$fL4GD1/WUJRpcf4iAWkTF.arfhdy1Nd5DDstM5ycSUcXNnZo7n0jO', 'ADMIN');
