# Image Search Gallery

## Project Overview

This is a web application that allows users to search for images using the Pixabay API. Users can enter a search query to retrieve images and view them in a gallery format. The application supports pagination, allowing users to load more images with a "Load more" button. It also features smooth scrolling and a modal window for viewing larger versions of images. The application leverages Axios for making HTTP requests and is built with modular code architecture for scalability and maintainability.

## Key Features

- **Image Search:** Users can search for images by entering a keyword.
- **Gallery View:** Search results are displayed in a gallery format with image thumbnails.
- **Pagination:** The "Load more" button loads additional images for the current search query.
- **End of Results Notification:** A notification is displayed when all available results have been loaded.
- **Smooth Scrolling:** The page smoothly scrolls when new images are added.
- **Image Preview:** Users can click on thumbnails to view larger versions of the images in a modal window powered by SimpleLightbox.
- **Error Handling:** Provides user-friendly error messages using iziToast.
- **Axios Integration:** Uses Axios for all HTTP requests with async/await syntax for better readability and error handling.

## Technologies Used

- **HTML/CSS/JavaScript**
- **Pixabay API** for image search.
- **Axios** for handling HTTP requests.
- **SimpleLightbox** for modal image previews.
- **iziToast** for user notifications.
- **Vite** for project bundling and development.

## Usage Instructions

	1.	Enter a search query in the search field.
	2.	Click the Search button to retrieve images.
	3.	The results will be displayed in a gallery below the search bar.
	4.	To load more images, click the Load more button.
	5.	Click on any image thumbnail to view a larger version in a modal window.