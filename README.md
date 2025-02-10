API TESTED LINK
postman: https://documenter.getpostman.com/view/39592422/2sAYX9nfi8

Contact Management API 🚀
This is a Node.js + Express.js API for managing contacts, built with MongoDB as the database. It supports CRUD operations such as creating, updating, deleting, and retrieving contacts. Additionally, a search functionality is included to find contacts by name or email.

📌 Features
✅ Create a new contact
✅ Retrieve all contacts
✅ Get a single contact by ID
✅ Update a contact by ID
✅ Delete a contact by ID
✅ Search contacts by name or email
✅ Data validation using Joi
✅ Uses MongoDB for storage

🔧 Installation & Setup
Clone the repository
git clone https://github.com/yourusername/contact-management.git
cd contact-management

Install dependencies
npm install

create .env file
MONGO_URI=your_mongodb_connection_string
PORT=5000

run the application 
npm run dev
or 
node server.js

 API Documentation & Testing
To make API testing easier, you can use the Postman Collection below:

👉 Postman Collection: https://documenter.getpostman.com/view/39592422/2sAYX9nfi8


API Endpoints
Method	Endpoint	Description
GET	/contacts	Fetch all contacts
POST	/contacts	Create a new contact
GET	/contacts/:id	Fetch a contact by ID
PUT	/contacts/:id	Update a contact by ID
DELETE	/contacts/:id	Delete a contact by ID
GET	/contacts/search/:query	Search contacts by name or email







{
	"info": {
		"_postman_id": "2ba56642-b1a2-4b18-9be9-9e6140749e15",
		"name": "contact_managenemt",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39592422"
	},
	"item": [
		{
			"name": "http://localhost:5000/contacts",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"namesh\",\r\n  \"email\": \"namesh@yahoo.com\",\r\n  \"phone\": \"9087654321\",\r\n  \"address\": \"987 Street, City\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/contacts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"contacts"
					]
				}
			},
			"response": [
				{
					"name": "http://localhost:5000/contacts",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"name\": \"namesh\",\r\n  \"email\": \"namesh@yahoo.com\",\r\n  \"phone\": \"9087654321\",\r\n  \"address\": \"987 Street, City\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/contacts",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"contacts"
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "174"
						},
						{
							"key": "ETag",
							"value": "W/\"ae-QJM532yA6hAbzQ7EE+jjvO0H7PA\""
						},
						{
							"key": "Date",
							"value": "Mon, 10 Feb 2025 11:17:39 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"name\": \"namesh\",\n    \"email\": \"namesh@yahoo.com\",\n    \"phone\": \"9087654321\",\n    \"address\": \"987 Street, City\",\n    \"_id\": \"67a9e0522f8feb5a285d78a0\",\n    \"createdAt\": \"2025-02-10T11:17:38.974Z\",\n    \"__v\": 0\n}"
				}
			]
		},
		{
			"name": "http://localhost:5000/contacts",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/contacts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"contacts"
					]
				}
			},
			"response": [
				{
					"name": "http://localhost:5000/contacts",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/contacts",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"contacts"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "353"
						},
						{
							"key": "ETag",
							"value": "W/\"161-jpcUBzIkpllBpA/ZZ9cC0wDNb0s\""
						},
						{
							"key": "Date",
							"value": "Mon, 10 Feb 2025 11:18:21 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "[\n    {\n        \"_id\": \"67a9dfcf2f8feb5a285d789e\",\n        \"name\": \"John Doe\",\n        \"email\": \"john@example.com\",\n        \"phone\": \"1234567890\",\n        \"address\": \"123 Street, City\",\n        \"createdAt\": \"2025-02-10T11:15:27.120Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"67a9e0522f8feb5a285d78a0\",\n        \"name\": \"namesh\",\n        \"email\": \"namesh@yahoo.com\",\n        \"phone\": \"9087654321\",\n        \"address\": \"987 Street, City\",\n        \"createdAt\": \"2025-02-10T11:17:38.974Z\",\n        \"__v\": 0\n    }\n]"
				}
			]
		},
		{
			"name": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"bumesh\",\r\n  \"email\": \"buma@email.com\",\r\n  \"phone\": \"0987654321\",\r\n  \"address\": \"567, ats, City\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"contacts",
						"67a9dfcf2f8feb5a285d789e"
					]
				}
			},
			"response": [
				{
					"name": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
					"originalRequest": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"name\": \"bumesh\",\r\n  \"email\": \"buma@email.com\",\r\n  \"phone\": \"0987654321\",\r\n  \"address\": \"567, ats, City\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"contacts",
								"67a9dfcf2f8feb5a285d789e"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "170"
						},
						{
							"key": "ETag",
							"value": "W/\"aa-BALWP60HuTNPK05ad/0LmV2e/Cc\""
						},
						{
							"key": "Date",
							"value": "Mon, 10 Feb 2025 11:20:31 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"67a9dfcf2f8feb5a285d789e\",\n    \"name\": \"bumesh\",\n    \"email\": \"buma@email.com\",\n    \"phone\": \"0987654321\",\n    \"address\": \"567, ats, City\",\n    \"createdAt\": \"2025-02-10T11:15:27.120Z\",\n    \"__v\": 0\n}"
				}
			]
		},
		{
			"name": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"contacts",
						"67a9dfcf2f8feb5a285d789e"
					]
				}
			},
			"response": [
				{
					"name": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
					"originalRequest": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/contacts/67a9dfcf2f8feb5a285d789e",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"contacts",
								"67a9dfcf2f8feb5a285d789e"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "42"
						},
						{
							"key": "ETag",
							"value": "W/\"2a-atdmZJt7qw1j0wEJ6Bbev8qrfkg\""
						},
						{
							"key": "Date",
							"value": "Mon, 10 Feb 2025 11:21:54 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Contact deleted successfully\"\n}"
				}
			]
		}
	]
}
