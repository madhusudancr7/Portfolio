
# Diabetic Retinopathy Detection using Deep Learning

This project is a web-based application designed to detect Diabetic Retinopathy from fundus images with high accuracy, leveraging deep learning models. It provides a user-friendly interface for real-time image uploads, model inference, and result visualization.

## Key Features

- **High-Accuracy Detection**: Utilizes Convolutional Neural Network (CNN) architectures (e.g., VGG16) trained on over 35,000 Kaggle retinal images to achieve 94% classification accuracy.
- **Image Preprocessing**: Implements robust image preprocessing and data augmentation pipelines using OpenCV and NumPy to enhance input quality and improve model generalization.
- **Real-Time Inference**: A user-friendly web interface built with Django allows for real-time image uploads and immediate prediction results.
- **End-to-End Workflow**: Integrates TensorFlow models for a seamless prediction flow, from image upload to result visualization.

## Tech Stack

- **Backend**: Django
- **Deep Learning**: TensorFlow, Keras
- **Image Processing**: OpenCV, NumPy, Pillow
- **Frontend**: HTML, CSS (can be extended with JavaScript frameworks)
- **Deployment (Conceptual)**: MLOps principles, Docker (optional)

## Project Structure

This repository contains the boilerplate code for the Django web application.

```
DiabeticRetinopathyDetection/
├── detection_app/              # Django app for the detection logic
│   ├── templates/
│   │   └── detection_app/
│   │       └── upload.html     # Frontend template for image upload
│   ├── urls.py                 # App-specific URL routing
│   └── views.py                # View logic for handling requests
├── d_retinopathy_project/      # Django project configuration
│   ├── settings.py             # Project settings
│   └── urls.py                 # Main URL routing
├── manage.py                   # Django's command-line utility
└── requirements.txt            # Python dependencies
```

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd DiabeticRetinopathyDetection
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *Note: Installing TensorFlow might require specific system configurations, especially if you want GPU support. Please refer to the official TensorFlow documentation.*

4.  **Run Django migrations:**
    *(While this boilerplate has no models, this is a standard step)*
    ```bash
    python manage.py migrate
    ```

5.  **Start the development server:**
    ```bash
    python manage.py runserver
    ```
    The application will be available at `http://127.0.0.1:8000`.

## Usage

- Navigate to the home page.
- Use the form to upload a fundus image of a retina.
- The application will process the image and display a placeholder for the prediction result.

**Note:** The model inference logic in `views.py` is a placeholder. You will need to load your trained TensorFlow/Keras model (`.h5` file) and implement the actual prediction logic.
