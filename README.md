# 💼 Job Listing Platform

A full-stack job listing platform built with: 🖥️ Frontend: React.js, 🔧 Backend: Node.js + Express, 🗃️ Database: MongoDB, 🔍 Search Engine: OpenSearch (Elasticsearch compatible), 📬 API Testing: Postman, 🔐 Environment Variables: `.env` for secure configurations

## 🌐 Features

- Add new job listings  
- View all job listings  
- Search jobs using keywords across title, description, company, and location (OpenSearch)  
- Update job details  
- Delete job listings  

## OpenSearch Setup
 -   To run OpenSearch locally with Docker:
    docker run -d --name opensearch \
    -p 9200:9200 \
    -e "discovery.type=single-node" \
    opensearchproject/opensearch:latest

## Deployment Notes
 - Backend can be deployed on Render, Railway, or Heroku
 - Frontend can be deployed using Vercel, Netlify, or GitHub Pages
 - OpenSearch can be deployed using Docker or AWS OpenSearch Service



