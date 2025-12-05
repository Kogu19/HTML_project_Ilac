# Sports Cars Backend API

Backend API for browsing sports cars with next/prev endpoints.

## Description

This Node.js + Express server provides RESTful endpoints to navigate through a collection of sports cars. The API maintains a current index and allows moving forward, backward, or jumping to specific items.

## Installation

Install dependencies:
```bash
npm install
```

## Running the Server

Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Get Current Item
```
GET http://localhost:3000/item
```
Returns the current sports car without changing the index.

### Get Next Item
```
GET http://localhost:3000/item/next
```
Moves to the next sports car in the collection. Wraps to the first item when reaching the end.

### Get Previous Item
```
GET http://localhost:3000/item/prev
```
Moves to the previous sports car in the collection. Wraps to the last item when at the beginning.

### Get Item by ID
```
GET http://localhost:3000/item/:id
```
Returns the sports car at the specified index (e.g., `/item/0`, `/item/1`).

## Response Format

All successful responses return:
```json
{
  "currentIndex": 0,
  "item": {
    "title": "Ferrari 488 GTB",
    "desc": "Description of the car...",
    "img": "https://example.com/image.jpg"
  },
  "total": 5
}
```

## Testing



- `http://localhost:3000/item`
- `http://localhost:3000/item/next`
- `http://localhost:3000/item/prev`
- `http://localhost:3000/item/0`