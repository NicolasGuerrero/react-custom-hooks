DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE patients (id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT);

CREATE TABLE doctors (id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT, specialty TEXT);

CREATE TABLE diseases (id SERIAL PRIMARY KEY, name TEXT);

CREATE TABLE diagnoses (id SERIAL PRIMARY KEY, patient_id INTEGER REFERENCES patients (id), disease_id INTEGER REFERENCES diseases (id), doctor_id INTEGER REFERENCES doctors (id));

CREATE TABLE visits ( id SERIAL PRIMARY KEY, date TEXT, patient_id INTEGER REFERENCES patients (id), doctor_id INTEGER REFERENCES doctors (id) );





